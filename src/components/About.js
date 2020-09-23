import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <section id='about'>
        <div className='row about-wrap'>
          <div className='col-full'>
            <div className='about-profile-bg'></div>

            <div className='intro'>
              <h3 className='animate-this'>About Us</h3>
              <p data-aos='fade-up' className='lead animate-this'>
                <span>Infinity</span> is a creative digital agency based in
                Manila, Philippines. We are composed of creative designers and
                experienced developers.
              </p>
            </div>
          </div>
          {/* <!-- end col-full  --> */}
        </div>
        {/* <!-- end about-wrap  --> */}
      </section>
      {/* <!-- end about --> */}
    </div>
  );
}

export default About;
