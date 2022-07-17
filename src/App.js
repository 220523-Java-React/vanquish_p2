import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import BodyFeedback from './pages/BodyFeedback';
import BodyInfo from './pages/BodyInfo';
import Minerals from './pages/Minerals';
import Nutrients from './pages/Nutrients';
import Progress from './pages/Progress';
import UserInput from './pages/UserInput';
import Vitamins from './pages/Vitamins';
import Login from './pages/Login';
import Register from './pages/Register';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [ results, setResults ] = useState([]);

  return (
    <>
      <Router>
        <Header  />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/body-feedback' element={<BodyFeedback results={results}/>} />
          <Route path='/body-info' element={<BodyInfo />} />
          <Route path='/minerals' element={<Minerals />} />
          <Route path='/nutrients' element={<Nutrients />} />
          <Route path='/progress' element={<Progress />} />
          <Route path='/user-input' element={<UserInput setResults={setResults} />} />
          <Route path='/vitamins' element={<Vitamins />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;