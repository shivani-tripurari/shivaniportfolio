import '../App.css';
import '../ui.css';
import quest from '../resources/quest.png';
import wire from '../resources/wire.png';
import uiux from '../resources/uiux.png';
import graphic from '../resources/graphic.png';
import webdes from '../resources/webdes.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LinearGradient, RadialGradient } from 'react-text-gradients';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", opacity: 0, color:"fff" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", opacity: 0, color: "#fff"  }}
        onClick={onClick}
      />
    );
  }

function UiWork(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return(
        <>
            <div className="work-section">
                <h1>UI/UX Designing</h1>
                <div className="work-info">
                
                  <p>As someone with a <span>knack of designing</span>, I'm also a designer with experience in the field of <span>UI/UX designing</span>. Apart from this, I'm also a <span>graphic designer</span>.</p>
                
                </div>
                <div className="work-container">
                    <div className="work-boxes">
                    <Slider {...settings}>
                        {data.map((d) => (
                            <div className='parent'>
                                <div className="image-container">
                                    <img src={d.img} />
                                </div>

                                <div className="blob"></div>
                                <div className='info'>
                                    <h2>{d.skill}</h2>
                                    <p>{d.description}</p>
                                    <h4>{d.tech}</h4>
                                </div>
                            </div>
                     ))}
                     </Slider>
                </div>
                </div>
               
            </div>
        </>
    );
}

const data = [
    {
        skill: "High-Fidelity Prototypes",
        img: uiux,
        description: "Worked as a UX designer intern at Expify, India and made mobile and desktop prototypes.",
        tech:"Figma, Ui principles,Prototyping, Adobe photoshop, Adobe illustrator"
    }, 
    {
        skill: "Wireframing",
        img: wire,
        description: "Wireframing is an essential step for designing and developing any application. I had the priviledge of creating mobile and desktop wireframes for Expify, India. ",
        tech:"Figma, User research, Ui principles, Adobe photoshop, Adobe illustrator"
    },
    {
        skill: "Web designing",
        img: webdes,
        description: "As a designer, I prefer to create the web designs, set color theme and then start developing the actual application.",
        tech:"Figma, Adobe photoshop, Adobe illustrator"
    },
    {
        skill: "Graphic designing",
        img: graphic,
        description: "Aa a designing head of Sreenidhi Cancer Foundation, SNIST, I'm responsile for designing, approving and maintaing the designs, posters, etc for the NGO.",
        tech:"Figma, Canva, Adobe photoshop, Adobe illustrator"
    }
];

export default UiWork;