import React from "react";
import "../../styles/about.css";

const About = () => {
  return (
    <div>
      <div class="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p>
      </div>

      <h2 style={{textAlign:"center"}}>Our Team</h2>
      <div class="row">
        <div class="column">
          <div class="card">
            <img src="https://images.squarespace-cdn.com/content/v1/5c4d7e227e3c3a6ec70a5ac7/1549195948171-60SBD1G8V8PF85A44SY4/Sir+Patrick+Stewart+Portrait+Sitting+2014-14-05-+%282+of+4%29.jpg?format=1000w" alt="Jane" style={{width:"100%"}} />
            <div class="container">
              <h2>Jane Doe</h2>
              <p class="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src="https://media.vanityfair.com/photos/56abbecd74ddc1821611aeea/master/w_1200,h_900,c_limit/hollywood-portfolio-2016-annie-leibovitz-02.jpg" alt="Mike" style={{width:"100%"}} />
            <div class="container">
              <h2>Mike Ross</h2>
              <p class="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpJylq4bTk_hKCMr4UzUBlqU_vqI_M2VLQZw&usqp=CAU" alt="John" style={{width:"100%"}} />
            <div class="container">
              <h2>John Doe</h2>
              <p class="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;