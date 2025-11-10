export function relativeTimeFormat(date: string | Date) {
  const now = new Date();
  const dateObj = new Date(date);
  const seconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const format = (value: number, unit: Intl.RelativeTimeFormatUnit) => {
    if (value === 0) return "now";
    if (value === 1) return rtf.format(value, unit);
    if (value === -1) return rtf.format(value, unit);
    if (value < 0) return rtf.format(value, unit);
    if (value > 0) return rtf.format(value, unit);
    return rtf.format(value, unit);
  };

  if (seconds < 60) return format(-seconds, "second");
  if (minutes < 60) return format(-minutes, "minute");
  if (hours < 24 && now.getDate() == dateObj.getDate()) return format(-hours, "hour");
  if (hours < 24 && now.getDate() != dateObj.getDate()) return format(-1, "day");
  if (days < 30) return format(-days, "day");
  if (months < 12) return format(-months, "month");
  if (years < 10) return format(-years, "year");
  return format(-years, "year");
}
