import mongoose from 'mongoose'
import getInfos from './getInfos.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            return getInfos('6741f97a50976d72be46fe89')
                .then(infos => console.log(infos))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())