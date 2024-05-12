import '../App.css';
import '../index.css';
import freelancing from '../resources/freelancing.png';
import fullstack from '../resources/fullstack.png';
import open from '../resources/opensource.png';
import freelance from '../resources/freelance.png';
import uiux from '../resources/uiux.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", opacity: 0 }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", opacity: 0  }}
        onClick={onClick}
      />
    );
  }

function Work(){
    const settings = {
        dots: false,
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
            <div id="work" className="work-section">
                <h1>My work</h1>
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
                                    <Link to={d.path}><button>Know more</button></Link>
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
        skill: "Front-end development",
        img: fullstack,
        description: "I code beautiful web experiences and have a good grip over various front-end technologies",
        path:"/FrontendWork"
    }, 
    {
        skill: "Full stack development",
        img: freelance,
        description: "I build complete web projects by using MERN stack",
        path:"/FullstackWork"
    },
    {
        skill: "Open-source contribution",
        img: open,
        description: "I contributed to various open source projects, participated in various events, collaborated with people and expanded my knowledge",
        path:"https://github.com/shivani-tripurari"
    },
    {
        skill: "Freelancing",
        img: freelancing,
        description: "Worked on some freelance projects related to front-end and fullstack development",
        path:"https://www.linkedin.com/in/shivani-tripurari-a7962621b/"
    },
    {
        skill: "UI/UX designing",
        img: uiux,
        description: "I have a good understanding of designing principles and I believe a good product shouuld have good user experience",
        path:"/UiWork"
    },
];

export default Work;