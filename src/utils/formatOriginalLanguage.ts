const LANGUAGE_LABELS: Record<string, string> = {
  en: 'English',
  fr: 'French',
  es: 'Spanish',
  de: 'German',
  it: 'Italian',
  pt: 'Portuguese',
  ja: 'Japanese',
  ko: 'Korean',
  zh: 'Chinese',
};

export default function formatOriginalLanguage(code: string): string {
  if (!code) {
    return 'Unknown';
  }

  return LANGUAGE_LABELS[code.toLowerCase()] ?? code.toUpperCase();
}
