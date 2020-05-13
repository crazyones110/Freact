import React, { ReactElement } from 'react'
import './dialog.scss'
import { Icon } from '..//index'
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
        <footer className={dc('footer')}>
          {buttons &&
            buttons.map((button, index) =>
              React.cloneElement(button, {
                key: index,
              }),
            )}
        </footer>
      </div>
    </>
  ) : null
  return ReactDOM.createPortal(x, document.body)
}
Dialog.defaultProps = {
  closeMaskOnClick: false,
}
export const alert = (content: string) => {
  const component = (
    <Dialog visible onClose={() => {
      ReactDOM.render(React.cloneElement(component, {visible: false}), div)
      ReactDOM.unmountComponentAtNode(div)
      div.remove()
    }}>
      {content}
    </Dialog>
  )
  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.render(component, div)
}
