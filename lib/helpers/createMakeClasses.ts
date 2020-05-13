export function createMakeClasses(prefix: string) {
  return (className?: string): string => {
    return prefix + (className === undefined ? '' : '-' + className)
  }
}