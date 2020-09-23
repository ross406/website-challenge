import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Portfolio() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <section id='portfolio'>
        <div className='intro-wrap'>
          <div
            data-aos='fade-up'
            className='row narrow section-intro with-bottom-sep '
          >
            <div className='col-twelve'>
              <h3>Showcase</h3>
              <h1>See Our Featured Projects.</h1>

              <p className='lead'>
                Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet
                commodo ea dolore irure esse Duis nulla sint fugiat cillum
                ullamco proident aliquip quis qui voluptate dolore veniam Ut
                laborum non est in officia.
              </p>
            </div>
          </div>
          {/* <!-- end row section-intro -->   		 */}
        </div>
        {/* <!-- end intro-wrap -->   	 */}

        <div className='row portfolio-content'>
          <div className='col-twelve'>
            <div id='folio-wrap' className='bricks-wrapper'>
              <div className='brick folio-item'>
                <div
                  data-aos='flip-left'
                  className='item-wrap animate-this'
                  data-src='images/portfolio/gallery/g-shutterbug.jpg'
                  data-sub-html='#01'
                >
                  <a href='#' className='overlay'>
                    <img
                      src='images/portfolio/shutterbug.jpg'
                      alt='Skaterboy'
                    />
                    <div className='item-text'>
                      <span className='folio-types'>Web Development</span>
                      <h3 className='folio-title'>Shutterbug</h3>
                    </div>
                  </a>
                  <a
                    href='https://www.behance.net/'
                    className='details-link'
                    title='details'
                  >
                    <i className='icon-link'></i>
                  </a>
                </div>
                {/* <!-- end item-wrap --> */}

                <div id='01' className='hide'>
                  <h4>Shutterbug</h4>
                  <p>
                    Lorem ipsum Dolor deserunt labore sint officia. Magna et
                    aute enim proident tempor sunt quis nulla voluptate fugiat
                    velit. <a href='https://www.behance.net/'>Details</a>
                  </p>
                </div>
              </div>
              {/* <!-- end folio-item --> */}

              <div className='brick folio-item'>
                <div
                  data-aos='flip-left'
                  className='item-wrap animate-this'
                  data-src='images/portfolio/gallery/g-yellowwall.jpg'
                  data-sub-html='#02'
                >
                  <a href='#' className='overlay'>
                    <img
                      src='images/portfolio/yellowwall.jpg'
                      alt='Shutterbug'
                    />
                    <div className='item-text'>
                      <span className='folio-types'>Marketing</span>
                      <h3 className='folio-title'>Yellow Wall</h3>
                    </div>
                  </a>
                  <a
                    href='https://www.behance.net/'
                    className='details-link'
                    title='details'
                  >
                    <i className='icon-link'></i>
                  </a>
                </div>
                {/* <!-- end item-wrap --> */}

                <div id='02' className='hide'>
                  <h4>Yellow Wall</h4>
                  <p>
                    Lorem ipsum Dolor deserunt labore sint officia. Magna et
                    aute enim proident tempor sunt quis nulla voluptate fugiat
                    velit. <a href='https://www.behance.net/'>Details</a>
                  </p>
                </div>
              </div>
              {/* <!-- end folio-item --> */}

              <div className='brick folio-item'>
                <div
                  data-aos='flip-left'
                  className='item-wrap animate-this'
                  data-src='images/portfolio/gallery/g-architecture.jpg'
                  data-sub-html='#03'
                >
                  <a href='#' className='overlay'>
                    <img
                      src='images/portfolio/architecture.jpg'
                      alt='Explore'
                    />
                    <div className='item-text'>
                      <span className='folio-types'>Web Design</span>
                      <h3 className='folio-title'>Architecture</h3>
                    </div>
                  </a>
                  <a
                    href='https://www.behance.net/'
                    className='details-link'
                    title='details'
                  >
                    <i className='icon-link'></i>
                  </a>
                </div>
                {/* <!-- end item-wrap -->	 */}

                <div id='03' className='hide'>
                  <h4>Architecture</h4>
                  <p>
                    Lorem ipsum Dolor deserunt labore sint officia. Magna et
                    aute enim proident tempor sunt quis nulla voluptate fugiat
                    velit. <a href='https://www.behance.net/'>Details</a>
                  </p>
                </div>
              </div>
              {/* <!-- end folio-item --> */}

              <div className='brick folio-item'>
                <div
                  data-aos='flip-left'
                  className='item-wrap '
                  data-src='images/portfolio/gallery/g-minimalismo.jpg'
                  data-sub-html='#04'
                >
                  <a href='#' className='overlay'>
                    <img
                      src='images/portfolio/minimalismo.jpg'
                      alt='Minimalismo'
                    />
                    <div className='item-text'>
                      <span className='folio-types'>Web Design</span>
                      <h3 className='folio-title'>Minimalismo</h3>
                    </div>
                  </a>
                  <a
                    href='https://www.behance.net/'
                    className='details-link'
                    title='details'
                  >
                    <i className='icon-link'></i>
                  </a>
                </div>
                {/* <!-- end item-wrap --> */}

                <div id='04' className='hide'>
                  <h4>Minimalismo</h4>
                  <p>
                    Lorem ipsum Dolor deserunt labore sint officia. Magna et
                    aute enim proident tempor sunt quis nulla voluptate fugiat
                    velit. <a href='https://www.behance.net/'>Details</a>
                  </p>
                </div>
              </div>
              {/* <!-- end folio-item --> */}

              <div className='brick folio-item'>
                <div
                  data-aos='flip-left'
                  className='item-wrap animate-this'
                  data-src='images/portfolio/gallery/g-skaterboy.jpg'
                  data-sub-html='#05'
                >
                  <a href='#' className='overlay'>
                    <img src='images/portfolio/skaterboy.jpg' alt='Bicycle' />
                    <div className='item-text'>
                      <span className='folio-types'>Branding</span>
                      <h3 className='folio-title'>Skaterboy</h3>
                    </div>
                  </a>
                  <a
                    href='https://www.behance.net/'
                    className='details-link'
                    title='details'
                  >
                    <i className='icon-link'></i>
                  </a>
                </div>
                {/* <!-- end item-wrap --> */}

                <div id='05' className='hide'>
                  <h4>Skaterboy</h4>
                  <p>
                    Lorem ipsum Dolor deserunt labore sint officia. Magna et
                    aute enim proident tempor sunt quis nulla voluptate fugiat
                    velit. <a href='https://www.behance.net/'>Details</a>
                  </p>
                </div>
              </div>
              {/* <!-- end folio-item --> */}

              <div className='brick folio-item'>
                <div
                  data-aos='flip-left'
                  className='item-wrap animate-this'
                  data-src='images/portfolio/gallery/g-salad.jpg'
                  data-sub-html='#06'
                >
                  <a href='#' className='overlay'>
                    <img src='images/portfolio/salad.jpg' alt='Salad' />
                    <div className='item-text'>
                      <span className='folio-types'>Branding</span>
                      <h3 className='folio-title'>Salad</h3>
                    </div>
                  </a>
                  <a
                    href='https://www.behance.net/'
                    className='details-link'
                    title='details'
                  >
                    <i className='icon-link'></i>
                  </a>
                </div>
                {/* <!-- end item-wrap --> */}

                <div id='06' className='hide'>
                  <h4>Salad</h4>
                  <p>
                    Lorem ipsum Dolor deserunt labore sint officia. Magna et
                    aute enim proident tempor sunt quis nulla voluptate fugiat
                    velit. <a href='www.behance.net'>Details</a>
                  </p>
                </div>
              </div>
              {/* <!-- end folio-item -->   				 */}
            </div>
            {/* <!-- end folio-wrap --> */}
          </div>
          {/* <!-- end twelve --> */}
        </div>
        {/* <!-- end portfolio-content -->   	 */}
      </section>
      {/* <!-- end portfolio --> */}
    </div>
  );
}

export default Portfolio;
