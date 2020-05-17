import React from 'react'
import { createMakeClasses } from '../../lib/helpers/createMakeClasses'
import './layout.scss'

const classes = createMakeClasses('freact-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {}
export const Footer: React.FC<Props> = ({ className, children, ...rest }) => {
  return (
    <div className={[classes('footer'), className].join(' ')} {...rest}>
      footer
    </div>
  )
}
