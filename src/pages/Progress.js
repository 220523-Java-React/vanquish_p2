import NavMenu from '../components/NavMenu';
import proimg from '../assets/images/progress.png';

const Progress = () => {
  return (
    <>
      <div style={{fontSize: '200px', marginTop: '100px'}}></div>

      <NavMenu />
      
      <p>Here is your progress your last entry.</p>
      <h2>Progress</h2>

      <img src={proimg} />
    </>
  );
};

export default Progress;