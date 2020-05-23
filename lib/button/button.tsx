import React, { ButtonHTMLAttributes } from 'react'
import { createMakeClasses } from '../helpers/createMakeClasses'
import './button.scss'

const classes = createMakeClasses('freact-button')
type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  level?: 'important' | 'danger' | 'normal'
}
export const Button: React.FC<Props> = ({
  className,
  children,
  level = 'normal',
  ...rest
}) => {
  return (
    <button
      className={classes({ [level]: true, ['']: true }, className!)}
      {...rest}
    >
      {children}
    </button>
  )
}

// Button.defaultProps = {
//   level: 'normal'
// }
