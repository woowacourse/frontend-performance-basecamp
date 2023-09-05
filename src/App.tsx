import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import './App.css';
import { Suspense, lazy } from 'react';

// basename={'/perf-basecamp'}

const Home = lazy(() => import('./pages/Home/Home'));
const Search = lazy(() => import('./pages/Search/Search'));

const App = () => {
  return (
    <Router basename={'/perf-basecamp'}>
      <NavBar />
      <Suspense fallback={<div>로딩중</div>}>
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
