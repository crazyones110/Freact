import React from 'react'
// import './icons/wechat.svg'
import './importAll' // 这样就不能treeshaking了
import './icons.scss'
type Props = {
  icon: string,
  className?: string
}
// console.log(wechat)
const Icon: React.FC<Props> = ({ icon, className }) => {
  return (
    <svg className="freact-icon">
      <use xlinkHref={`#${icon}`}></use>
      {/*name就是icons里的文件名*/}
    </svg>
  )
}

export default Icon
