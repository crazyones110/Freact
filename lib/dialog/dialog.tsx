import React, { ReactElement, ReactNode } from 'react'
import './dialog.scss'
import { Icon } from '../index'
import { createMakeClasses } from '../helpers/createMakeClasses'
import ReactDOM from 'react-dom'

type Props = {
  visible: boolean
  // children: ReactNode,
  buttons?: ReactElement[]
  onClose: React.MouseEventHandler
  closeMaskOnClick?: boolean
}
// FIXME 解决每次都写freact-dialog的问题
const dialogClasses = createMakeClasses('freact-dialog')
const dc = dialogClasses

export const Dialog: React.FC<Props> = ({
  visible,
  children,
  buttons,
  onClose,
  closeMaskOnClick,
}) => {
  const onClickClose: React.MouseEventHandler = e => {
    onClose(e)
  }
  const onClickMask: React.MouseEventHandler = e => {
    if (closeMaskOnClick) {
      onClose(e)
    }
  }
  const x = visible ? (
    <>
      <div className={dc('mask')} onClick={onClickMask} />
      <div className={dc()}>
        <div className={dc('close')} onClick={onClickClose}>
          <Icon icon="close" />
        </div>
        <header className={dc('header')}>提示</header>
        <main>{children}</main>
        {buttons && (
          <footer className={dc('footer')}>
            {buttons && buttons.length > 0 &&
              buttons.map((button, index) =>
                React.cloneElement(button, {
                  key: index,
                }),
              )}
          </footer>
        )}
      </div>
    </>
  ) : null
  return ReactDOM.createPortal(x, document.body)
}
Dialog.defaultProps = {
  closeMaskOnClick: false,
}


export const alert = (content: string) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }
  const component = (
    <Dialog
      visible
      onClose={onClose}
      buttons={[<button onClick={onClose}>ok</button>]}
    >
      {content}
    </Dialog>
  )
  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.render(component, div)
}
const x = () => {
  
}
export const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
    yes && yes()
  }
  const onNo = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
    no && no()
  }

  const component = (
    <Dialog
      visible
      onClose={onNo}
      buttons={[
        <button onClick={onYes}>yes</button>,
        <button onClick={onNo}>no</button>,
      ]}
    >
      {content}
    </Dialog>
  )
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(component, div)
}
export const modal = (content: ReactNode) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }
  const component = (
    <Dialog onClose={onClose} visible>
      {content}
    </Dialog>
  )
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(component, div)
  return onClose
}
