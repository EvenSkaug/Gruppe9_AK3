import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './components/Home'
import MemberPage from './components/MemberPage'

import './styles/global.scss'
import { fetchAllMembers } from './sanity/fetches'
import { useEffect, useState } from 'react'

function App() {

  const [members, setMembers] = useState([])
  
  const getAllMembers = async () => {
    const data = await fetchAllMembers();
    setMembers(data);
  };
      
  useEffect(() => {
    getAllMembers();
  }, []);

  return (
    <>
    <Layout members={members}>
      <Routes>
        <Route path="/" element={<Home members={members} />} />
        <Route path="members/:member" element={<MemberPage members={members} />} />
      </Routes>
    </Layout>
    </>
  )
}

export default App
