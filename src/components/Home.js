import React from 'react';

function Home() {
  return (
    <div>
      {/* <!-- home
   ================================================== --> */}
      <section id='home'>
        <div className='overlay'></div>

        <div className='home-content-table'>
          <div className='home-content-tablecell'>
            <div className='row'>
              <div className='col-twelve'>
                <h3 className='animate-intro'>We Are Infinity.</h3>
                <h1 className='animate-intro'>
                  We Craft Stunning <br />
                  Digital Experiences.
                </h1>

                <div className='more animate-intro'>
                  <a className='smoothscroll button stroke' href='#about'>
                    Learn More
                  </a>
                </div>
              </div>
              {/* <!-- end col-twelve -->  */}
            </div>
            {/* <!-- end row -->  */}
          </div>
          {/* <!-- end home-content-tablecell --> 		    */}
        </div>
        {/* <!-- end home-content-table --> */}

        <ul className='home-social-list'>
          <li className='animate-intro'>
            <a href='#'>
              <i className='fa fa-facebook-square'></i>
            </a>
          </li>
          <li className='animate-intro'>
            <a href='#'>
              <i className='fa fa-twitter'></i>
            </a>
          </li>
          <li className='animate-intro'>
            <a href='#'>
              <i className='fa fa-instagram'></i>
            </a>
          </li>
          <li className='animate-intro'>
            <a href='#'>
              <i className='fa fa-behance'></i>
            </a>
          </li>
          <li className='animate-intro'>
            <a href='#'>
              <i className='fa fa-dribbble'></i>
            </a>
          </li>
        </ul>
        {/* <!-- end home-social-list -->	 */}

        <div className='scrolldown'>
          <a href='#about' className='scroll-icon smoothscroll'>
            Scroll Down
            <i className='fa fa-long-arrow-right' aria-hidden='true'></i>
          </a>
        </div>
      </section>
      {/* <!-- end home --> */}
    </div>
  );
}

export default Home;
