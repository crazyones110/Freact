import React from 'react'
import { Layout } from './layout'
import { Header } from './header'
import { Content } from './content'
import { Footer } from './footer'
import { Sider } from './sider'
import './layout.example.scss'

export const LayoutExample: React.FC = props => {
  return (
    <div>
      <h1>第一个例子</h1>
      <Layout style={{ height: 500, width: 500 }}>
        <Header className="header">header</Header>
        <Content className="content">content</Content>
        <Footer className="footer">footer</Footer>
      </Layout>
      <h1>第二个例子</h1>
      <Layout style={{ height: 500, width: 500 }} className="hi">
        <Header className="header">header</Header>
        <Layout>
          <Sider className="sider">sider</Sider>
          <Content className="content">content</Content>
        </Layout>
        <Footer className="footer">footer</Footer>
      </Layout>
      <h1>第三个例子</h1>
      <Layout style={{ height: 500, width: 500 }} className="hi">
        <Header className="header">header</Header>
        <Layout>
          <Content className="content">content</Content>
          <Sider className="sider"></Sider>
        </Layout>
        <Footer className="footer">footer</Footer>
      </Layout>
      <h1>第四个例子</h1>
      <Layout style={{ height: 500, width: 500 }} className="hi">
        <Sider className="sider">sider</Sider>
        <Layout>
          <Header className="header">header</Header>
          <Content className="content">content</Content>
          <Footer className="footer">footer</Footer>
        </Layout>
      </Layout>
      <h1>第五个例子</h1>
      <Layout style={{ height: 500, width: 500 }} className="hi">
        <Layout>
          <Header className="header">header</Header>
          <Content className="content">content</Content>
          <Footer className="footer">footer</Footer>
        </Layout>
        <Sider className="sider">sider</Sider>
      </Layout>
    </div>
  )
}
