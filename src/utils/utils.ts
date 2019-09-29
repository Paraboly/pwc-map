export function format(first: string, middle: string): string {
  return (first || "") + (middle ? ` ${middle}` : "");
}
