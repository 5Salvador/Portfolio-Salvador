import { useEffect } from "react";
import "./Header.css"; // Create an App.css for additional styling
import image from "../../assets/salvador.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = ( { onScroll}) => {
  useEffect(() => {
    AOS.init({
    
    });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            SALVADOR AMERICO AFO
          </a>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item" onClick={() => onScroll('home')}>
                <a className="nav-link" href="#home">
                  HOME
                </a>
              </li>
              <li className="nav-item" onClick={() => onScroll('education')}>
                <a className="nav-link" href="#education">
                  EDUCATION
                </a>
              </li>
              <li className="nav-item" onClick={() => onScroll('skills')}>
                <a className="nav-link" href="#skills">
                  SKILLS
                </a>
              </li>
              <li className="nav-item" onClick={() => onScroll('projects')}>
                <a className="nav-link" href="#projects">
                  PROJECTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero text-center text-white">
        <button className="btn btn-outline-light btn-hello btn-rounded btn-lg" data-aos="fade-down"
         data-aos-duration="3000" data-aos-delay="1000"
        >Hello!</button>
        <h1 className="mt-3"
          data-aos="zoom-in"
          data-aos-duration="3000"
          data-aos-delay="9000"
        >
          I'm <span className="highlight">Salvador</span>
          <br />
          Computer Science & IT Student
        </h1>
        <h4 className="mt-4"
          data-aos="zoom-in"
          data-aos-duration="3000"
          data-aos-delay="9000"
        >
          Salvador Americo Afo, final Year student of BCA-Computer Science &
          Information Technology at The Maharaja Sayajirao University of Baroda.
        </h4>
        <div className="row justify-content-center"
          data-aos="flip-up"
          data-aos-duration="3000"
          data-aos-delay="1000"
        >
          <div className="col-sm-4">
          <img
          src={image}
          alt="Profile"
          className="profile-img img-fluid"
        />

          </div>
        
        </div>
        
      </div>
      <hr></hr>
      <div className="container about"
        data-aos="zoom-in"
        data-aos-duration="3000"
        data-aos-delay="9000"
      >
      <div className="row justify-content-center">
        <h1 className="text-center text-white fw-bold">ABOUT ME</h1>
        <div className="col-md-8">
        <h4 className="text-white mt-5">I am a passionate and dedicated student pursuing a Bachelor’s degree in Computer Science and Information Technology (BCA). My primary focus is on full-stack development, with a strong interest in building innovative and user-friendly web applications. Currently, I am honing my skills in front-end development, working with modern frameworks and tools to create visually appealing and responsive interfaces. I am eager to expand my expertise and grow into a versatile full-stack developer,
        committed to delivering impactful digital solutions.</h4>
        </div>
        

      </div>

      </div>
      <hr></hr>
    </div>
  );
};

export default Header;
