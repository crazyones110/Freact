export const classnames = (...names: any[]) => {
  return names.filter(Boolean).join(' ')
}