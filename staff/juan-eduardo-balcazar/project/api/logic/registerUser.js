import { User } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, DuplicityError } = errors

function registerUser(commercial1, commercial2, provider1, provider2, client1) {
    // name, email, username, password

    validate.name(name)
    validate.email(email)
    validate.username(username)
    validate.password(password)
    validate.commercial1(commercial1)
    validate.commercial2(commercial2)
    validate.provider1(provider2)
    validatey.client1(client1)


    return User.create({

        name, email, username, password, commercial1, commercial2, provider1, provider2, client1
    })

        // name, email, username, password

        .catch(error => {
            if (error.code === 11000) throw new DuplicityError('user already exists')

            throw new SystemError(error.message)
        })
}

export default registerUser