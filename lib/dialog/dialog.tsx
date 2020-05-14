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
            {buttons &&
              buttons.length > 0 &&
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

export const modal = (content: ReactNode, buttons?: ReactElement[], afterClose?: () => void) => {
  const closeModal = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }
  const component = (
    <Dialog
      visible
      onClose={() => {
        closeModal()
        afterClose && afterClose()
      }}
      buttons={buttons}
    >
      {content}
    </Dialog>
  )
  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.render(component, div)
  return closeModal
}

export const alert = (content: string) => {
  const buttons = [<button onClick={() => closeModal()}>ok</button>]
  const closeModal = modal(content, buttons)
}

export const confirm = (
  content: string,
  confirmCallback?: () => void,
  cancelCallback?: () => void,
) => {
  const onYes = () => {
    closeModal()
    confirmCallback && confirmCallback()
  }
  const onNo = () => {
    closeModal()
    cancelCallback && cancelCallback()
  }
  const buttons = [
    <button onClick={onNo}>no</button>,
    <button onClick={onYes}>yes</button>,
  ]
  const closeModal = modal(content, buttons, onNo)
}
