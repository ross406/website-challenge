import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Services() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <section id='services'>
        {/* <div className='overlay'></div> */}
        <div className='gradient-overlay'></div>

        <div
          data-aos='fade-up'
          className='row narrow section-intro with-bottom-sep animate-this'
        >
          <div className='col-full'>
            <h3>Services</h3>
            <h1>What We Do.</h1>

            <p className='lead'>
              Lorem ipsum Elit ut consequat veniam eu nulla nulla reprehenderit
              reprehenderit sit velit in cupidatat ex aliquip ut cupidatat
              Excepteur tempor id irure sed dolore sint sunt voluptate ullamco
              nulla qui Duis qui culpa voluptate enim ea aute qui veniam in
              irure et nisi nostrud deserunt est officia minim.
            </p>
          </div>
          {/* <!-- end col-full --> */}
        </div>
        {/* <!-- end row --> */}

        <div className='row '>
          <div className='services-list block-1-2 block-tab-full group'>
            <div data-aos='fade-up' className='bgrid service-item '>
              <span className='icon'>
                <i className='icon-paint-brush'></i>
              </span>

              <div className='service-content'>
                <h3 className='h05'>Branding</h3>

                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit.
                </p>
              </div>
            </div>
            {/* <!-- end bgrid --> */}

            <div data-aos='fade-up' className='bgrid service-item '>
              <span className='icon'>
                <i className='icon-earth'></i>
              </span>

              <div className='service-content'>
                <h3 className='h05'>Web Design</h3>

                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit.
                </p>
              </div>
            </div>
            {/* <!-- end bgrid --> */}

            <div data-aos='fade-up' className='bgrid service-item '>
              <span className='icon'>
                <i className='icon-lego-block'></i>
              </span>

              <div className='service-content'>
                <h3 className='h05'>Web Development</h3>

                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit.
                </p>
              </div>
            </div>
            {/* <!-- end bgrid --> */}

            <div data-aos='fade-up' className='bgrid service-item '>
              <span className='icon'>
                <i className='icon-megaphone'></i>
              </span>

              <div className='service-content'>
                <h3 className='h05'>Marketing</h3>

                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit.
                </p>
              </div>
            </div>
            {/* <!-- end bgrid -->			    */}
          </div>
          {/* <!-- end services-list --> */}
        </div>
        {/* <!-- end services-content -->   			 */}
      </section>
      {/* <!-- end services --> */}
    </div>
  );
}

export default Services;
