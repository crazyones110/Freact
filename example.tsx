import { DialogExample } from './lib/dialog/dialog.example'
import { LayoutExample } from './lib/layout/layout.example'

import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'
import { Layout } from './lib/layout/layout'
import { Header } from './lib/layout/header'
import { Sider } from './lib/layout/sider'
import { Content } from './lib/layout/content'
import { Footer } from './lib/layout/footer'
import {IconDemo} from './lib/icon/icon.demo'
import './example.scss'

ReactDOM.render(
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo">
          <img src="data:image/png;base64,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" 
          alt="logo"
          width="48"
          height="48"
          />
          <span>Freact</span>
        </div>
      </Header>
      <Layout className="site-main">
        <Sider className="site-sider">
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout</NavLink>
            </li>
          </ul>
        </Sider>
        <Content>
          <Route path="/icon" component={IconDemo}></Route>
          <Route path="/dialog" component={DialogExample}></Route>
          <Route path="/layout" component={LayoutExample}></Route>
        </Content>
      </Layout>
      <Footer className="site-footer">
        &copy; FLP
      </Footer>
    </Layout>
  </Router>,
  document.getElementById('root'),
)
