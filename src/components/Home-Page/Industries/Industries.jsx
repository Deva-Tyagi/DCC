import React from 'react';
import './Industries.css';

const Industries = () => {
    const industries = [
        { id: 1, name: 'BEAUTY & FASHION', x: '20%', y: '30%', icon: '✂️' },
        { id: 2, name: 'SPORTS', x: '20%', y: '50%', isRed: true },
        { id: 3, name: 'GOVERNMENT ENTITIES', x: '35%', y: '20%' },
        { id: 4, name: 'HOTEL', x: '35%', y: '40%' },
        { id: 5, name: 'AUTOMOTIVE', x: '35%', y: '60%' },
        { id: 6, name: 'ENTERTAINMENT & EVENTS', x: '50%', y: '30%' },
        { id: 7, name: 'BANKING', x: '50%', y: '50%' },
        { id: 8, name: 'TECHNOLOGY', x: '50%', y: '70%' },
        { id: 9, name: 'RETAIL', x: '65%', y: '20%' },
        { id: 10, name: 'TELECOMS', x: '65%', y: '40%' },
        { id: 11, name: 'RESTAURANTS', x: '65%', y: '60%' },
        { id: 12, name: 'MEDICAL & HEALTHCARE', x: '80%', y: '30%', isRed: true },
        { id: 13, name: 'E-COMMERCE', x: '80%', y: '50%', icon: '🛒' }
    ];
    
    return (
        <div className="industries-page">
            <div className="industries-background">
                {/* World Map Background */}
                <div className="map-overlay">
                    <svg width="100%" height="100%" viewBox="0 0 1000 500">
                        <path 
                            d="M0,250 C150,200 300,150 500,250 C700,350 850,300 1000,250" 
                            fill="none" 
                            stroke="white" 
                            strokeWidth="0.5"
                        />
                        {Array.from({ length: 50 }).map((_, i) => (
                            <circle
                                key={i}
                                cx={Math.random() * 1000}
                                cy={Math.random() * 500}
                                r="2"
                                fill="white"
                                className="map-dot"
                            />
                        ))}
                    </svg>
                </div>

                <div className="animated-shapes">
                    <div className="shape"></div>
                    <div className="shape"></div>
                    <div className="shape"></div>
                    <div className="shape"></div>
                </div>
                <div className="background-hexagon"></div>
                <div className="background-hexagon"></div>
            </div>

            <div className="industries-main">
                <h1 className="industries-title">INDUSTRIES WE SERVE</h1>
                <div className="industries-grid">
                    {industries.map((industry) => (
                        <div
                            key={industry.id}
                            style={{
                                left: industry.x,
                                top: industry.y
                            }}
                            className="industry-item"
                        >
                            <div className={`industry-hexagon ${industry.isRed ? 'red-variant' : ''}`}>
                                <div className="industry-icon">
                                    {industry.icon || '🏢'}
                                </div>
                                <p className="industry-text">
                                    {industry.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Industries;

// import React from 'react';
// import {
//   Building2,
//   Utensils,
//   Car,
//   Building,
//   Hotel,
//   Tent,
//   ShoppingBag,
//   Radio,
//   Binary,
//   Scissors,
//   ShoppingBasket,
//   HeartPulse
// } from 'lucide-react';
// import './Industries.css';

// // Industry data array
// const industriesData = [
//   { name: 'BEAUTY & FASHION', icon: <Scissors className="w-8 h-8" /> },
//   { name: 'GOVERNMENT', icon: <Building2 className="w-8 h-8" /> },
//   { name: 'ENTERTAINMENT & EVENTS', icon: <Tent className="w-8 h-8" /> },
//   { name: 'RETAIL', icon: <ShoppingBag className="w-8 h-8" /> },
//   { name: 'HOTEL', icon: <Hotel className="w-8 h-8" /> },
//   { name: 'BANKING', icon: <Building className="w-8 h-8" /> },
//   { name: 'TELECOMS', icon: <Radio className="w-8 h-8" /> },
//   { name: 'RESTAURANTS', icon: <Utensils className="w-8 h-8" /> },
//   { name: 'AUTOMOTIVE', icon: <Car className="w-8 h-8" /> },
//   { name: 'TECHNOLOGY', icon: <Binary className="w-8 h-8" /> },
//   { name: 'SPORTS', icon: <ShoppingBasket className="w-8 h-8" /> },
//   { name: 'MEDICAL & HEALTHCARE', icon: <HeartPulse className="w-8 h-8" /> }
// ];

// const Industries = () => {
//   return (
//     <div className="industries-container">
//       <div className="industries-content-wrapper">
//         <h1 className="industries-title">INDUSTRIES WE SERVE</h1>
        
//         <div className="industries-grid">
//           {industriesData.map((industry, index) => (
//             <div
//               key={industry.name}
//               className={`hexagon-wrapper ${index % 2 === 0 ? 'offset' : ''}`}
//             >
//               <div className={`hexagon ${
//                 industry.name === 'MEDICAL & HEALTHCARE' || 
//                 industry.name === 'SPORTS' ? 'highlight' : ''
//               }`}>
//                 <div className="icon-wrapper">{industry.icon}</div>
//                 <p className="industry-name">{industry.name}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Industries;