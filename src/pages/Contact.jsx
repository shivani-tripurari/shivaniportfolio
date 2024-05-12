import '../App.css';
import '../index.css';
import love from '../resources/love.png';
import star from '../resources/star.png';

function ContactForm(){

    return(
        <>
        <div className='contact-section'>
            <h1>Contact me</h1>
            <div className="contact-container">
                <div className="contact-r1">
                    <div className="mail">
                        <h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="email"><path fill="#fff" d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"></path><path fill="#fff" d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"></path><path fill="#fff" d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"></path></svg>E-mail :</h4>
                        <p>tripurarishivani12@gmail.com</p>
                    </div>
                    <div className="circle1"></div>
                    <div className="linkedin">
                        <h4><svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2389" viewBox="0 5 1036 990" id="linkedin"><path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"></path></svg>Linkedin :</h4>
                        <p><a href='https://www.linkedin.com/in/shivani-tripurari-a7962621b/'>Shivani Tripurari</a></p>
                    </div>
                    <div className="circle2"></div>
                </div>
                <div className="contact-r2">
                    <div className="github">
                        <h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="github">
                            <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z" fill="#FFF"></path>
                            </svg>GitHub :</h4>
                            <p><a href='https://github.com/shivani-tripurari'>shivani-tripurari</a></p>
                    </div>
                    <div className="circle3"></div>
                    <div className="devpost">
                        <h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.5 47.5" id="d"><defs><clipPath id="a"><path d="M0 38h38V0H0v38Z"></path></clipPath></defs><g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)"><path fill="#3b88c3" d="M37 5a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V5Z"></path><path fill="#fff" d="M14.707 12.28h3.132c4 0 5.828 2.945 5.828 6.666 0 3.969-1.859 6.852-6.138 6.852h-2.822V12.28Zm-4.65 15.409c0 1.427.992 2.388 2.387 2.388h5.147c6.946 0 10.914-4.465 10.914-11.348 0-6.511-4.216-10.728-10.604-10.728h-5.395c-1.024 0-2.449.558-2.449 2.325v17.363z"></path></g></svg>Devpost :</h4>
                        <p><a href='https://devpost.com/shivanitripurari07'>Shivani07</a></p>
                    </div>
                    <div className="circle4"></div>
                </div>
            </div>
            <div className="line"></div>
            <div className="footer">
                <p>Made from scratch using <span>React.js</span><img className='love-img' src={love}/> </p>
            </div>
        </div>
        </>
    );
}
export default ContactForm;