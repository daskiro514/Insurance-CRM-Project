import React from 'react'
import TextLogo from '../../img/landing/text-logo.png'
import Broker from '../../img/landing/image-broker.png'
import Provider from '../../img/landing/image-providers.png'
import Customer from '../../img/landing/image-customer.png'
import { Link } from 'react-router-dom'

const Landing = () => {

  return (
    <div>
      <div className='bg-landing'>
        <div className='container'>
          <div className='row p-3 d-flex flex-row-reverse topNavBar'>
            <Link to=''>What Are We?</Link>
            <Link to='/login'>Login</Link>
          </div>
          <div className='row py-5 d-flex flex-row-reverse align-items-center'>
            <div className='col-md-12'>
              <img src={TextLogo} alt='TEXTLOGO' className='img-fluid' />
            </div>
          </div>
          <div className='row py-2 pt-5 px-4'>
            <div className='text-center text-white w-100 text-specialize'>
              Here at <strong>Aquerate</strong> we specialize in:
            </div>
          </div>
          <div className='row py-5'>
            <div className='col-md-4'>
              <div className='p-4'>
                <img src={Customer} alt='Customer' className='img-fluid' />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='p-4'>
                <img src={Provider} alt='Provider' className='img-fluid' />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='p-4'>
                <img src={Broker} alt='BROKER' className='img-fluid' />
              </div>
            </div>
          </div>
          <div className='row py-5'>
            <div className='text-center text-white w-100'>
              <h1><strong>Customer</strong> Reviews:</h1>
            </div>
            <div className='mx-5 text-review'>
              {[1, 2, 3].map((item, index) =>
                <div key={index} className='bg-white m-5'>
                  <div><i className='fa fa-quote-left pt-4 pl-4' style={{ fontSize: '36px', color: 'blue' }}></i></div>
                  <div className='mt-3 mx-5 mb-4 text-review-inner-text'>Founded by Nico Marley, the grandson of Bob Marley, Lion X Wellness is inspired by the legacy of the Marley family. Authenticity and wellness are at the center of our mission, and we're commiteted to offering only the highest-quality CBD online. Our CBD products are made by and for people who think of wellness not as a chore but as a lifestyle, and who are energized by the idea of pursuing greatness in all that they do. As a former professional NFL player, Nico is driven by high performance and olistic health, and this motivation is at the core of Lion X Wellness.</div>
                  <div className='text-right h1 p-4' style={{ color: 'blue', fontWeight: 'bold' }}>Hary Lin</div>
                </div>
              )}
            </div>
          </div>
          <div className='row py-5'>
            <div className='text-center w-100'>
              <Link to='' className='link-contact-info p-2 px-5'>Contact Info:</Link>
            </div>
          </div>
          <div className='row p-3 pb-5' style={{ color: 'white' }}>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
              <form className='form'>
                <div className='form-group '>
                  <label>Name</label>
                  <input
                    type='text'
                    className='form-control'
                    required
                  />
                </div>
                <div className='form-group '>
                  <label>Email</label>
                  <input
                    type='text'
                    className='form-control'
                    required
                  />
                </div>
                <div className='form-group '>
                  <label>Phone Number</label>
                  <input
                    type='text'
                    className='form-control'
                    required
                  />
                </div>
                <div className='form-group '>
                  <label>Message...</label>
                  <textarea
                    type='text'
                    rows={5}
                    className='form-control'
                    required
                  />
                </div>
                <div className='form-group'>
                  <button type='submit' className='form-control btn-secondary'>
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
            <div className='col-md-3'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing