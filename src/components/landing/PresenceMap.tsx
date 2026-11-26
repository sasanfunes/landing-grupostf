"use client";

import { geoGraticule10, geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import type { FeatureCollection, Geometry } from "geojson";
import type { GeometryCollection, Topology } from "topojson-specification";
import { useLang } from "./LangContext";
import m from "./PresenceMap.module.css";

const W = 1000;
const H = 560;
const PRESENT = new Set(["Mexico", "Honduras", "Spain"]);

type Office = {
  key: "honduras" | "mexico" | "espana";
  hq?: boolean;
  lon: number;
  lat: number;
  dx: number;
  dy: number;
  anchor: "start" | "end" | "middle";
  /** Posición alternativa de la etiqueta en pantallas angostas (etiquetas más grandes). */
  narrow?: { dx: number; dy: number; anchor: "start" | "end" | "middle" };
};

const OFFICES: Office[] = [
  { key: "honduras", hq: true, lon: -86.6, lat: 14.8, dx: 12, dy: 16, anchor: "start" },
  {
    key: "mexico",
    lon: -101.5,
    lat: 22.5,
    dx: -12,
    dy: 4,
    anchor: "end",
    narrow: { dx: 0, dy: -12, anchor: "middle" },
  },
  {
    key: "espana",
    lon: -3.7,
    lat: 40.2,
    dx: 12,
    dy: 4,
    anchor: "start",
    narrow: { dx: -12, dy: 4, anchor: "end" },
  },
];

const projection = geoNaturalEarth1().fitExtent(
  [
    [30, 20],
    [W - 30, H - 40],
  ],
  {
    type: "MultiPoint",
    coordinates: [
      [-112, 46],
      [8, 46],
      [-112, 8],
      [8, 8],
    ],
  },
);
const path = geoPath(projection);

type CountryShape = { id: string; d: string; present: boolean };

export default function PresenceMap({ play }: { play: boolean }) {
  const { t, lang } = useLang();
  const [countries, setCountries] = useState<CountryShape[] | null>(null);
  const [drawn, setDrawn] = useState<Record<string, boolean>>({});
  const [k, setK] = useState(1);
  const svgRef = useRef<SVGSVGElement>(null);

  // Atlas mundial (110m) cargado bajo demanda.
  useEffect(() => {
    let alive = true;
    import("world-atlas/countries-110m.json").then((mod) => {
      if (!alive) return;
      const topo = (mod.default ?? mod) as unknown as Topology<{ countries: GeometryCollection<{ name: string }> }>;
      const fc = feature(topo, topo.objects.countries) as FeatureCollection<Geometry, { name: string }>;
      setCountries(
        fc.features
          .map((f, i) => ({
            id: String(f.id ?? i),
            d: path(f) ?? "",
            present: PRESENT.has(f.properties?.name ?? ""),
          }))
          .filter((c) => c.d),
      );
    });
    return () => {
      alive = false;
    };
  }, []);

  // En pantallas angostas el SVG se reduce mucho: escalamos puntos y etiquetas para que sigan legibles.
  useEffect(() => {
    const el = svgRef.current;
    if (!el || !("ResizeObserver" in window)) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width || W;
      setK(w < 700 ? Math.min(3.2, 950 / w) : 1);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const graticule = useMemo(() => path(geoGraticule10()) ?? "", []);
  const hub = projection([OFFICES[0].lon, OFFICES[0].lat])!;
  const arcs = OFFICES.slice(1).map((o, idx) => {
    const p = projection([o.lon, o.lat])!;
    const mx = (hub[0] + p[0]) / 2;
    const my = Math.min(hub[1], p[1]) - Math.hypot(p[0] - hub[0], p[1] - hub[1]) * 0.25;
    return { key: o.key, d: `M${hub[0]},${hub[1]} Q${mx},${my} ${p[0]},${p[1]}`, delay: 600 + (idx + 1) * 250 };
  });

  const ready = play && countries !== null;

  return (
    <svg
      ref={svgRef}
      className={m.svg}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label={t.mapTitle}
      style={{ "--k": k } as CSSProperties}
      data-ready={ready || undefined}
    >
      <path d={graticule} className={m.graticule} />
      <g>
        {countries?.map((c) => (
          <path key={c.id} d={c.d} className={c.present ? m.present : m.land} />
        ))}
      </g>
      <g>
        {ready &&
          arcs.map((a) =>
            drawn[a.key] ? (
              <path key={a.key} d={a.d} className={m.arcFlow} strokeWidth={k} />
            ) : (
              <path
                key={a.key}
                d={a.d}
                pathLength={1}
                className={m.arcDraw}
                strokeWidth={k}
                style={{ animationDelay: `${a.delay}ms` }}
                onAnimationEnd={() => setDrawn((v) => ({ ...v, [a.key]: true }))}
              />
            ),
          )}
      </g>
      <g>
        {OFFICES.map((o, idx) => {
          const [x, y] = projection([o.lon, o.lat])!;
          const delay = idx ? 800 + idx * 250 : 200;
          const lbl = k > 1 && o.narrow ? o.narrow : o;
          return (
            <g
              key={o.key}
              transform={`translate(${x} ${y})`}
              className={m.marker}
              style={{ transitionDelay: `${delay}ms` }}
            >
              <circle className={m.ring} r={(o.hq ? 7 : 5) * k} />
              <circle r={(o.hq ? 5 : 3.5) * k} className={m.dot} strokeWidth={1.5 * k} />
              <text
                className={o.hq ? `${m.label} ${m.hq}` : m.label}
                x={lbl.dx * k}
                y={lbl.dy * k}
                textAnchor={lbl.anchor}
                fontSize={10 * k}
                lang={lang}
              >
                {t.countries[o.key]}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}
