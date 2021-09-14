const users = require('./migrate/users.js');
const User = require('./models/User')

// MongoDB Connect
const connectDB = require('./config/db');
connectDB()

const importData = async () => {
  try {
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