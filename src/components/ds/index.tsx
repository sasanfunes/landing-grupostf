import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";
import s from "./ds.module.css";

const cx = (...c: Array<string | false | null | undefined>) => c.filter(Boolean).join(" ");

/* ───── Eyebrow ───── */
export function Eyebrow({
  children,
  tone = "ink",
  rule = false,
  className,
}: {
  children: ReactNode;
  tone?: "ink" | "gold" | "light";
  rule?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cx(
        s.eyebrow,
        rule && s.eyebrowRule,
        tone === "gold" && s.toneGold,
        tone === "light" && s.toneLight,
        className,
      )}
    >
      {children}
    </p>
  );
}

/* ───── SectionHeading ───── */
export function SectionHeading({
  eyebrow,
  eyebrowTone,
  title,
  emphasis,
  size = "h2",
  onDark = false,
  id,
}: {
  eyebrow?: string;
  eyebrowTone?: "ink" | "gold" | "light";
  title: string;
  emphasis?: string;
  size?: "h2" | "h3";
  onDark?: boolean;
  id?: string;
}) {
  const lines = title.split("\n");
  return (
    <div className={cx(s.heading, onDark && s.headingDark)}>
      {eyebrow && <Eyebrow tone={eyebrowTone ?? (onDark ? "gold" : "ink")}>{eyebrow}</Eyebrow>}
      <h2 id={id} className={cx(s.title, size === "h3" ? s.titleH3 : s.titleH2)}>
        {lines.map((l, i) => (
          <span key={i}>
            {i > 0 && <br />}
            {l}
          </span>
        ))}
        {emphasis && (
          <>
            <br />
            <em>{emphasis}</em>
          </>
        )}
      </h2>
    </div>
  );
}

/* ───── SectionNumber ───── */
export function SectionNumber({ children }: { children: ReactNode }) {
  return (
    <div className={s.rail} aria-hidden="true">
      {children}
    </div>
  );
}

/* ───── Stat ───── */
export function Stat({ value, suffix, label }: { value: ReactNode; suffix?: string; label: string }) {
  return (
    <div className={s.stat}>
      <div className={s.statValue}>
        {value}
        {suffix && <em>{suffix}</em>}
      </div>
      <div className={s.statLabel}>{label}</div>
    </div>
  );
}

/* ───── Button ───── */
type ButtonVariant = "primary" | "gold" | "outline" | "inverse" | "ghost";
type ButtonSize = "sm" | "md" | "lg";
type ButtonOwnProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  fullWidth?: boolean;
  children: ReactNode;
};

function buttonClass(variant: ButtonVariant, size: ButtonSize, fullWidth?: boolean, extra?: string) {
  return cx(s.btn, s[variant], s[size], fullWidth && s.full, extra);
}

export function Button({
  variant = "primary",
  size = "md",
  icon,
  fullWidth,
  children,
  className,
  type = "button",
  ...rest
}: ButtonOwnProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={buttonClass(variant, size, fullWidth, className)} {...rest}>
      <span>{children}</span>
      {icon && (
        <span className={s.btnIcon} aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  icon,
  fullWidth,
  children,
  className,
  ...rest
}: ButtonOwnProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={buttonClass(variant, size, fullWidth, className)} {...rest}>
      <span>{children}</span>
      {icon && (
        <span className={s.btnIcon} aria-hidden="true">
          {icon}
        </span>
      )}
    </a>
  );
}

/* ───── CircleButton (como enlace) ───── */
export function CircleLink({
  label,
  icon = "↓",
  tone = "dark",
  className,
  ...rest
}: {
  label?: string;
  icon?: ReactNode;
  tone?: "dark" | "light";
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cx(s.circleBtn, tone === "dark" ? s.circleDark : s.circleLight, className)} {...rest}>
      {label && <span>{label}</span>}
      <span className={s.circle} aria-hidden="true">
        {icon}
      </span>
    </a>
  );
}

/* ───── Input / Textarea ───── */
type FieldProps = {
  label: string;
  hint?: string;
  error?: boolean;
  style?: CSSProperties;
};

export function Input({
  label,
  hint,
  error,
  id,
  name,
  required,
  style,
  ...rest
}: FieldProps & InputHTMLAttributes<HTMLInputElement>) {
  const fid = id ?? `in-${name}`;
  const hid = hint ? `${fid}-hint` : undefined;
  return (
    <div className={s.field} style={style}>
      <label htmlFor={fid} className={s.label}>
        {label}
        {required && (
          <span className={s.req} aria-hidden="true">
            *
          </span>
        )}
      </label>
      <input
        id={fid}
        name={name}
        required={required}
        aria-invalid={error || undefined}
        aria-describedby={hid}
        className={s.control}
        {...rest}
      />
      {hint && (
        <div id={hid} className={s.hint}>
          {hint}
        </div>
      )}
    </div>
  );
}

export function Textarea({
  label,
  hint,
  error,
  id,
  name,
  rows = 5,
  required,
  style,
  ...rest
}: FieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const fid = id ?? `ta-${name}`;
  return (
    <div className={s.field} style={style}>
      <label htmlFor={fid} className={s.label}>
        {label}
        {required && (
          <span className={s.req} aria-hidden="true">
            *
          </span>
        )}
      </label>
      <textarea
        id={fid}
        name={name}
        rows={rows}
        required={required}
        aria-invalid={error || undefined}
        className={s.control}
        {...rest}
      />
      {hint && <div className={s.hint}>{hint}</div>}
    </div>
  );
}
