import FooterComp from '../../footer/footer.component.jsx';
import ImageSlider from '../../sections/ImageSlider/imageslider.component.jsx';
import ReviewComp from '../../sections/Reviews/reviewcontainer.jsx';
import OurServicesComp from '../../sections/Services/ourservices.component.jsx';
import AboutUsComp from '../../sections/WhyUs/whyus.component.jsx';
import './homepage.style.scss';
import Background1 from '../../../imagees/image4.jpg';
import Background2 from '../../../imagees/image1.jpg';


const HomePage = () => {
    
    const slides = [
        {url: Background1, title: "Emergency", text: `Emergency Locksmith`, backgroundSize: "", backgroundRepeat: ""}, 
        {url: Background2, title: "Locksmith", text: "Call anytime", backgroundSize: "auto 100%", backgroundRepeat: "no-repeat"},
        //{url: "http://localhost:3000/Images/image3.jpg", title: "Locks", text: "Now"},
    ];

    const reviews = [
        {text: "\"Ian made sure our house was secured according to our insurance policy standards. He did an amazing job.\"", author: "Emily Smith"},
        {text: "\"Called as our tenant couldn't access the flat, due to key stuck in the lock. Michael was out quickly and dealt with the problem, even fixed a few other issues with the door.\"", author: "Josh Brambly"},
        {text: "\"Excellent service! I called for this service as an emergency. The locksmith was a star and fixed the issue with my door.\"", author: "Greta Richards"},    
    ];

    const whyUs = "Why choose us?";
    const whyUsText= "Our emergency locksmith company have locksmiths available near your location 24/7 on every single day of the year including bank holydays with a prompt response within 30 minutes. Our technicians are experts in most locks available on the market and will solve any issue you might face. You can think of us like we are that friend that you can call at any hour to ask for help and receive it unconditionally.";

    const ourVision = "Our Vision";
    const ourVisionText= "We aim to bring safety to every home and every business by satisfying our customer needs at an affordable price. We offer best quality locks and services always to meet your expectations";

    return (
        <div className='homepage'>
            <div className="slider_container">
                <ImageSlider slides={slides}/>
            </div> 
            <OurServicesComp/>
            <AboutUsComp title={whyUs} text={whyUsText}/>
            <ReviewComp reviews={reviews} />
            <AboutUsComp title={ourVision} text={ourVisionText}/>
            <FooterComp/>
        </div>
    )
}

export default HomePage;
