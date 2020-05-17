import React from 'react'
import { Layout } from './layout'
import { Header } from './header'
import { Content } from './content'
import { Footer } from './footer'
import { Sider } from './sider'

export const LayoutExample: React.FC = props => {
  return (
    <div>
      <h1>第一个例子</h1>
      <Layout style={{ height: '500px' }}>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </Layout>
      <h1>第二个例子</h1>
      <Layout style={{ height: '500px' }} className="hi">
        <Header></Header>
        <Layout>
          <Sider></Sider>
          <Content></Content>
        </Layout>
        <Footer></Footer>
      </Layout>
      <h1>第三个例子</h1>
      <Layout style={{ height: '500px' }} className="hi">
        <Header></Header>
        <Layout>
          <Content></Content>
          <Sider></Sider>
        </Layout>
        <Footer></Footer>
      </Layout>
      <h1>第四个例子</h1>
      <Layout style={{ height: '500px' }} className="hi">
        <Sider></Sider>
        <Layout>
          <Header></Header>
          <Content></Content>
          <Footer></Footer>
        </Layout>
      </Layout>
      <h1>第五个例子</h1>
      <Layout style={{ height: '500px' }} className="hi">
        <Layout>
          <Header></Header>
          <Content></Content>
          <Footer></Footer>
        </Layout>
        <Sider></Sider>
      </Layout>
    </div>
  )
}
