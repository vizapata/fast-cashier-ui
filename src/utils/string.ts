export function removeTrailingSlash(input: string): string {
  return input.replace(/\/+$/, '')
}
