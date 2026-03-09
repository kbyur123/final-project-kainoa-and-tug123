function App() {
  return (
    <div>

   
      <nav style={{background:"#333", padding:"10px"}}>
        <a href="#" style={{color:"white", marginRight:"15px"}}>Home</a>
        <a href="#" style={{color:"white", marginRight:"15px"}}>Inventory</a>
        <a href="#" style={{color:"white", marginRight:"15px"}}>sell</a>
        <a href="#" style={{color:"white", marginRight:"15px"}}>donate</a>
        <a href="#" style={{color:"white"}}>About</a>
      </nav>

      
      <section style={{padding:"20px"}}>
        <h1>Hello World</h1>
        <p>This is the starting page for our project.</p>
      </section>

      
      <section style={{padding:"20px"}}>
        <h2>Placeholder Images</h2>

        <img 
          src="https://placehold.co/250x150" 
          alt="placeholder"
        />

        <img 
          src="https://placehold.co/250x150" 
          alt="placeholder"
        />
      </section>

      
      <section style={{padding:"20px"}}>
        <h2>Project Ideas</h2>

        <ul>
          <li>Main design</li>
          <li>concept</li>
          <li>Environment ideas</li>
          <li>Gameplay stuff</li>
        </ul>
      </section>

      
      <section style={{padding:"20px"}}>
        <h2>Example Content</h2>

        <p> later with more project details.</p>

        <ol>
          <li>Intro scene</li>
          <li>Main challenge</li>
          <li>Ending idea</li>
        </ol>
      </section>

    </div>
  );
}

export default App;
