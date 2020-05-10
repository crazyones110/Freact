import React from 'react'
// import './icons/wechat.svg'
import './importAll' // 这样就不能treeshaking了
import './icons.scss'
type Props = {
  icon: string,
  onClick?: React.MouseEventHandler<SVGUseElement | SVGElement>
}
// console.log(wechat)
const Icon: React.FC<Props> = ({ icon, onClick }) => {
  return (
    <svg className="freact-icon" onClick={onClick}>
      <use xlinkHref={`#${icon}`}></use>
      {/*name就是icons里的文件名*/}
    </svg>
  )
}

export default Icon
