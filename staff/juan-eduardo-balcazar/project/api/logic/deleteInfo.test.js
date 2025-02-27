import mongoose from 'mongoose'
import deleteInfo from './deleteInfo.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            return deleteInfo('6741f97a50976d72be46fe89', '6742012bc981b1956d309476')
                .then(() => console.log('info deleted'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())