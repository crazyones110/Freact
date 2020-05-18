interface ClassToggler {
  [K: string]: boolean
}

export function createMakeClasses(prefix: string) {
  return (className?: string | ClassToggler, ...extras: string[]): string => {
    const classObject =
      typeof className === 'string' ? { [className]: true }
        : className === undefined ? { ['']: true }
        : className
    return Object.entries(classObject)
      .filter(([, v]) => v)
      .map(([k]) => (k === '' ? prefix : prefix + '-' + k))
      .concat(extras)
      .join(' ')
  }
}
