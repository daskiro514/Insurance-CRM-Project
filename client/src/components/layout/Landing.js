import React from 'react'
import Logo from '../../img/landing/logo.png'
import TextLogo from '../../img/landing/text-logo.png'
import Broker from '../../img/landing/image-broker.png'
import Provider from '../../img/landing/image-providers.png'
import Customer from '../../img/landing/image-customer.png'
import { Link } from 'react-router-dom'

const Landing = () => {

  return (
    <div className='bg-landing'>
      <div className='container'>
        <div className='row pt-3 d-flex flex-row-reverse'>
          <Link>What Are We?</Link>
          <Link to='/login'>Login</Link>
        </div>
        <div className='row py-5 d-flex flex-row-reverse align-items-center'>
          <div className='col-md-5'>
            <img src={Logo} alt='LOGO' className='img-fluid' />
          </div>
          <div className='col-md-7'>
            <img src={TextLogo} alt='TEXTLOGO' className='img-fluid' />
          </div>
        </div>
        <div className='row py-2'>
          <div className='text-center text-white w-100 text-specialize'>
            Here in <strong>CRM</strong> we specialize in:
          </div>
        </div>
        <div className='row py-3'>
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
      </div>
    </div>
  )
}

export default Landing