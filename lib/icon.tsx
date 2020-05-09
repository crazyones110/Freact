import React from 'react'

interface Props {
  icon: string
}
const Icon:React.FC<Props> = ({icon}) => {
  return (
  <span>{icon}</span>
  )
} 

export default Icon