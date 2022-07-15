import NavMenu from '../components/NavMenu';

const BodyInfo = () => {
  return (
    <>
      <div style={{fontSize: '200px', marginTop: '100px'}}>BodyInfo</div>

      <NavMenu />

      <section>
        <p>Here's your body information, view our body feedback page to understand more about your results.</p>
        <h2>Body Info</h2>
          
        <article>
          <details><summary>This is the summary</summary>More details to come!</details>
          <details><summary>Chloride (click here for details)</summary>
              You may have heard of electrolytes and the role they play in keeping you hydrated and healthy. One of the most important of these electrically charged minerals is chloride. It works with other electrolytes, such as sodium and potassium, to help balance acids and bases in your body.
          </details>
          <details>
              <summary>Flouride (click here for details)</summary>Flouride is a mineral that occurs naturally and is released from rocks into the soil, water, and air. Almost all water contains some fluoride, but usually not enough to prevent tooth decay. Fluoride can also be added to drinking water supplies as a public health measure for reducing cavities. Decisions about adding fluoride to drinking water are made at the state or local level.
          </details>
        </article>
      </section>
    </>
    
  );
};

export default BodyInfo;