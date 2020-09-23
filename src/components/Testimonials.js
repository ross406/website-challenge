import React from 'react';

function Testimonials() {
  return (
    <div>
      <section id='testimonials'>
        <div className='row'>
          <div className='col-twelve'>
            <h2 className='animate-this'>What They Say About Us.</h2>
          </div>
        </div>

        <div className='row flex-container'>
          <div id='testimonial-slider' className='flex-slider animate-this'>
            <ul className='slides'>
              <li>
                <p>
                  Your work is going to fill a large part of your life, and the
                  only way to be truly satisfied is to do what you believe is
                  great work. And the only way to do great work is to love what
                  you do. If you haven't found it yet, keep looking. Don't
                  settle. As with all matters of the heart, you'll know when you
                  find it.
                </p>

                <div className='testimonial-author'>
                  <img src='images/avatars/user-02.jpg' alt='Author image' />
                  <div className='author-info'>
                    Steve Jobs
                    <span className='position'>CEO, Apple.</span>
                  </div>
                </div>
              </li>
              {/* <!-- end slide --> */}

              <li>
                <p>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                  sit amet mauris.
                </p>

                <div className='testimonial-author'>
                  <img src='images/avatars/user-03.jpg' alt='Author image' />
                  <div className='author-info'>
                    John Doe
                    <span>CEO, ABC Corp.</span>
                  </div>
                </div>
              </li>
              {/* <!-- end slide --> */}
            </ul>
            {/* <!-- end slides --> */}
          </div>
          {/* <!-- end testimonial-slider -->          */}
        </div>
        {/* <!-- end flex-container --> */}
      </section>
    </div>
  );
}

export default Testimonials;
