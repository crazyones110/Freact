import React, { SVGAttributes } from 'react'
// import './icons/wechat.svg'
import './importAll' // 这样就不能treeshaking了
import './icons.scss'
import { classnames } from '../helpers/classnames'
interface Props extends SVGAttributes<SVGElement> {
  icon: string,
  color?: string
}
// FIXME 少一个颜色 用fill
const Icon: React.FC<Props> = ({ className, icon, ...rest }) => {
  return (
    <svg className={classnames('freact-icon', className)} {...rest}>
      <use xlinkHref={`#${icon}`} />
      {/*name就是icons里的文件名*/}
    </svg>
  )
}

export default Icon
