import { useEffect } from "react";
import './education.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import banner from "../assets/banner-hero.png"
import java from "../assets/java.jpg"
import web from "../assets/Web-DEv.jpg"
import web2 from "../assets/SAM-AC.jpg"
import git from "../assets/Git.jpg"
import sql from "../assets/sqlCertificate.jpg"
import ethical from "../assets/EthicalCertifcate.jpg"

const Education = () => {
    useEffect(() => {
        AOS.init({
        
        });
      }, []);
  return (
      <>
          <div className="container education">
              <h1 className="fw-bold text-white text-center mb-5 mt-3"
              data-aos="fade-right">Education</h1>
              <div className="row justify-content-center gap-5 schools">
                  <div className="col-sm-4"
                      data-aos="fade-right"
                      data-aos-duration="3000"
                      data-aos-delay="1000"
                  >
                      <img src={banner} className="img-fluid" alt="" />
                  </div>
                  <div className="col-sm-4"
                      data-aos="fade-left"
                      data-aos-duration="3000"
                      data-aos-delay="1000"
                  >
                      <p className="text-white">2022-2025</p>
                      <h4 className="fw-bold text-white">BCA - Computer Science & Information Technology</h4>
                      <h5 className="text-white">The Maharaja Sayajirao University of Baroda, India</h5>
                      <hr className="new1"></hr>
                      <p className="text-white">2019-2020</p>
                      <h4 className="fw-bold text-white">11th - 12th Grade - Secondary School</h4>
                      <h5 className="text-white">Herois Moçambicanos Secondary School, Maputo</h5>
                      <hr className="new1"></hr>
                  </div>
              </div>
              <hr />

              <h1 className="text-white text-center fw-bold text2"
                      data-aos="fade-right"
                      data-aos-duration="3000"
                      data-aos-delay="2000"
                  >Certifications</h1>
              <div className="row justify-content-center mt-5 mb-5"
                  data-aos="fade-left"
                  data-aos-duration="3000"
                  data-aos-delay="700"
              >
                  
                  <div className="col-sm-4 mt-2">
                      <img src={java} className="img-fluid rounded2" alt="" />
                  </div>
                  <div className="col-sm-4 mt-2">
                      <img src={web2} className="img-fluid rounded2" alt="" />
                  </div>
                  <div className="col-sm-4 mt-2">
                      <img src={web} className="img-fluid rounded2" alt="" />
                  </div>
                 </div>
              <div className="row justify-content-center"
                   data-aos="fade-right"
                   data-aos-duration="3000"
                   data-aos-delay="700"
              >
              <div className="col-sm-4 mt-2">
                      <img src={git} className="img-fluid rounded2" alt="" />
                  </div>
                  <div className="col-sm-4 mt-2">
                      <img src={sql} className="img-fluid rounded2" alt="" />
                  </div>
                  <div className="col-sm-4 mt-2">
                      <img src={ethical} className="img-fluid rounded2" alt="" />
                  </div>
                  
                  
              </div>
              
          </div>
          <hr/>
      </>
  )
}

export default Education;