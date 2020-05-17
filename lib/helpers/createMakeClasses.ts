interface ClassToggler {
  [K: string]: boolean
}

export function createMakeClasses(prefix: string) {
  return (className?: string | ClassToggler, ...extras: string[]): string => {
    let result = ''
    if (typeof className === 'string') {
      result = prefix + '-' + className
    } else if (typeof className === 'object') {
      result = Object.entries(className)
        .filter(([, v]) => v)
        .map(([k]) => prefix + '-' + k)
        .join(' ')
    } else {
      result = prefix
    }
    return extras.length === 0 ? result : result + ' ' + extras.join(' ')
  }
}
