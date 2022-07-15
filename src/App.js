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

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Header  />

        <Routes>
          <Route exact path='/' component={Home} />
          <Route exact path='/body-feedback' component={BodyFeedback} />
          <Route exact path='/body-info' component={BodyInfo} />
          <Route exact path='/minerals' component={Minerals} />
          <Route exact path='/nutrients' component={Nutrients} />
          <Route exact path='/progress' component={Progress} />
          <Route exact path='/user-input' component={UserInput} />
          <Route exact path='/vitamins' component={Vitamins} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;