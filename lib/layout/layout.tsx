import React, { ReactElement } from 'react'
import { createMakeClasses } from '../../lib/helpers/createMakeClasses'
import './layout.scss'
import { Sider } from './sider'

const classes = createMakeClasses('freact-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | ReactElement[]
}
export const Layout: React.FC<Props> = ({ className, children, ...rest }) => {
  let hasSider = false
  if ((children as ReactElement[]).length) {
    ;(children as ReactElement[]).forEach(child => {
      if (child.type === Sider) {
        hasSider = true
      }
    })
  }
  return (
    <div
      className={[classes(), className, hasSider && classes('has-sider')].join(
        ' ',
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
