import React from 'react'
import ReactDOM from 'react-dom'
// import Button from './button'
import Icon from './icon'

const fn: React.MouseEventHandler<SVGUseElement | SVGElement> = e => {
  console.log(e.target)
}

ReactDOM.render(
<div>
  <Icon icon="bytedance" onClick={fn}/>
</div>, document.getElementById('root'))

