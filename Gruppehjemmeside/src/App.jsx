import { Route, Routes } from 'react-router-dom';
import { fetchAllMembers } from './sanity/fetches';
import { useEffect, useState } from 'react';

import Layout from './components/Layout';
import Home from './components/Home';
import MemberPage from './components/MemberPage';

import './styles/global.scss';

function App() {
  const [members, setMembers] = useState([])
  
  /*
    Ved å fetche alle medlemmer her og lagre dem i en useState,
    kan "members" sendes videre til diverse komponenter - som gjør
    at vi slipper å fetche på nytt senere.
  */
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
