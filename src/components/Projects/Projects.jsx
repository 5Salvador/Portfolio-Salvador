import { useEffect } from "react";
import './projects.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ecommerce from "../../assets/ecommerce.jpg"
import portfolio from "../../assets/portfolio.png"

const Projects = () => {
    useEffect(() => {
            AOS.init({
            
            });
          }, []);
  return (
      <>
          <div className="container pro2">
              <h1 className="text-white text-center fw-bold pro" data-aos="fade-down">Projects</h1>
              <div className="row justify-content-center">
              <div className="container cards" data-aos="fade-down">
            <div className="row g-4">
                {/* Card 1 */}
                <div className="col-md-4">
                <div className="custom-card">
                    <img src={ecommerce} alt="Web Design Icon" />
                    <h5 className='text-black'>E-commerce Website</h5>
                    <p className='text-dark'>
                    A fully functional e-commerce website with features like product listing, shopping cart, and user authentication, using React.js, tailwind.css, Stripe, Firebase etc.
                    </p>
                </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4">
                <div className="custom-card">
                    <img src={ecommerce} alt="Web Development Icon" />
                    <h5 className='text-black'>E-commerce Website</h5>
                    <p className='text-dark'>
                    My e-commerce website is currently in progress, ensuring a robust, scalable, and user-friendly platform tailored to meet customer needs.
                    </p>
                </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4">
                <div className="custom-card">
                                  <img src={portfolio} style={{height: "70%"}}  alt="Mobile App Development Icon" />
                    <h5 className='text-black'>Portfolio Website</h5>
                    <p className='text-dark'>
                    A personal portfolio website designed to showcase my skills, projects, and achievements as a Student from Computer Science and IT
                    </p>
                </div>
                </div>
                </div>
              </div>
                  
              </div>
              
          </div>
      </>
  )
}

export default Projects