import './App.css'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Technology from './components/Technology'
import { Suspense } from 'react'
import type { TechType } from './types/technologyType'

const technologyFetch = async() : Promise<TechType[]> =>{
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}

function App() {
  const technologyPromise = technologyFetch();

  return (
    <>
    <Nav></Nav>
    <Banner></Banner>
    <Suspense fallback = {<h2>Loading.........</h2>}>
      <Technology technologyPromise={technologyPromise}></Technology>
    </Suspense>
    
    
    
    <Footer></Footer>
    </>
  )
}

export default App
