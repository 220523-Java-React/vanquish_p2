import NavMenu from '../components/NavMenu';

const Home = () => {
  return (
    <>
      <section>
        <div class="hero">
          <div class="content">
            <h1>Welcome to Health Buddy</h1>
            <h2>Take Charge Of Your Health</h2>
          </div>
        </div>
      </section>

      <p>Are you having trouble with maintining your diet? Do you no know where to start? We look no futher. I am HEALTH BUDDY and I am here to help. Think of me as your personal dietitian. I am here to push you towards your health goals every step of the way.</p>
        <h3>
            Log In
        </h3>
        <form name="Login">

            <label>Username</label><input type="text" name="username" />
            <label>Password</label><input type="text" name="password" />
            <input type="submit" value="Log In" />

        </form>

      <NavMenu />
    </>
    
  )
};

export default Home;