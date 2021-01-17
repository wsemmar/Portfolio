import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="nav-container">
        <nav>
          <ul className="nav-ul">
            <li>
              <a href="#Skills">Skills</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className=" info-container">
        <div className="info">
          <h1 className="title">Devlopper</h1>
          <h1 className="title">FullStackJS</h1>
        </div>

        <img src="./profil.jpg" alt="ProfilPicture" />
        <div className="info">
          <h1 className="title">Walid</h1>
          <h1 className="title">Semmar</h1>
        </div>
      </div>
      <div className="about">
        <div id="Skills" className="presentation">
          <h1>Skills</h1>
        </div>
        <div className="skills">
          <div className="title-skils">
            <i className="fas fa-desktop"></i>
            <h1>Front-Side</h1>
          </div>
          <div>
            <ul className="list-skils">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Bootstrap</li>
              <li>JavaScript ES6</li>
              <li>ReactJS</li>
            </ul>
          </div>
        </div>
        <div className="skills">
          <div className="title-skils">
            <i className="fas fa-server"></i>
            <h1>Back-Side</h1>
          </div>
          <div>
            <ul className="list-skils">
              <li>Redux</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
            </ul>
          </div>
        </div>
        <div className="skills">
          <div className="title-skils">
            <i className="fas fa-paint-brush"></i>
            <h1>Design</h1>
          </div>
          <div>
            <ul className="list-skils">
              <li>Adobe XD</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Adobe Premiere pro</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="About" className="work">
        <h1>About me</h1>
        <p>
          Hi, my name is Walid Semmar. I'm 23years old and i'm from Algeria. i'm
          a FullStackJS Devlopper(MERN)
        </p>
      </div>
      <div id="Contact" className="conatct-container">
        <h1>Contact</h1>

        <div className="contact">
          <a href="mailto:walidsprod@gmail.com" target="_blank">
            <i className="far fa-envelope"></i>
          </a>

          <a href="https://www.instagram.com/walid.sem/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/wsemmar" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="footer">
        <p>&copy;2021 WALIDSPROD ALL RIGHTS RESERVED</p>
        <p></p>
      </div>
    </div>
  );
}

export default App;
