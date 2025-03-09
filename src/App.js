import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";


const Home = React.lazy(() => import('./pages/Home/Home'))
const Banner = React.lazy(() => import('./pages/Banner/Banner'))
const MainBanner = React.lazy(() => import('./pages/MainBanner/MainBanner'))
const Choose = React.lazy(() => import('./pages/Why Choose Us/ChooseUs'))




function App() {
  return (
    <div className="App">
      <React.Suspense>
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Banner' element={<Banner />} />
          <Route path='/Choose' element={<Choose />} />
          <Route path='/MainBanner' element={<MainBanner />} />
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    </div>
  );
}

export default App;
