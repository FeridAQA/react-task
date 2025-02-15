import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.scss'
import Mainlayout from './layout/mainlayout';
import Home from './pages/home';
import Error from './pages/error';
import About from './pages/about';
import Contact from './pages/contact';
import Signup from './pages/register';


function App() {
  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route element={<Mainlayout></Mainlayout>}  path="/">
              <Route element={<Home></Home>}  index ></Route>
              <Route element={<About></About>}  path='about' ></Route>
              <Route element={<Contact></Contact>}  path='contact' ></Route>
              <Route element={<Signup></Signup>}  path='/register' ></Route>
              {/* <Route element={<Login></Login>}  path='/login' ></Route> */}
              {/* <Route element={<Detail></Detail>}  path='/detail/:id' ></Route> */}

            </Route>
              <Route element={<Error></Error>}  path='*' ></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
