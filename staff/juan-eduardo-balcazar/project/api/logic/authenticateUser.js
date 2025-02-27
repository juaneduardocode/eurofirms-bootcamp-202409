import { User } from '../data/models.js'

function authenticateUser(username, password) {
    if (typeof username !== 'string') throw new Error('invalid username')
    if (username.length < 4) throw new Error('invalid username length')

    if (typeof password !== 'string') throw new Error('invalid password')
    if (password.length < 8) throw new Error('invalid password length')

    return User.findOne({ username, password })
        .catch(error => { throw new Error(error.message) })
        .then(user => {
            if (!user) throw new Error('wrong credentials')

            return user._id.toString()
        })
}
export default authenticateUser