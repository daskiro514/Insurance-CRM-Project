const User = require('./models/User')
const Carrier = require('./models/Carrier')

const users = require('./migrate/users.js')
const carriers = require('./migrate/carriers.js')

// MongoDB Connect
const connectDB = require('./config/db');
connectDB()

const importData = async () => {
  try {
    await Carrier.deleteMany()

    for (let index = 0; index < carriers.length; index ++) {
      await Carrier.create(carriers[index])
    }

    await User.deleteMany()

    for (let index = 0; index < users.length; index ++) {
      await User.create(users[index])
    }

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await User.deleteMany()
    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}