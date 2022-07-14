import LoginForm from "./LoginForm";
import logo from '../assets/images/Health Buddy - Logo.png';

export default function Header() {
    return (
      <>
        <div className="App">
          <header>
            <div class="header-container">
              <div class="logo-container" >
                <img src={logo} alt ="Logo" />
                <h1>Health Buddy</h1>
              </div>
              <nav>
                <ul>
                  <li><a href="#Home">Home</a></li>
                  <li><LoginForm /></li>
                  <li><a href="#Feedback">Feedback</a></li>
                </ul>
              </nav>
            </div>
          </header>
          <section>
            <div class="hero">
              <div class="content">
                <h1>Welcome to Health Buddy</h1>
                <h2>Take Charge Of Your Health</h2>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }