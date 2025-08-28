import React from 'react'

import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Users from './components/Users'
import NavBar from './components/NavBar'
import ActorDetails from './components/ActorDetails'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/users' element={<Users/>}></Route>
          <Route path='/users/:actorId' element={<ActorDetails/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App