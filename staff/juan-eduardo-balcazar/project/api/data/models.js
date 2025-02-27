import { Schema, model, Types } from 'mongoose'


// const ObjectId = types.ObjectId
const { ObjectId } = Types

const user = new Schema({
    // id (uuid)

    email: {
        type: String,
        required: true,
        minLength: 6,
        unique: true
    },

    username: {
        type: String,
        required: true,
        minLength: 1
    },

    phone: {
        type: String,
        required: true,
        minLength: 1
    },

    // username: {
    //     type: String,
    //     required: true,
    //     minLength: 4,
    //     unique: true
    // },
    password: {
        type: String,
        required: true,
        minLength: 8
    },

    role: {
        type: String,
        required: true,
        minLength: 8
    },

    author: {
        type: String,
        required: true,
        minLength: 8
    },

    // User-id

    date: {
        type: String,
        required: true,
        minLength: 8
    },

    status: {
        type: String,
        required: true,
        minLength: 8
    },




})

const info = new Schema({

    // // id (uuid)

    user: {
        type: String,
        required: true,
        minLength: 6,
        unique: true
    },
    // User.id

    email: {
        type: String,
        required: false,
        minLength: 6,
        unique: false
    },

    companyName: {
        type: String,
        required: true,
        minLength: 1
    },

    companyActivity: {
        type: String,
        required: false,
        minLength: 1
    },

    companyPhone: {
        type: String,
        required: true,
        minLength: 1
    },

    otherCompanyName: {
        type: String,
        required: false,
        minLength: 1
    },

    contactName: {
        type: String,
        required: true,
        minLength: 1
    },

    contactPhone: {
        type: String,
        required: true,
        minLength: 1
    },

    contactEmail: {
        type: String,
        required: true,
        minLength: 1
    },

    date: {
        type: String,
        required: true,
        minLength: 1
    },

    description: {
        type: String,
        required: false,
        minLength: 1
    },

    // username: {
    //     type: String,
    //     required: true,
    //     minLength: 4,
    //     unique: true
    // },

    // const post = new Schema({
    //     author: {
    //         type: ObjectId,
    //         required: true,
    //     },
    //     image: {
    //         type: String,
    //         required: true,
    //         maxLength: 1000
    //     },
    //     text: {
    //         type: String,
    //         required: true,
    //         maxLength: 1000
    //     },
    //     date: {
    //         type: Date,
    //         required: true,
    //         default: Date.now
    //     }
    // })

})
const User = model('User', user)
const Info = model('Info', info)

export {
    User,
    Info
}