import { IconExample } from './lib/icon/Icon.example'
import { DialogExample } from './lib/dialog/dialog.example'
import { LayoutExample } from './lib/layout/layout.example'

import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Link, Route } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <header>
        <div className="logo">Freact</div>
      </header>
      <div>
        <aside>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
            <li>
              <Link to="/dialog">Dialog</Link>
            </li>
            <li>
              <Link to="/layout">Layout</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Route path="/icon" component={IconExample}></Route>
          <Route path="/dialog" component={DialogExample}></Route>
          <Route path="/layout" component={LayoutExample}></Route>
        </main>
      </div>
    </div>
  </Router>,
  document.getElementById('root'),
)
