import React, { useEffect } from 'react';

function Footer() {
  return (
    <div>
      <footer>
        <div className='footer-main'>
          <div className='row'>
            <div className='col-five tab-full footer-about'>
              <h4 className='h05'>Infinity.</h4>

              <p>
                Proin eget tortor risus. Mauris blandit aliquet elit, eget
                tincidunt nibh pulvinar a. Praesent sapien massa, convallis a
                pellentesque nec, egestas non nisi. Mauris blandit aliquet elit,
                eget tincidunt nibh pulvinar a. Nulla porttitor accumsan
                tincidunt. Nulla porttitor accumsan tincidunt. Proin eget tortor
                risus.
              </p>
            </div>
            {/* <!-- end footer-about --> */}

            <div className='col-three tab-full footer-social'>
              <h4 className='h05'>Follow Us.</h4>

              <ul className='list-links'>
                <li>
                  <a href='#'>Facebook</a>
                </li>
                <li>
                  <a href='#'>Twitter</a>
                </li>
                <li>
                  <a href='#'>Instagram</a>
                </li>
                <li>
                  <a href='#'>Behance</a>
                </li>
                <li>
                  <a href='#'>Dribble</a>
                </li>
              </ul>
            </div>
            {/* <!-- end footer-social -->   */}

            <div className='col-four tab-full footer-subscribe end'>
              <h4 className='h05'>Get Notified.</h4>

              <p>
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Praesent sapien massa.
              </p>

              <div className='subscribe-form'>
                <form id='mc-form' className='group' novalidate='true'>
                  <input
                    type='email'
                    value=''
                    name='dEmail'
                    className='email'
                    id='mc-email'
                    placeholder='type email'
                    required=''
                  />

                  {/* <!-- <input type="submit" name="subscribe" > --> */}
                  <button>
                    <i className='icon-mail'></i>
                  </button>

                  <label for='mc-email' className='subscribe-message'></label>
                </form>
              </div>
            </div>
            {/* <!-- end footer-subscribe -->      	     */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end footer-main --> */}

        {/* <div className='footer-bottom'>
          <div className='row'>
            <div className='col-twelve'>
              <div className='copyright'>
                <span>© Copyright Infinity 2016.</span>
                <span>
                  Design by <a href='http://www.styleshout.com/'>styleshout</a>
                </span>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- end footer-bottom --> */}

        <div id='go-top'>
          <a className='smoothscroll' title='Back to Top' href='#top'>
            <i className='fa fa-long-arrow-up' aria-hidden='true'></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
