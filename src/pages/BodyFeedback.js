import NavMenu from '../components/NavMenu';

const BodyFeedback = () => {
  return (
    <>
      <div style={{fontSize: '200px', marginTop: '100px'}}>BodyFeedback</div>

      <NavMenu />
      <section>
        <p>Here's your feedback based on the results you've recieved on the body info page.</p>
        <h2>Body Feedback</h2>
      </section>
    </>
    
  );
};

export default BodyFeedback;