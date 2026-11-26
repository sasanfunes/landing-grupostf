const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export type FieldErrors = Partial<Record<string, true>>;

export function text(form: FormData, name: string): string {
  const v = form.get(name);
  return typeof v === "string" ? v.trim() : "";
}

export function checkName(v: string, errors: FieldErrors, key = "name") {
  if (v.length < 2 || v.length > 120) errors[key] = true;
}

export function checkEmail(v: string, errors: FieldErrors, key = "email") {
  if (v.length > 254 || !EMAIL_RE.test(v)) errors[key] = true;
}

export function checkMax(v: string, max: number, errors: FieldErrors, key: string) {
  if (v.length > max) errors[key] = true;
}

export function checkOptionalUrl(v: string, errors: FieldErrors, key: string) {
  if (!v) return;
  if (v.length > 500) {
    errors[key] = true;
    return;
  }
  try {
    const u = new URL(/^https?:\/\//i.test(v) ? v : `https://${v}`);
    if (!u.hostname.includes(".")) errors[key] = true;
  } catch {
    errors[key] = true;
  }
}

export function normalizeUrl(v: string): string | null {
  if (!v) return null;
  return /^https?:\/\//i.test(v) ? v : `https://${v}`;
}
