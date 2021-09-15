import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'
import logo from '../../img/logo/logo-white.png'

const Login = ({ login, isAuthenticated, user }) => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    login(email, password)
  }

  if (isAuthenticated && user) {
    return <Redirect to={"/home/"} />
  }

  return (
    <div className='container-fluid bg-login'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6 pt-4'>
            <div className='p-5 d-flex justify-content-center'>
              <img src={logo} alt="LOGO" />
            </div>
            <form className="form p-5" onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  className='form-control'
                  value={email}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className='form-control'
                  value={password}
                  onChange={onChange}
                  minLength="6"
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  className='form-control btn-info'
                  value="Login"
                />
              </div>
            </form>
          </div>
          <div className='col-md-3'></div>
        </div>
      </div>
    </div>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
})

export default connect(mapStateToProps, { login })(Login)
