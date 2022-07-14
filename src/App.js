import {BrowserRouter, Router, Route} from "react-router-dom"
import './App.css';
import logo from './assets/images/Health Buddy - Logo.png';
import Progress from './progress';
import NavMenu from './components/NavMenu';
import Header from './components/Header';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <>
      <Header  />
      <Progress />
    </>
  );
}

/*
function App(){
return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/flashcards" element={<FlashcardsPage />} />
    <Route path="/login" element={<LoginPage />} />
  </Routes>
</BrowserRouter>
);
}

*/

/*
if - Home page before login or logged out
  - register
  - log in
  - home page, about, contact

if - page after register
  - user input
  - then to page after login

if - page after login
  - weekly user input if it's called (set 7 days after last week's input or every monday or tuesday, etc)
  - body feedback
  - body info
  - progress
  - minerals, nutrients, vitamins

*/

export default App;
