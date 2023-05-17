const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function convertToBase(number: number, base: number): string {
  const reminder = number % base;
  const quotient = Math.floor(number / base);

  if (quotient === 0) return digits[reminder];
  return convertToBase(quotient, base) + digits[reminder];
}
