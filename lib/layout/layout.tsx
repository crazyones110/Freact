import React, { ReactElement } from 'react'
import { createMakeClasses } from '../../lib/helpers/createMakeClasses'
import './layout.scss'
import { Sider } from './sider'

const classes = createMakeClasses('freact-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | ReactElement[]
}
export const Layout: React.FC<Props> = ({ className, children, ...rest }) => {
  // FIXME 类型保护
  const childrenTemp = (length in children ? children : [children]) as ReactElement[]
  // ;(children as ReactElement[]).reduce(
  //   (result, child) => result || child.type === Sider,
  //   false,
  // )
    
  const hasSider = childrenTemp.some(child => child.type === Sider)
  return (
    <div
      className={[
        classes(),
        className,
        hasSider ? classes('has-sider') : '',
      ].join(' ')}
      {...rest}
    >
      {children}
    </div>
  )
}
