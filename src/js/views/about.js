import React from "react";
import "../../styles/about.css";

const About = () => {
  return (
    <div className="container">
      <div className="about-section mt-5">
        <h1>About Us</h1>

        <p>
        Welcome to REALM32, a full-service digital marketing agency that specializes in helping businesses achieve their marketing goals through effective digital strategies and campaigns.
At REALM32, we believe that digital marketing is about more than just likes and clicks. It's about building meaningful relationships with your target audience and driving tangible results for your business. That's why we take a data-driven approach to every project, using analytics and insights to inform our strategies and tactics.
Our team of talented professionals brings expertise in a range of digital marketing services, including branding & web, content creation, social media management, email marketing, and mentorship. We work with businesses of all sizes, from small startups to large corporations, and provide tailored solutions to meet their unique marketing goals and objectives.
What sets us apart is our commitment to delivering high-quality work and exceptional customer service. We believe that collaboration and communication are key to a successful partnership, and we work closely with our clients to understand their needs and provide the best possible solutions.
If you're looking to take your digital marketing to the next level, you've come to the right place. Contact us today to learn more about how we can help you achieve your business goals.


</p>
        <p></p>
      </div>

      <h2 className="m-5" style={{textAlign:"center", color:"white"}}>Our Team</h2>
      <div className="row mb-5">
        <div className="column">
          <div className="card">
            <img src="https://images.squarespace-cdn.com/content/v1/5c4d7e227e3c3a6ec70a5ac7/1549195948171-60SBD1G8V8PF85A44SY4/Sir+Patrick+Stewart+Portrait+Sitting+2014-14-05-+%282+of+4%29.jpg?format=1000w" alt="Jane" style={{width:"100%"}} />
            <div className="container">
              <h2>John Doe</h2>
              <p className="title">CEO & Founder</p>
              <p>John Doe, the CEO and founder of a leading digital marketing agency, is a digital marketing expert with years of experience in the industry.John has built a team of talented professionals who provide top-notch services in branding & web, content creation, social media management, and mentorship.</p>
              <p>john@realm32.com</p>
              <p><button className="button">Contact</button></p>
            
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="https://media.vanityfair.com/photos/56abbecd74ddc1821611aeea/master/w_1200,h_900,c_limit/hollywood-portfolio-2016-annie-leibovitz-02.jpg" alt="Mike" style={{width:"100%"}} />
            <div className="container">
              <h2>Jane Smith</h2>
              <p className="title">Art Director</p>
              <p>As the Art Director of our leading digital marketing creative agency, Jane Smith brings a wealth of experience and expertise to the table. With a keen eye for design and a passion for creative innovation, Jane leads a team of talented professionals in producing visually stunning and engaging content across all digital platforms.</p>
              <p>Jane@realm32.com</p>
              
              <p><button className="button mt-auto">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpJylq4bTk_hKCMr4UzUBlqU_vqI_M2VLQZw&usqp=CAU" alt="John" style={{width:"100%"}} />
            <div className="container">
              <h2>Anne Hathaway</h2>
              <p className="title">Designer</p>
              <p>Meet Anne Hathaway, the lead designer at REALM32. With 6 years of experience in the design industry, Anne brings a fresh and innovative perspective to every project. As a master of design software and techniques, Anne creates visually compelling and effective designs for various digital marketing campaigns.</p>
              <p>anne@realm32.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

