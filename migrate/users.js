const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

// For Avatar Generate
const normalize = require('normalize-url')
const gravatar = require('gravatar')

const users = [
  {
    type: 'admin',
    name: 'Admin King',
    email: 'sbhooley@gmail.com',
    avatar: normalize(gravatar.url('sbhooley@gmail.com', { s: '200', r: 'pg', d: 'mm' }), { forceHttps: true }),
    password: bcrypt.hashSync('admin123', salt),
  }
]