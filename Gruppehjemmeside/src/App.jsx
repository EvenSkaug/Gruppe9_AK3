import { useState } from 'react'
import './styles/global.scss'

import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import PageContent from './components/PageContent'
import Home from './components/Home'

function App() {

  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="members/:member" element={<PageContent />} />
      </Routes>
    </Layout>
    </>
  )
}

export default App
