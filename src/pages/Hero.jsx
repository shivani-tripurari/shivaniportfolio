import '../App.css';
import '../index.css';
import {motion, useMotionTemplate, useMotionValue, animate} from 'framer-motion';
import { LinearGradient, RadialGradient } from 'react-text-gradients';
import Navbar from '../components/Navigation.jsx';
import Skills from './Skills.jsx';
import Work from './Work.jsx';
import ContactForm from './Contact.jsx';
import { useEffect } from 'react';
import love from '../resources/love.png';
import star from '../resources/star.png';


const COLORS = ["#DD4762", "#CC6709", "#dd335c", "#21B3A0"];
function Hero(){
    const color = useMotionValue(COLORS[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 90% 0% ,#191919 77%, ${color})`;

    useEffect(() => {
        animate(color, COLORS, {
            ease: 'easeInOut', 
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        })
    }, [])

    return(
        <>
            <div className='container-hero'>
                <Navbar/>
                <motion.section className="aurora"   style={{
                    backgroundImage
                }}>
                </motion.section>
                <div className="right">
                    <div className="blob"></div>
                </div>
                <div className='text-hero'>
                    <h2 className='name'>Hey! I'm Shivani Tripurari<a href="https://buymeacoffee.com/shivaniiii"><img src={love}/></a></h2>
                    <h2 className='prof'>
                        <LinearGradient gradient={['to left', '#222, #fefdff']} fallbackColor="black">  
                            Web Developer & Designer
                        </LinearGradient>
                    </h2>
                    <p>I love coffee, cycling, code, and ice cream. I'm interested in building beautiful, functional digital experiences that make people's lives easier.</p>
                    <div className="link-box">
                        <button className='link'><a href='https://linktr.ee/shivanitripurari'>Who am I ?</a></button>
                            
                    </div>    
                 </div>
                
                
            </div>
            <Skills/>
            <Work/>
            <ContactForm/>
        </>
        
    );
}
export default Hero;