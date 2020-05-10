import React from 'react'
// import './icons/wechat.svg'
import './importAll'
interface Props {
  icon: string
}
// console.log(wechat)
const Icon:React.FC<Props> = ({icon}) => {
  return (
    <span>
      <svg>
        <use xlinkHref={`#${icon}`}></use>
      </svg>
    </span>
  )
} 

export default Icon