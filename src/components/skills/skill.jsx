import { useEffect } from "react"
import "./skills.css"
import react from "../../assets/icons8-react-100.png"
import html from "../../assets/icons8-html-5-480.png"
import git from "../../assets/icons8-git-480.png"
import bootstrap from "../../assets/icons8-bootstrap-480.png"
import figma from "../../assets/icons8-figma-480.png"
import css from "../../assets/icons8-css3-480.png"
import python from "../../assets/icons8-python-480.png"
import javascript from "../../assets/icons8-javascript-480.png"
import php from "../../assets/icons8-php-64.png"
import node from "../../assets/icons8-node-js-96.png"
import front from "../../assets/icons8-front-end-64.png"
import AOS from 'aos';
import 'aos/dist/aos.css';


const skill = () => {
    useEffect(() => {
            AOS.init({
            
            });
          }, []);
  return (
      <>
          <div className="container tech1"
           data-aos="fade-right"
           data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="1000"
      >
          <h1 className="text-center text-white mb-5 tech">Technologies</h1>
          <div className="row justify-content-center">
          <div className="col-sm-3 d-flex flex-column align-items-center">
                  <i className="" style={{ fontSize: '7rem' }}>
                  <img width="100" height="100" src={python} alt="react"/>
                </i>
                
                <h2>Python</h2>
              </div>
              <div className="col-sm-3 d-flex flex-column align-items-center">
                  <i className="" style={{ fontSize: '7rem' }}>
                  <img width="100" height="100" src={javascript} alt="react"/>
                </i>
                
                           <h2>JavaScript</h2>
              </div>
              <div className="col-sm-3 d-flex flex-column align-items-center">
                  <i className="" style={{ fontSize: '7rem' }}>
                  <img width="100" height="100" src={html} alt="react"/>
                </i>
                
                           <h2>HTML</h2>
              </div>
              <div className="col-sm-3 d-flex flex-column align-items-center">
                  <i className="" style={{ fontSize: '7rem' }}>
                  <img width="100" height="100" src={css} alt="react"/>
                </i>
                
                           <h2>CSS</h2>
              </div>
              <div className="col-sm-3 d-flex flex-column align-items-center">
                  <i className="" style={{ fontSize: '7rem' }}>
                  <img width="100" height="100" src={react} alt="react"/>
                </i>
                
                           <h2>React.js</h2>
              </div>
              <div className="col-sm-3 d-flex flex-column align-items-center">
                  <i className="" style={{ fontSize: '7rem' }}>
                  <img width="100" height="100" src={bootstrap} alt="react"/>
                </i>
              
                           <h2>Bootstrap</h2>
              </div>
              <div className="col-sm-3 d-flex flex-column align-items-center">
                  <i className="" style={{ fontSize: '7rem' }}>
                  <img width="100" height="100" src={figma} alt="react"/>
                </i>
                
                           <h2>Figma</h2>
              </div>
              <div className="col-sm-3 d-flex flex-column align-items-center">
                  <i className="" style={{ fontSize: '7rem' }}>
                  <img width="100" height="100" src={git} alt="react"/>
                </i>
               
                           <h2>Git</h2>
              </div>
              <div className="col-sm-3 d-flex flex-column align-items-center">
                  <i className="" style={{ fontSize: '7rem' }}>
                  <img width="100" height="100" src={php} alt="react"/>
                </i>
                
                           <h2>PHP</h2>
              </div>
              <div className="col-sm-3 d-flex flex-column align-items-center">
                  <i className="" style={{ fontSize: '7rem' }}>
                  <img width="100" height="100" src={node} alt="react"/>
                </i>
                
                           <h2>Node.js</h2>
              </div>
              
              <div className="col-sm-3 d-flex flex-column align-items-center">
                  <i className="" style={{ fontSize: '7rem' }}>
                  <img width="100" height="100" src={front} alt="react"/>
                </i>
                
                           <h2>Web Development</h2>
              </div>
              
          </div>
          
      </div>
      <hr />
      </>
  )
}

export default skill