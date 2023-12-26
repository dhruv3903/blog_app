import { BrowserRouter as Router, json, Route, Routes } from 'react-router-dom'
import Header from './Header';
import Login from './Login';
import Reg from './Reg';
import Blogs from './Blogs';
import Myblogs from './Myblogs';
import Dashboard from './Dashboard';
import Addblog from './Addblog';
import { Contextapi } from "./Contextapi";
import { useState } from 'react';
function App() {
  const [loginname, setloginname] = useState(localStorage.getItem('username'))
  return (
    <Router>
      <Contextapi.Provider value={{ loginname, setloginname }}>
        <Header />
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/reg' element={<Reg />}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/myblogs' element={<Myblogs />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/addblog' element={<Addblog />}></Route>
        </Routes>
      </Contextapi.Provider>
    </Router>
  );
}

export default App;