import logo from './logo.svg';
import './App.css';

import Home from './Home';
import Layout from './Layout';

import { Route, Routes, matchPath, useLocation } from 'react-router-dom';



function App() {



  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>

      </Route>
    

    </Routes>
  );
}

export default App;
