export default function getYear(value: string): string {
  if (!value) {
    return 'Unknown year';
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return 'Unknown year';
  }

  return String(date.getFullYear());
}
