/* @ds-bundle: {"format":4,"namespace":"GrupoSTFDesignSystem_eeb8eb","components":[{"name":"ArrowLink","sourcePath":"components/actions/ArrowLink.jsx"},{"name":"CircleButton","sourcePath":"components/actions/CircleButton.jsx"},{"name":"LogoCard","sourcePath":"components/brand/LogoCard.jsx"},{"name":"MisuseCard","sourcePath":"components/brand/MisuseCard.jsx"},{"name":"Swatch","sourcePath":"components/brand/Swatch.jsx"},{"name":"Eyebrow","sourcePath":"components/content/Eyebrow.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"SectionNumber","sourcePath":"components/content/SectionNumber.jsx"},{"name":"ValueList","sourcePath":"components/content/ValueList.jsx"},{"name":"Accordion","sourcePath":"components/display/Accordion.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Topbar","sourcePath":"components/navigation/Topbar.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/overlay/Tooltip.jsx"}],"sourceHashes":{"components/actions/ArrowLink.jsx":"626d3c8ff3c2","components/actions/CircleButton.jsx":"2a0cbc215aef","components/brand/LogoCard.jsx":"2466e53ac249","components/brand/MisuseCard.jsx":"9004a46c3bd3","components/brand/Swatch.jsx":"8b8191720c62","components/content/Eyebrow.jsx":"260b773fbda4","components/content/SectionHeading.jsx":"aed4a370107d","components/content/SectionNumber.jsx":"02a573b171bc","components/content/ValueList.jsx":"8f8a3d1a2a01","components/display/Accordion.jsx":"1ce37ede5e81","components/display/Badge.jsx":"68108d448c61","components/display/Card.jsx":"07bf81e10f2a","components/display/Stat.jsx":"1bc2f5842b7f","components/display/Tag.jsx":"fd6355b819f1","components/feedback/Toast.jsx":"3364905a3a38","components/forms/Button.jsx":"49e6c98ecb30","components/forms/Checkbox.jsx":"27fe84eb9eac","components/forms/Input.jsx":"dafa167a3b84","components/forms/Radio.jsx":"a7d9a23d3e15","components/forms/Select.jsx":"64c450503bf0","components/forms/Switch.jsx":"0fb22390bfb8","components/forms/Textarea.jsx":"a81278a17043","components/navigation/Breadcrumb.jsx":"57204b9f9aab","components/navigation/Pagination.jsx":"3c72ef9d4cca","components/navigation/Tabs.jsx":"b4915c5a6a72","components/navigation/Topbar.jsx":"fff2d06bc145","components/overlay/Dialog.jsx":"aae8c7516330","components/overlay/Tooltip.jsx":"33aef572e8c0","ui_kits/brand-manual/Applications.jsx":"e86c859ae2bb","ui_kits/brand-manual/BrandSections.jsx":"408b98c955b5","ui_kits/brand-manual/ColorType.jsx":"fc20bab6573d","ui_kits/brand-manual/Hero.jsx":"c654477f5452"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GrupoSTFDesignSystem_eeb8eb = window.GrupoSTFDesignSystem_eeb8eb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/ArrowLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ArrowLink({
  children,
  href = '#',
  arrow = '→',
  color = 'var(--gold)',
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, rest, {
    style: {
      display: 'flex',
      gap: 20,
      width: 'max-content',
      alignItems: 'center',
      color,
      fontFamily: 'var(--sans)',
      fontSize: 10,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      textDecoration: 'none'
    }
  }), children, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      transition: 'transform 180ms ease',
      transform: h ? 'translateX(4px)' : 'none'
    }
  }, arrow));
}
Object.assign(__ds_scope, { ArrowLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/ArrowLink.jsx", error: String((e && e.message) || e) }); }

// components/actions/CircleButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CircleButton({
  label,
  icon = '↓',
  tone = 'dark',
  onClick,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const onDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, rest, {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      padding: 0,
      background: 'none',
      border: 0,
      cursor: 'pointer',
      color: onDark ? 'var(--white)' : 'var(--navy)',
      fontFamily: 'var(--sans)',
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }), label && /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'grid',
      width: 30,
      height: 30,
      placeItems: 'center',
      borderRadius: '50%',
      transition: 'background 180ms ease, color 180ms ease',
      border: '1px solid ' + (h ? 'var(--gold)' : onDark ? 'rgba(255,255,255,0.35)' : 'var(--line)'),
      background: h ? 'var(--gold)' : 'transparent',
      color: h ? 'var(--navy)' : 'inherit'
    }
  }, icon));
}
Object.assign(__ds_scope, { CircleButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/CircleButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/LogoCard.jsx
try { (() => {
const V = {
  navy: ['var(--white)', 'var(--ink)', 'var(--line)', 'grupo-stf-navy.png'],
  blue: ['var(--navy)', 'var(--white)', 'var(--navy)', 'grupo-stf-white.png'],
  gold: ['var(--navy-dark)', 'var(--gold)', 'var(--navy-dark)', 'grupo-stf-gold.png']
};
function LogoCard({
  variant = 'navy',
  label,
  caption,
  assetBase = 'assets/',
  minHeight = 440,
  style
}) {
  const [bg, fg, bd, file] = V[variant] || V.navy;
  const micro = {
    fontSize: 9,
    letterSpacing: '0.12em',
    textTransform: 'uppercase'
  };
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'grid',
      minHeight,
      gridTemplateRows: 'auto 1fr auto',
      padding: 28,
      background: bg,
      color: fg,
      border: '1px solid ' + bd,
      fontFamily: 'var(--sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: micro
  }, label), /*#__PURE__*/React.createElement("img", {
    src: assetBase + file,
    alt: 'Logotipo Grupo STF ' + variant,
    style: {
      width: '76%',
      placeSelf: 'center'
    }
  }), /*#__PURE__*/React.createElement("small", {
    style: micro
  }, caption));
}
Object.assign(__ds_scope, { LogoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LogoCard.jsx", error: String((e && e.message) || e) }); }

// components/brand/MisuseCard.jsx
try { (() => {
const T = {
  stretched: {
    transform: 'scaleX(1.25)'
  },
  rotated: {
    transform: 'rotate(-12deg)'
  },
  outlined: {
    opacity: 0.35,
    filter: 'drop-shadow(3px 3px 0 var(--gold))'
  },
  'low-contrast': {
    opacity: 0.35
  }
};
function MisuseCard({
  index,
  text,
  type = 'stretched',
  assetBase = 'assets/',
  height = 270
}) {
  const low = type === 'low-contrast';
  return /*#__PURE__*/React.createElement("article", {
    style: {
      padding: 24,
      border: '1px solid var(--line)',
      fontFamily: 'var(--sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      height,
      overflow: 'hidden',
      placeItems: 'center',
      background: low ? 'var(--stone-dark)' : 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetBase + (low ? 'grupo-stf-white.png' : 'grupo-stf-navy.png'),
    alt: "",
    style: {
      width: '70%',
      ...T[type]
    }
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      position: 'absolute',
      right: 14,
      bottom: 12,
      color: 'var(--error)',
      fontSize: 24,
      fontWeight: 400
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      margin: '18px 0 8px',
      color: 'var(--gold)',
      fontSize: 10
    }
  }, index), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13
    }
  }, text));
}
Object.assign(__ds_scope, { MisuseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/MisuseCard.jsx", error: String((e && e.message) || e) }); }

// components/brand/Swatch.jsx
try { (() => {
const themes = {
  navy: ['var(--navy)', 'var(--white)'],
  gold: ['var(--gold)', 'var(--navy-dark)'],
  white: ['var(--warm-white)', 'var(--navy-dark)']
};
function Swatch({
  role,
  name,
  hex,
  rgb,
  cmyk,
  theme = 'navy',
  onCopy,
  hint = 'Toca para copiar',
  style
}) {
  const [h, setH] = React.useState(false);
  const [bg, fg] = themes[theme] || themes.navy;
  const micro = {
    fontSize: 9,
    letterSpacing: '0.13em',
    textTransform: 'uppercase'
  };
  const rows = [['HEX', hex], ['RGB', rgb], ['CMYK', cmyk]].filter(r => r[1]);
  return /*#__PURE__*/React.createElement("div", {
    role: "button",
    tabIndex: 0,
    onClick: () => onCopy && onCopy(hex),
    onKeyDown: e => (e.key === 'Enter' || e.key === ' ') && onCopy && onCopy(hex),
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      zIndex: h ? 2 : 'auto',
      display: 'flex',
      minWidth: 0,
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '60px 28px 45px',
      background: bg,
      color: fg,
      cursor: 'pointer',
      outline: 'none',
      transition: 'transform 250ms ease',
      transform: h ? 'translateY(-12px)' : 'none',
      fontFamily: 'var(--sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: micro
  }, role), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '10px 0',
      fontFamily: 'var(--serif)',
      fontSize: '2.4rem',
      fontWeight: 400,
      lineHeight: 1.1
    }
  }, name)), /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 'auto 0 0'
    }
  }, rows.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '14px 0',
      borderTop: '1px solid currentColor'
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      ...micro,
      margin: 0
    }
  }, k), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontSize: 14
    }
  }, v)))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      ...micro,
      marginTop: 50,
      opacity: 0.55
    }
  }, hint));
}
Object.assign(__ds_scope, { Swatch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Swatch.jsx", error: String((e && e.message) || e) }); }

// components/content/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  tone = 'ink',
  rule = false,
  style
}) {
  const color = tone === 'gold' ? 'var(--gold)' : tone === 'light' ? 'var(--white)' : 'inherit';
  return /*#__PURE__*/React.createElement("p", {
    style: {
      display: rule ? 'flex' : 'block',
      gap: 14,
      alignItems: 'center',
      margin: '0 0 24px',
      color,
      fontFamily: 'var(--sans)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      ...style
    }
  }, rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 1,
      background: 'var(--gold)'
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  eyebrowTone,
  title,
  emphasis,
  size = 'h2',
  onDark = false,
  children
}) {
  const fs = size === 'h3' ? 'clamp(3rem, 5vw, 5.5rem)' : 'clamp(3.5rem, 6.5vw, 7rem)';
  const lines = String(title || '').split('\n');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      color: onDark ? 'var(--white)' : 'inherit'
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: eyebrowTone || (onDark ? 'gold' : 'ink')
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--serif)',
      fontSize: fs,
      fontWeight: 400,
      letterSpacing: size === 'h3' ? 0 : '-0.04em',
      lineHeight: size === 'h3' ? 0.95 : 0.94
    }
  }, lines.map((l, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("br", null), l)), emphasis && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--gold)',
      fontWeight: 400
    }
  }, emphasis))), children);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionNumber.jsx
try { (() => {
function SectionNumber({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--gold)',
      fontFamily: 'var(--serif)',
      fontSize: 14,
      writingMode: 'vertical-rl',
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 1,
      height: 54,
      marginTop: 14,
      background: 'var(--gold)'
    }
  }));
}
Object.assign(__ds_scope, { SectionNumber });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionNumber.jsx", error: String((e && e.message) || e) }); }

// components/content/ValueList.jsx
try { (() => {
function ValueList({
  items = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + items.length + ', 1fr)',
      borderTop: '1px solid var(--line)'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
      padding: i ? '18px 20px 24px 20px' : '18px 20px 24px 0',
      borderRight: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold)',
      fontSize: 10
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 13,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, it))));
}
Object.assign(__ds_scope, { ValueList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ValueList.jsx", error: String((e && e.message) || e) }); }

// components/display/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  defaultOpen = 0,
  tone = 'light'
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const dark = tone === 'dark';
  const line = dark ? 'rgba(255,255,255,0.12)' : 'var(--line)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid ' + line,
      fontFamily: 'var(--sans)',
      color: dark ? 'var(--white)' : 'var(--ink)'
    }
  }, items.map((it, i) => {
    const on = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid ' + line
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-expanded": on,
      onClick: () => setOpen(on ? -1 : i),
      style: {
        display: 'grid',
        gridTemplateColumns: '40px 1fr 30px',
        alignItems: 'center',
        width: '100%',
        padding: '22px 0',
        background: 'none',
        border: 0,
        cursor: 'pointer',
        color: 'inherit',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--gold)',
        fontSize: 10
      }
    }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--serif)',
        fontSize: 24,
        lineHeight: 1.2
      }
    }, it.title), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        justifySelf: 'end',
        color: 'var(--gold)',
        fontSize: 20,
        transition: 'transform 180ms ease',
        transform: on ? 'rotate(45deg)' : 'none'
      }
    }, "+")), on && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 30px 24px 40px',
        fontSize: 14,
        lineHeight: 1.7,
        color: dark ? 'rgba(255,255,255,0.6)' : 'var(--muted)'
      }
    }, it.content));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const T = {
  navy: ['var(--navy)', 'var(--white)', 'var(--navy)'],
  gold: ['var(--gold)', 'var(--navy-dark)', 'var(--gold)'],
  outline: ['transparent', 'var(--navy)', 'var(--line)'],
  success: ['transparent', 'var(--success)', 'rgba(47,107,79,0.4)'],
  error: ['transparent', 'var(--error)', 'rgba(164,63,55,0.4)'],
  muted: ['var(--cream)', 'var(--muted)', 'var(--cream)']
};
function Badge({
  children,
  tone = 'navy',
  dot = false
}) {
  const [bg, fg, bd] = T[tone] || T.navy;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 8,
      alignItems: 'center',
      height: 24,
      padding: '0 10px',
      background: bg,
      color: fg,
      border: '1px solid ' + bd,
      fontFamily: 'var(--sans)',
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
const T = {
  light: ['var(--white)', 'var(--ink)', 'var(--line)', 'var(--muted)'],
  cream: ['var(--cream)', 'var(--ink)', 'var(--cream)', 'var(--muted)'],
  navy: ['var(--navy)', 'var(--white)', 'var(--navy)', 'rgba(255,255,255,0.6)']
};
function Card({
  index,
  eyebrow,
  title,
  children,
  footer,
  image,
  theme = 'light',
  interactive = false,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const [bg, fg, bd, mu] = T[theme] || T.light;
  const lift = interactive && h;
  return /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: bg,
      color: fg,
      border: '1px solid ' + (lift ? 'var(--gold)' : bd),
      cursor: interactive ? 'pointer' : 'default',
      transition: 'border-color 180ms ease, transform 250ms ease',
      transform: lift ? 'translateY(-6px)' : 'none',
      fontFamily: 'var(--sans)',
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 10',
      background: 'var(--stone)',
      backgroundImage: 'url(' + image + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: 28,
      flex: 1
    }
  }, (index || eyebrow) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 9,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: mu
    }
  }, /*#__PURE__*/React.createElement("span", null, eyebrow), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold)'
    }
  }, index)), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--serif)',
      fontSize: 30,
      fontWeight: 400,
      lineHeight: 1.05
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: mu
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 18,
      borderTop: '1px solid ' + (theme === 'navy' ? 'rgba(255,255,255,0.12)' : 'var(--line)')
    }
  }, footer)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
function Stat({
  value,
  suffix,
  label,
  tone = 'light'
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 18,
      borderTop: '1px solid ' + (dark ? 'rgba(255,255,255,0.12)' : 'var(--line)'),
      fontFamily: 'var(--sans)',
      color: dark ? 'var(--white)' : 'var(--navy)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--serif)',
      fontSize: 'clamp(3rem, 5vw, 4.5rem)',
      lineHeight: 1,
      letterSpacing: '-0.03em'
    }
  }, value, suffix && /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--gold)',
      fontStyle: 'normal'
    }
  }, suffix)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: dark ? 'rgba(255,255,255,0.6)' : 'var(--muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function Tag({
  children,
  selected = false,
  onClick,
  onRemove
}) {
  const [h, setH] = React.useState(false);
  const on = selected || h;
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      gap: 10,
      alignItems: 'center',
      height: 34,
      padding: '0 16px',
      borderRadius: 17,
      cursor: onClick ? 'pointer' : 'default',
      border: '1px solid ' + (on ? 'var(--navy)' : 'var(--line)'),
      background: selected ? 'var(--navy)' : 'transparent',
      color: selected ? 'var(--white)' : 'var(--navy)',
      fontFamily: 'var(--sans)',
      fontSize: 12,
      transition: 'all 180ms ease'
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("span", {
    role: "button",
    "aria-label": "Quitar",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      color: selected ? 'var(--gold)' : 'var(--muted)',
      fontSize: 14,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  message,
  visible = true,
  position = 'fixed'
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    "aria-live": "polite",
    style: {
      position,
      zIndex: 120,
      right: 30,
      bottom: 30,
      padding: '13px 18px',
      color: 'var(--white)',
      background: 'var(--navy-dark)',
      borderLeft: '3px solid var(--gold)',
      opacity: visible ? 1 : 0,
      pointerEvents: 'none',
      transform: visible ? 'translateY(0)' : 'translateY(10px)',
      transition: 'opacity 180ms ease, transform 180ms ease',
      fontFamily: 'var(--sans)',
      fontSize: 11
    }
  }, message);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const V = {
  primary: {
    bg: 'var(--navy)',
    fg: 'var(--white)',
    bd: 'var(--navy)',
    hbg: 'var(--navy-dark)',
    hfg: 'var(--white)',
    hbd: 'var(--navy-dark)'
  },
  gold: {
    bg: 'var(--gold)',
    fg: 'var(--navy-dark)',
    bd: 'var(--gold)',
    hbg: 'var(--navy)',
    hfg: 'var(--white)',
    hbd: 'var(--navy)'
  },
  outline: {
    bg: 'transparent',
    fg: 'var(--navy)',
    bd: 'var(--navy)',
    hbg: 'var(--navy)',
    hfg: 'var(--white)',
    hbd: 'var(--navy)'
  },
  inverse: {
    bg: 'transparent',
    fg: 'var(--white)',
    bd: 'rgba(255,255,255,0.35)',
    hbg: 'var(--gold)',
    hfg: 'var(--navy)',
    hbd: 'var(--gold)'
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--navy)',
    bd: 'transparent',
    hbg: 'rgba(12,39,67,0.06)',
    hfg: 'var(--navy)',
    hbd: 'transparent'
  }
};
const S = {
  sm: [38, '0 18px', 10],
  md: [48, '0 28px', 11],
  lg: [58, '0 36px', 12]
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'end',
  disabled = false,
  fullWidth = false,
  type = 'button',
  onClick,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const v = V[variant] || V.primary;
  const [ht, pad, fs] = S[size] || S.md;
  const on = h && !disabled;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, rest, {
    style: {
      display: 'inline-flex',
      gap: 14,
      alignItems: 'center',
      justifyContent: 'center',
      width: fullWidth ? '100%' : 'auto',
      height: ht,
      padding: pad,
      flexDirection: iconPosition === 'start' ? 'row-reverse' : 'row',
      fontFamily: 'var(--sans)',
      fontSize: fs,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: on ? v.hfg : v.fg,
      background: on ? v.hbg : v.bg,
      border: '1px solid ' + (on ? v.hbd : v.bd),
      borderRadius: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'background 180ms ease, color 180ms ease, border-color 180ms ease'
    }
  }), /*#__PURE__*/React.createElement("span", null, children), icon && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: fs + 5,
      fontWeight: 400,
      letterSpacing: 0
    }
  }, icon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  tone = 'light'
}) {
  const [c, setC] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : c;
  const dark = tone === 'dark';
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setC(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: e => {
      e.preventDefault();
      toggle();
    },
    style: {
      display: 'inline-flex',
      gap: 12,
      alignItems: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      fontFamily: 'var(--sans)',
      fontSize: 14,
      color: dark ? 'var(--white)' : 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "checkbox",
    "aria-checked": on,
    tabIndex: 0,
    onKeyDown: e => (e.key === ' ' || e.key === 'Enter') && (e.preventDefault(), toggle()),
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 20,
      height: 20,
      flex: 'none',
      border: '1px solid ' + (on ? 'var(--gold)' : dark ? 'rgba(255,255,255,0.35)' : 'rgba(12,39,67,0.35)'),
      background: on ? 'var(--gold)' : 'transparent',
      color: 'var(--navy-dark)',
      fontSize: 12,
      lineHeight: 1,
      transition: 'background 180ms ease, border-color 180ms ease'
    }
  }, on ? '✓' : ''), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const field = (focus, error, dark) => ({
  width: '100%',
  boxSizing: 'border-box',
  height: 50,
  padding: '0 16px',
  fontFamily: 'var(--sans)',
  fontSize: 15,
  color: dark ? 'var(--white)' : 'var(--ink)',
  background: dark ? 'rgba(255,255,255,0.04)' : 'var(--white)',
  border: '1px solid ' + (error ? 'var(--error)' : focus ? 'var(--gold)' : dark ? 'rgba(255,255,255,0.35)' : 'var(--line)'),
  borderRadius: 0,
  outline: 'none',
  transition: 'border-color 180ms ease'
});
function Input({
  label,
  hint,
  error,
  tone = 'light',
  id,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const fid = id || (label ? 'in-' + String(label).replace(/\s+/g, '-').toLowerCase() : undefined);
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      ...{
        display: 'block',
        marginBottom: 10,
        color: 'var(--muted)',
        fontFamily: 'var(--sans)',
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase'
      },
      color: dark ? 'rgba(255,255,255,0.6)' : 'var(--muted)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    onFocus: () => setF(true),
    onBlur: () => setF(false)
  }, rest, {
    style: field(f, error, dark)
  })), (error || hint) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 12,
      color: error ? 'var(--error)' : dark ? 'rgba(255,255,255,0.45)' : 'var(--muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  direction = 'column',
  tone = 'light'
}) {
  const [v, setV] = React.useState(defaultValue);
  const cur = value !== undefined ? value : v;
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 28 : 14,
      fontFamily: 'var(--sans)',
      fontSize: 14,
      color: dark ? 'var(--white)' : 'var(--ink)'
    }
  }, options.map(o => {
    const ov = typeof o === 'string' ? o : o.value;
    const ol = typeof o === 'string' ? o : o.label;
    const on = cur === ov;
    return /*#__PURE__*/React.createElement("label", {
      key: ov,
      onClick: () => {
        if (value === undefined) setV(ov);
        onChange && onChange(ov);
      },
      style: {
        display: 'inline-flex',
        gap: 12,
        alignItems: 'center',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      role: "radio",
      "aria-checked": on,
      tabIndex: 0,
      style: {
        display: 'grid',
        placeItems: 'center',
        width: 20,
        height: 20,
        borderRadius: '50%',
        border: '1px solid ' + (on ? 'var(--gold)' : dark ? 'rgba(255,255,255,0.35)' : 'rgba(12,39,67,0.35)'),
        transition: 'border-color 180ms ease'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: 'var(--gold)',
        transform: on ? 'scale(1)' : 'scale(0)',
        transition: 'transform 180ms ease'
      }
    })), ol);
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const field = (focus, error, dark) => ({
  width: '100%',
  boxSizing: 'border-box',
  height: 50,
  padding: '0 16px',
  fontFamily: 'var(--sans)',
  fontSize: 15,
  color: dark ? 'var(--white)' : 'var(--ink)',
  background: dark ? 'rgba(255,255,255,0.04)' : 'var(--white)',
  border: '1px solid ' + (error ? 'var(--error)' : focus ? 'var(--gold)' : dark ? 'rgba(255,255,255,0.35)' : 'var(--line)'),
  borderRadius: 0,
  outline: 'none',
  transition: 'border-color 180ms ease'
});
function Select({
  label,
  options = [],
  placeholder,
  error,
  hint,
  tone = 'light',
  id,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      ...{
        display: 'block',
        marginBottom: 10,
        color: 'var(--muted)',
        fontFamily: 'var(--sans)',
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase'
      },
      color: dark ? 'rgba(255,255,255,0.6)' : 'var(--muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    onFocus: () => setF(true),
    onBlur: () => setF(false)
  }, rest, {
    style: {
      ...field(f, error, dark),
      appearance: 'none',
      WebkitAppearance: 'none',
      paddingRight: 44,
      cursor: 'pointer'
    }
  }), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--gold)',
      fontSize: 14,
      pointerEvents: 'none'
    }
  }, "\u2193")), (error || hint) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 12,
      color: error ? 'var(--error)' : 'var(--muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  tone = 'light'
}) {
  const [c, setC] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : c;
  const dark = tone === 'dark';
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setC(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      gap: 14,
      alignItems: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      fontFamily: 'var(--sans)',
      fontSize: 14,
      color: dark ? 'var(--white)' : 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": on,
    onClick: toggle,
    disabled: disabled,
    style: {
      position: 'relative',
      width: 44,
      height: 24,
      padding: 0,
      flex: 'none',
      borderRadius: 12,
      cursor: 'inherit',
      border: '1px solid ' + (on ? 'var(--navy)' : dark ? 'rgba(255,255,255,0.35)' : 'rgba(12,39,67,0.35)'),
      background: on ? 'var(--navy)' : 'transparent',
      transition: 'background 180ms ease'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 23 : 3,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: on ? 'var(--gold)' : dark ? 'rgba(255,255,255,0.6)' : 'rgba(12,39,67,0.45)',
      transition: 'left 180ms ease, background 180ms ease'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const field = (focus, error, dark) => ({
  width: '100%',
  boxSizing: 'border-box',
  height: 50,
  padding: '0 16px',
  fontFamily: 'var(--sans)',
  fontSize: 15,
  color: dark ? 'var(--white)' : 'var(--ink)',
  background: dark ? 'rgba(255,255,255,0.04)' : 'var(--white)',
  border: '1px solid ' + (error ? 'var(--error)' : focus ? 'var(--gold)' : dark ? 'rgba(255,255,255,0.35)' : 'var(--line)'),
  borderRadius: 0,
  outline: 'none',
  transition: 'border-color 180ms ease'
});
function Textarea({
  label,
  hint,
  error,
  tone = 'light',
  rows = 5,
  id,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      ...{
        display: 'block',
        marginBottom: 10,
        color: 'var(--muted)',
        fontFamily: 'var(--sans)',
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase'
      },
      color: dark ? 'rgba(255,255,255,0.6)' : 'var(--muted)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    onFocus: () => setF(true),
    onBlur: () => setF(false)
  }, rest, {
    style: {
      ...field(f, error, dark),
      height: 'auto',
      padding: '14px 16px',
      lineHeight: 1.6,
      resize: 'vertical'
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 12,
      color: error ? 'var(--error)' : 'var(--muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items = [],
  tone = 'light'
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Ruta",
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      flexWrap: 'wrap',
      fontFamily: 'var(--sans)',
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, i > 0 && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color: 'var(--gold)'
      }
    }, "/"), last || !it.href ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: dark ? 'var(--white)' : 'var(--navy)',
        fontWeight: last ? 700 : 400
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href,
      style: {
        color: dark ? 'rgba(255,255,255,0.55)' : 'var(--muted)',
        textDecoration: 'none'
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function Pagination({
  page = 1,
  total = 1,
  onChange
}) {
  const [p, setP] = React.useState(page);
  React.useEffect(() => setP(page), [page]);
  const go = n => {
    if (n < 1 || n > total) return;
    setP(n);
    onChange && onChange(n);
  };
  const cell = on => ({
    display: 'grid',
    placeItems: 'center',
    width: 40,
    height: 40,
    padding: 0,
    border: '1px solid ' + (on ? 'var(--navy)' : 'var(--line)'),
    background: on ? 'var(--navy)' : 'transparent',
    color: on ? 'var(--white)' : 'var(--navy)',
    fontFamily: 'var(--serif)',
    fontSize: 15,
    cursor: 'pointer'
  });
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Paginaci\xF3n",
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => go(p - 1),
    style: {
      ...cell(false),
      fontFamily: 'var(--sans)',
      opacity: p === 1 ? 0.35 : 1
    }
  }, "\u2190"), Array.from({
    length: total
  }, (_, i) => i + 1).map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    type: "button",
    "aria-current": n === p,
    onClick: () => go(n),
    style: cell(n === p)
  }, String(n).padStart(2, '0'))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => go(p + 1),
    style: {
      ...cell(false),
      fontFamily: 'var(--sans)',
      opacity: p === total ? 0.35 : 1
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  tone = 'light'
}) {
  const first = tabs[0] && (tabs[0].value || tabs[0].label);
  const [v, setV] = React.useState(defaultValue || first);
  const cur = value !== undefined ? value : v;
  const dark = tone === 'dark';
  const active = tabs.find(t => (t.value || t.label) === cur);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 34,
      borderBottom: '1px solid ' + (dark ? 'rgba(255,255,255,0.12)' : 'var(--line)')
    }
  }, tabs.map(t => {
    const tv = t.value || t.label;
    const on = tv === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: tv,
      role: "tab",
      "aria-selected": on,
      type: "button",
      onClick: () => {
        if (value === undefined) setV(tv);
        onChange && onChange(tv);
      },
      style: {
        position: 'relative',
        padding: '0 0 16px',
        background: 'none',
        border: 0,
        cursor: 'pointer',
        fontSize: 11,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        fontWeight: on ? 700 : 500,
        color: dark ? 'var(--white)' : 'var(--navy)',
        opacity: on ? 1 : 0.6,
        transition: 'opacity 180ms ease'
      }
    }, t.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        background: 'var(--gold)',
        transform: on ? 'scaleX(1)' : 'scaleX(0)',
        transition: 'transform 180ms ease'
      }
    }));
  })), active && active.content && /*#__PURE__*/React.createElement("div", {
    role: "tabpanel",
    style: {
      paddingTop: 28
    }
  }, active.content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Topbar.jsx
try { (() => {
function NavItem({
  href,
  children,
  active
}) {
  const [h, setH] = React.useState(false);
  const on = h || active;
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      color: 'var(--white)',
      opacity: on ? 1 : 0.78,
      transition: 'opacity 180ms ease',
      textDecoration: 'none'
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 0,
      bottom: -7,
      left: 0,
      height: 1,
      background: 'var(--gold)',
      transform: on ? 'scaleX(1)' : 'scaleX(0)',
      transition: 'transform 180ms ease'
    }
  }));
}
function Topbar({
  title = 'Manual de marca',
  links = [],
  active,
  actionLabel = 'Descargar manual',
  onAction,
  position = 'fixed'
}) {
  const ui = {
    fontSize: 11,
    textTransform: 'uppercase'
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position,
      zIndex: 90,
      top: 0,
      left: 0,
      display: 'grid',
      width: '100%',
      height: 76,
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      padding: '0 4vw',
      color: 'var(--white)',
      background: 'rgba(7, 26, 45, 0.92)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      fontFamily: 'var(--sans)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#inicio",
    style: {
      ...ui,
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      width: 'max-content',
      letterSpacing: '0.1em',
      color: 'var(--white)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      letterSpacing: '0.16em'
    }
  }, "STF"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 17,
      background: 'rgba(255, 255, 255, 0.35)'
    }
  }), /*#__PURE__*/React.createElement("span", null, title)), /*#__PURE__*/React.createElement("nav", {
    style: {
      ...ui,
      display: 'flex',
      gap: 30,
      alignItems: 'center',
      letterSpacing: '0.08em'
    }
  }, links.map(l => /*#__PURE__*/React.createElement(NavItem, {
    key: l.href,
    href: l.href,
    active: active === l.href
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      justifySelf: 'end'
    }
  }, actionLabel && /*#__PURE__*/React.createElement(__ds_scope.CircleButton, {
    label: actionLabel,
    icon: "\u2193",
    onClick: onAction
  })));
}
Object.assign(__ds_scope, { Topbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Topbar.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  onClose,
  eyebrow,
  title,
  children,
  actions,
  width = 560,
  position = 'fixed'
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position,
      inset: 0,
      zIndex: 200,
      display: 'grid',
      placeItems: 'center',
      padding: 24,
      background: 'rgba(7,26,45,0.72)',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: width,
      background: 'var(--warm-white)',
      color: 'var(--ink)',
      borderTop: '3px solid var(--gold)',
      padding: '44px 44px 36px',
      fontFamily: 'var(--sans)',
      boxShadow: '0 25px 60px rgba(0,0,0,0.35)'
    }
  }, onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Cerrar",
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 18,
      right: 18,
      display: 'grid',
      placeItems: 'center',
      width: 30,
      height: 30,
      padding: 0,
      borderRadius: '50%',
      border: '1px solid var(--line)',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--navy)',
      fontSize: 16
    }
  }, "\xD7"), eyebrow && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      color: 'var(--gold)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.2em',
      textTransform: 'uppercase'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--serif)',
      fontSize: 38,
      fontWeight: 400,
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color: 'var(--navy)'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontSize: 15,
      lineHeight: 1.7,
      color: 'var(--muted)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end',
      marginTop: 32
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  children,
  placement = 'top',
  open
}) {
  const [h, setH] = React.useState(false);
  const show = open !== undefined ? open : h;
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 10px)'
  } : {
    bottom: 'calc(100% + 10px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    onFocus: () => setH(true),
    onBlur: () => setH(false),
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      ...pos,
      transform: 'translateX(-50%) ' + (show ? 'translateY(0)' : 'translateY(4px)'),
      opacity: show ? 1 : 0,
      pointerEvents: 'none',
      transition: 'opacity 180ms ease, transform 180ms ease',
      whiteSpace: 'nowrap',
      padding: '9px 13px',
      background: 'var(--navy-dark)',
      color: 'var(--white)',
      borderBottom: placement === 'bottom' ? 0 : '2px solid var(--gold)',
      borderTop: placement === 'bottom' ? '2px solid var(--gold)' : 0,
      fontFamily: 'var(--sans)',
      fontSize: 11,
      zIndex: 50
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-manual/Applications.jsx
try { (() => {
const {
  Eyebrow: EB,
  ArrowLink: AL,
  SectionHeading: SH3
} = window.GrupoSTFDesignSystem_eeb8eb;
function Applications() {
  return /*#__PURE__*/React.createElement("section", {
    className: "applications section-cream",
    id: "aplicaciones"
  }, /*#__PURE__*/React.createElement(SN, {
    n: "05"
  }), /*#__PURE__*/React.createElement("div", {
    className: "applications-heading"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 2
    }
  }, /*#__PURE__*/React.createElement(SH3, {
    eyebrow: "Aplicaciones",
    title: "La marca\nen acción."
  }))), /*#__PURE__*/React.createElement("div", {
    className: "application-grid"
  }, /*#__PURE__*/React.createElement("article", {
    className: "stationery-mockup"
  }, /*#__PURE__*/React.createElement("div", {
    className: "paper letterhead"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/grupo-stf-navy.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "paper-lines"
  }), /*#__PURE__*/React.createElement("small", null, "grupostf.mx")), /*#__PURE__*/React.createElement("div", {
    className: "paper business-card"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/grupo-stf-gold.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Nombre Apellido"), /*#__PURE__*/React.createElement("br", null), "Direcci\xF3n Corporativa")), /*#__PURE__*/React.createElement("span", {
    className: "mockup-label"
  }, "Papeler\xEDa corporativa")), /*#__PURE__*/React.createElement("article", {
    className: "digital-mockup"
  }, /*#__PURE__*/React.createElement("div", {
    className: "phone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "phone-top"
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/grupo-stf-white.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("p", null, "Visi\xF3n que", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "construye futuro.")), /*#__PURE__*/React.createElement("span", null, "GRUPO STF")), /*#__PURE__*/React.createElement("span", {
    className: "mockup-label",
    style: {
      color: '#fff'
    }
  }, "Comunicaci\xF3n digital")), /*#__PURE__*/React.createElement("article", {
    className: "signage-mockup"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wall"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wall-logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/grupo-stf-navy.png",
    alt: ""
  }))), /*#__PURE__*/React.createElement("span", {
    className: "mockup-label"
  }, "Se\xF1alizaci\xF3n"))));
}
function Closing() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "closing"
  }, /*#__PURE__*/React.createElement(EB, {
    tone: "gold"
  }, "Grupo STF"), /*#__PURE__*/React.createElement("blockquote", null, "Una identidad s\xF3lida", /*#__PURE__*/React.createElement("br", null), "para una visi\xF3n ", /*#__PURE__*/React.createElement("em", null, "sin l\xEDmites.")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/grupo-stf-white.png",
    alt: "Grupo STF"
  }), /*#__PURE__*/React.createElement("div", {
    className: "closing-meta"
  }, /*#__PURE__*/React.createElement("span", null, "Manual de identidad corporativa"), /*#__PURE__*/React.createElement("span", null, "Edici\xF3n 01 \u2014 2025"))), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("span", null, "Grupo STF \xA9 2025"), /*#__PURE__*/React.createElement("span", null, "Uso interno y proveedores autorizados"), /*#__PURE__*/React.createElement(AL, {
    href: "#inicio",
    arrow: "\u2191"
  }, "Volver al inicio")));
}
Object.assign(window, {
  Applications,
  Closing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-manual/Applications.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-manual/BrandSections.jsx
try { (() => {
const {
  SectionNumber,
  SectionHeading,
  ValueList,
  LogoCard,
  Eyebrow
} = window.GrupoSTFDesignSystem_eeb8eb;
const SN = ({
  n
}) => /*#__PURE__*/React.createElement(SectionNumber, {
  style: {
    position: 'absolute',
    top: 135,
    left: '3vw'
  }
}, n);
function Manifesto() {
  return /*#__PURE__*/React.createElement("section", {
    className: "manifesto section-light",
    id: "marca"
  }, /*#__PURE__*/React.createElement(SN, {
    n: "01"
  }), /*#__PURE__*/React.createElement("div", {
    className: "section-heading"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Esencia de marca",
    title: "La unión crea\nvalor duradero."
  })), /*#__PURE__*/React.createElement("div", {
    className: "manifesto-copy"
  }, /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Grupo STF es una organizaci\xF3n que integra capacidades, experiencia y visi\xF3n para crear oportunidades con impacto sostenible."), /*#__PURE__*/React.createElement("p", null, "Nuestra identidad parte de una idea esencial: distintas fuerzas pueden converger en una estructura m\xE1s s\xF3lida. El s\xEDmbolo entrelazado representa esa uni\xF3n; una arquitectura visual que habla de respaldo, crecimiento y relaciones de largo plazo."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 70
    }
  }, /*#__PURE__*/React.createElement(ValueList, {
    items: ['Solidez', 'Visión', 'Confianza']
  }))));
}
function LogoIntro() {
  return /*#__PURE__*/React.createElement("section", {
    className: "logo-intro section-navy",
    id: "logotipo"
  }, /*#__PURE__*/React.createElement(SN, {
    n: "02"
  }), /*#__PURE__*/React.createElement("div", {
    className: "section-heading light-heading"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Sistema de identidad",
    title: "El logotipo",
    onDark: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "logo-stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo-stage-label"
  }, "Versi\xF3n principal / fondo institucional"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/grupo-stf-white.png",
    alt: "Versi\xF3n principal blanca"
  }), /*#__PURE__*/React.createElement("div", {
    className: "logo-measure measure-top"
  }, /*#__PURE__*/React.createElement("span", null, "10x")), /*#__PURE__*/React.createElement("div", {
    className: "logo-measure measure-side"
  }, /*#__PURE__*/React.createElement("span", null, "4.7x"))), /*#__PURE__*/React.createElement("p", {
    className: "logo-description"
  }, "El logotipo combina un s\xEDmbolo geom\xE9trico de piezas entrelazadas con una firma tipogr\xE1fica de alto contraste. Sus elementos funcionan como una unidad y nunca deben reconstruirse o separarse."));
}
function LogoRules() {
  return /*#__PURE__*/React.createElement("section", {
    className: "logo-rules section-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rule-block clear-space"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rule-copy"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "\xC1rea de protecci\xF3n",
    title: "Espacio para\nrespirar.",
    size: "h3"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 34
    }
  }, "Para preservar la presencia del logotipo, se establece un \xE1rea m\xEDnima libre equivalente a la altura de la letra \u201CT\u201D. Ning\xFAn texto, imagen o borde debe invadir esta zona.")), /*#__PURE__*/React.createElement("div", {
    className: "clear-space-demo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-label x-top"
  }, "x"), /*#__PURE__*/React.createElement("div", {
    className: "x-label x-left"
  }, "x"), /*#__PURE__*/React.createElement("div", {
    className: "safe-area"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/grupo-stf-navy.png",
    alt: "\xC1rea de protecci\xF3n"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "rule-block minimum-size"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rule-copy"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Tama\xF1o m\xEDnimo",
    title: "Siempre\nreconocible.",
    size: "h3"
  })), /*#__PURE__*/React.createElement("div", {
    className: "size-examples"
  }, /*#__PURE__*/React.createElement("div", {
    className: "size-card size-digital"
  }, /*#__PURE__*/React.createElement("span", null, "Digital"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/grupo-stf-navy.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "dimension"
  }, /*#__PURE__*/React.createElement("i", null), "120 px", /*#__PURE__*/React.createElement("i", null))), /*#__PURE__*/React.createElement("div", {
    className: "size-card size-print"
  }, /*#__PURE__*/React.createElement("span", null, "Impreso"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/grupo-stf-navy.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "dimension"
  }, /*#__PURE__*/React.createElement("i", null), "32 mm", /*#__PURE__*/React.createElement("i", null))))));
}
function Versions() {
  return /*#__PURE__*/React.createElement("section", {
    className: "versions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "versions-heading"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 2
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Versiones autorizadas",
    title: "Una firma,\ntres expresiones."
  }))), /*#__PURE__*/React.createElement("div", {
    className: "version-grid"
  }, /*#__PURE__*/React.createElement(LogoCard, {
    variant: "navy",
    label: "01 / Principal",
    caption: "Azul STF sobre blanco",
    assetBase: "../../assets/"
  }), /*#__PURE__*/React.createElement(LogoCard, {
    variant: "blue",
    label: "02 / Invertida",
    caption: "Blanco sobre azul STF",
    assetBase: "../../assets/"
  }), /*#__PURE__*/React.createElement(LogoCard, {
    variant: "gold",
    label: "03 / Especial",
    caption: "Dorado sobre azul STF",
    assetBase: "../../assets/"
  })));
}
Object.assign(window, {
  Manifesto,
  LogoIntro,
  LogoRules,
  Versions,
  SN
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-manual/BrandSections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-manual/ColorType.jsx
try { (() => {
const {
  Swatch,
  SectionHeading: SH2,
  ArrowLink,
  MisuseCard
} = window.GrupoSTFDesignSystem_eeb8eb;
function ColorSection({
  onCopy
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "color-section",
    id: "color"
  }, /*#__PURE__*/React.createElement(SN, {
    n: "03"
  }), /*#__PURE__*/React.createElement("div", {
    className: "color-heading"
  }, /*#__PURE__*/React.createElement(SH2, {
    eyebrow: "Paleta institucional",
    title: "Color con",
    emphasis: "car\xE1cter.",
    onDark: true
  }), /*#__PURE__*/React.createElement("p", null, "Una paleta contenida que equilibra autoridad, distinci\xF3n y claridad. El azul lidera; el dorado acent\xFAa; el blanco da espacio.")), /*#__PURE__*/React.createElement(Swatch, {
    theme: "navy",
    role: "Color primario",
    name: "Azul STF",
    hex: "#0C2743",
    rgb: "12 \xB7 39 \xB7 67",
    cmyk: "100 \xB7 74 \xB7 38 \xB7 32",
    onCopy: onCopy
  }), /*#__PURE__*/React.createElement(Swatch, {
    theme: "gold",
    role: "Color de acento",
    name: "Oro STF",
    hex: "#BF9A5B",
    rgb: "191 \xB7 154 \xB7 91",
    cmyk: "22 \xB7 36 \xB7 68 \xB7 6",
    onCopy: onCopy
  }), /*#__PURE__*/React.createElement(Swatch, {
    theme: "white",
    role: "Color de soporte",
    name: "Blanco c\xE1lido",
    hex: "#F7F5F0",
    rgb: "247 \xB7 245 \xB7 240",
    cmyk: "2 \xB7 2 \xB7 4 \xB7 0",
    onCopy: onCopy
  }));
}
const ABC = /*#__PURE__*/React.createElement(React.Fragment, null, "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm", /*#__PURE__*/React.createElement("br", null), "Nn \xD1\xF1 Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz");
function TypeSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "type-section section-light",
    id: "tipografia"
  }, /*#__PURE__*/React.createElement(SN, {
    n: "04"
  }), /*#__PURE__*/React.createElement("div", {
    className: "type-intro"
  }, /*#__PURE__*/React.createElement(SH2, {
    eyebrow: "Sistema tipogr\xE1fico",
    title: "Una voz clara,\nprecisa y humana."
  })), /*#__PURE__*/React.createElement("div", {
    className: "type-display"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-role"
  }, "Tipograf\xEDa de expresi\xF3n"), /*#__PURE__*/React.createElement("div", {
    className: "font-name"
  }, "DM Serif", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "Display")), /*#__PURE__*/React.createElement("div", {
    className: "alphabet serif-alphabet"
  }, ABC), /*#__PURE__*/React.createElement("p", null, "Para titulares editoriales y mensajes de alto impacto. Su contraste aporta sofisticaci\xF3n sin perder cercan\xEDa.")), /*#__PURE__*/React.createElement("div", {
    className: "type-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-role"
  }, "Tipograf\xEDa funcional"), /*#__PURE__*/React.createElement("div", {
    className: "font-name"
  }, "Manrope"), /*#__PURE__*/React.createElement("div", {
    className: "alphabet"
  }, ABC), /*#__PURE__*/React.createElement("div", {
    className: "weights"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400
    }
  }, "Regular 400"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, "Medium 500"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "Bold 700"))), /*#__PURE__*/React.createElement("div", {
    className: "type-sample"
  }, /*#__PURE__*/React.createElement("span", null, "Ejemplo de jerarqu\xEDa"), /*#__PURE__*/React.createElement("h3", null, "Construimos valor", /*#__PURE__*/React.createElement("br", null), "para el futuro."), /*#__PURE__*/React.createElement("p", null, "Nuestra visi\xF3n integra experiencia y capacidad para impulsar proyectos que generan confianza, crecimiento y permanencia."), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 2,
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(ArrowLink, {
    href: "#aplicaciones"
  }, "Conocer m\xE1s"))));
}
function Incorrect() {
  const items = [['stretched', 'No deformar ni alterar proporciones.'], ['rotated', 'No rotar ni cambiar la orientación.'], ['outlined', 'No aplicar contornos, sombras o efectos.'], ['low-contrast', 'No usar sobre fondos sin contraste.']];
  return /*#__PURE__*/React.createElement("section", {
    className: "incorrect-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "incorrect-heading"
  }, /*#__PURE__*/React.createElement(SH2, {
    eyebrow: "Integridad visual",
    title: "Lo que no\ndebemos hacer."
  }), /*#__PURE__*/React.createElement("p", null, "La consistencia protege el reconocimiento de la marca. Estos principios aplican en todos los medios y escalas.")), /*#__PURE__*/React.createElement("div", {
    className: "incorrect-grid"
  }, items.map(([t, x], i) => /*#__PURE__*/React.createElement(MisuseCard, {
    key: t,
    index: '0' + (i + 1),
    type: t,
    text: x,
    assetBase: "../../assets/"
  }))));
}
Object.assign(window, {
  ColorSection,
  TypeSection,
  Incorrect
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-manual/ColorType.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-manual/Hero.jsx
try { (() => {
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "inicio"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-grid",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta"
  }, /*#__PURE__*/React.createElement("span", null, "Identidad corporativa"), /*#__PURE__*/React.createElement("span", null, "Edici\xF3n 01 \u2014 2025")), /*#__PURE__*/React.createElement("div", {
    className: "hero-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-kicker"
  }, "Grupo STF"), /*#__PURE__*/React.createElement("h1", null, "Solidez que", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "trasciende.")), /*#__PURE__*/React.createElement("p", null, "Una identidad construida para comunicar confianza, visi\xF3n y permanencia en cada punto de contacto.")), /*#__PURE__*/React.createElement("div", {
    className: "hero-logo-wrap"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/grupo-stf-white.png",
    alt: "Logotipo de Grupo STF"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-scroll"
  }, /*#__PURE__*/React.createElement("span", null, "Explorar identidad"), /*#__PURE__*/React.createElement("span", {
    className: "scroll-line",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-index"
  }, "01"));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-manual/Hero.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ArrowLink = __ds_scope.ArrowLink;

__ds_ns.CircleButton = __ds_scope.CircleButton;

__ds_ns.LogoCard = __ds_scope.LogoCard;

__ds_ns.MisuseCard = __ds_scope.MisuseCard;

__ds_ns.Swatch = __ds_scope.Swatch;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.SectionNumber = __ds_scope.SectionNumber;

__ds_ns.ValueList = __ds_scope.ValueList;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Topbar = __ds_scope.Topbar;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
