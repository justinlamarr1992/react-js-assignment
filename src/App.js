import './App.css';

function App() {
  return (
    <div className="body">
      <header>
    </header>
    <main>
      <section className="left">
        <h1 className="learn">
          Learn to code by <br />
          watching others
        </h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>
      <section className="right">
        <div className="top">
          <p className="trial">
            <span className="bold">Try it free 7 days</span> then $20/mo. thereafter
          </p>
        </div>
        <div className="bottom">
          <form className="info" action="index.html" method="post">
            <input type="text" name="" placeholder="First Name" />
            <input type="text" name="" placeholder="Last Name" />
            <input type="email" name="" placeholder="Email Address" />
            <input type="password" name="" placeholder="Password" />

            <button type="button" name="button">CLAIM YOUR FREE TRAIL</button>
          </form>

          <p className="terms">
            By clicking the button, you are agreeing to our 
            <a href="#"> Terms and Services</a>
          </p>
        </div>
      </section>
    </main>
    <footer></footer></div>
    
  );
}

export default App;
