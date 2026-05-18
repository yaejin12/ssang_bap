export interface FormattedDate {
  text: string;
  time: string;
  isRelative: boolean;
}

export function formatDate(isoString: string): FormattedDate {
  const date = new Date(isoString);
  const today = new Date();

  const toDateOnly = (d: Date) =>
    new Date(d.getFullYear(), d.getMonth(), d.getDate());

  const diffDays =
    (toDateOnly(date).getTime() - toDateOnly(today).getTime()) /
    (1000 * 60 * 60 * 24);

  // ISO 문자열에서 직접 추출해 시스템 타임존 영향을 받지 않음
  const timeMatch = isoString.match(/T(\d{2}:\d{2})/);
  const time = timeMatch ? timeMatch[1] : "";

  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  if (diffDays === 0) return { text: "오늘", time, isRelative: true };
  if (diffDays === 1) return { text: "내일", time, isRelative: true };

  return { text: `${month}/${day}`, time, isRelative: false };
}
