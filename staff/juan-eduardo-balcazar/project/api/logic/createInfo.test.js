import mongoose from 'mongoose'
import createInfo from './createInfo.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            return createInfo('6741f97a50976d72be46fe89', 'https://cdn-icons-png.flaticon.com/512/5986/5986331.png', 'hola mundo')
                .then(() => console.log('info created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())