import '../App.css';
import '../projects.css';
import quest from '../resources/quest.png';
import fullstack from '../resources/fullstack.png';
import inner from '../resources/inner.png';
import freelance from '../resources/freelance.png';
import hackz from '../resources/hackz.png';
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

function FrontendWork(){
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
                <h1>Frontend Development</h1>
                <div className="work-info">
                
                  <p>I'm a Frontend developer with <span>JavaScript</span> experience, developing and designing <span>ReactJS</span> and UI based applications. My aim is to build digital experiences which help both <span>users and businesses.</span></p>
                
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
                                    <button><a href={d.link}>GitHub</a></button>
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
        skill: "MedBot.AI",
        img: fullstack,
        description: "This project helps users to ask any medical queries, keep track on their health stats, maintain medical records, book appointments, get help and provide help all at the comforft of their home",
        tech:"React.Js, TailwindCSS, HTML, GoogleFit API, JavaScript",
        link:"https://github.com/shivani-tripurari/MedBot-HackBrew"
    }, 
    {
        skill: "Amani",
        img: freelance,
        description: "A project which aims to help the underprivileged youth of African subcontinent.You can help them by donating money or food, brcoming a mentor, start a fundraising",
        tech:"React.Js, TailwindCSS, HTML, d3.js, JavaScript",
        linl:"https://github.com/shivani-tripurari/Amani"
    },
    {
        skill: "HackZ",
        img: hackz,
        description: "A project that is made for students which has hackathon listings from local to national level.It provides a platform where you can host hackathons.",
        tech:"Vanilla JavaScript, CSS, HTML, BootStrap, GSAP",
        link:"https://github.com/shivani-tripurari/Hashitout_team15"
    },
    {
        skill: "InnerBalance",
        img: inner,
        description: "InnerBalane 🌿 , your trusted resource for mental health support and information. Join us on your journey to better mental well-being.",
        tech:"Vanilla JavaScript, CSS, HTML, BootStrap, GSAP",
        link:"https://github.com/shivani-tripurari/MentalWellness"
    },
    {
        skill: "Quest Compass",
        img: quest,
        description: "Whether you're seeking serene beaches, majestic mountains, or cultural experiences, QuestCompass is your ultimate guide to exploring the captivating destinations that India has to offer.",
        tech:"Vanilla JavaScript, CSS, HTML, BootStrap",
        link:"https://github.com/vishan01/QuestCompass"
    },
];

export default FrontendWork;