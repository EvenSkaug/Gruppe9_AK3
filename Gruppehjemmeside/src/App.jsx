import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import PageContent from './components/PageContent'
import Home from './components/Home'

import './styles/global.scss'

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
