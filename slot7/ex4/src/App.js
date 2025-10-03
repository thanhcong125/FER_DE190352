import './components/App.css';

function App() {
  return (
    <div>
      <header className="header">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.H7B2zQa6tyItU1JR6pPcngHaEE?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="FPT University Logo"
          className="logo"
        />
        <h1 className="title">FPT UNIVERSITY</h1>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      {/* About Section */}
      <section id="about" className="section">
        <h2>About</h2>
        <p>This is the about section of the website.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>For any inquiries, please contact us at example@example.com.</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2023 Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
