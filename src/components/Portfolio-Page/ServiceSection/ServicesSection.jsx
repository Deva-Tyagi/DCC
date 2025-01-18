import { useState } from 'react';
import './ServicesSection.css';

const ServiceBox = ({ title, description, iconUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="serve-box">
      <div 
        className={`serve-icon-container ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={iconUrl} 
          alt={title}
          className={`serve-icon ${isHovered ? 'rotate' : ''}`}
        />
      </div>
      <h3 className="serve-title" style={{textAlign:"center"}}>{title}</h3>
      <p className="serve-description">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Motion graphics",
      description: "Whether you're halfway through the editing process, or you haven't even started, our post production services can put the finishing touches.",
      iconUrl: "https://preview.colorlib.com/theme/videograph/img/icons/si-1.png"
    },
    {
      title: "Scriptwriting and editing",
      description: "Whether you're halfway through the editing process, or you haven't even started, our post production services can put the finishing touches.",
      iconUrl: "https://preview.colorlib.com/theme/videograph/img/icons/si-1.png"
    },
    {
      title: "Video distribution",
      description: "Whether you're halfway through the editing process, or you haven't even started, our post production services can put the finishing touches.",
      iconUrl: "https://preview.colorlib.com/theme/videograph/img/icons/si-1.png"
    },
    {
      title: "Video hosting",
      description: "Whether you're halfway through the editing process, or you haven't even started, our post production services can put the finishing touches.",
      iconUrl: "https://preview.colorlib.com/theme/videograph/img/icons/si-1.png"
    }
  ];

  return (
    <section className="serve-section">
      <div className="serve-container">
        <div className="serve-grid">
          {/* Left Section */}
          <div className="serve-intro">
            <span className="serve-label">OUR SERVISES</span>
            <h2 className="serve-heading">WHAT WE DO?</h2>
            <div className="separator"></div>
            <p className="serve-description" style={{textAlign:"left"}}>
              If you hire a videographer of our team you will 
              get a video professional to make a custom video 
              for your business and, once the project is over.
            </p>
            <button className="serve-button">
              VIEW ALL SERVICES
            </button>
          </div>

          {/* Right Section */}
          <div className="serve-list">
            {services.map((service, index) => (
              <ServiceBox
                key={index}
                title={service.title}
                description={service.description}
                iconUrl={service.iconUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;