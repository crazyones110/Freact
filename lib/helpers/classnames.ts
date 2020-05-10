export const classnames = (...names: (string | undefined)[]) => {
  return names.filter(Boolean).join(' ')
}