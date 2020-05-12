import { IconExample } from './lib/icon/Icon.example'

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
          </ul>
        </aside>
        <main>
          <Route path="/icon" component={IconExample}></Route>
        </main>
      </div>
    </div>
  </Router>,
  document.getElementById('root'),
)
