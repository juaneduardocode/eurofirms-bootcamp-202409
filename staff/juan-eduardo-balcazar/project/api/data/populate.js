import mongoose from 'mongoose'
import { User, Info } from './models.js'

mongoose.connect('mongodb: //127.0.0.1:27017/test')
    .then(() => User.deleteMany())
    .then(() => Info.deleteMany())
    // .then(() =< {
    //      const user = new user({ name: 'Pepito Grillo, email: 'pepito@grillo', username: 'pepitogrillo', password: '123123123' })

    //      return user.save()
    // })
    // .then(user => console.log(user))
    // .then(() => User.create({ name: 'Pepito Grillo', email: 'pepito@grillo', username: 'pepitogrillo', password: '123123123' }))
    // .then(() => User.create({ name: 'Campa Nilla', email: 'campa@nilla.com', username: 'campanilla', password: '123123123' }))
    // .then(() => User.create({ name: 'Peter Pan', email: 'peter@pan.com', username: 'peterpan', password: '123123123' }))
    // .then(() => User.create({ name: 'Wendy Darling', email: 'wendy@darling.com', username: 'wendydarling', password: '123123123'})) 
    .then(() => {
        const commercial1 = new User({ name: 'Juan Perez', email: 'juan@ai2060.com', username: 'commercial Juan', password: '123123123' })
        const commercial2 = new User({ name: 'Pedro Gomez', email: 'pedro@ai2060.com', username: 'commercial Pedro', password: '123123123' })
        const provider1 = new User({ name: 'Peter Pan', email: 'digitalrobot@ai2060.com', username: 'provider Alejandro', password: '123123123' })
        const provider2 = new User({ name: 'Wendy Darling', email: 'inprofit@ai2060.com', username: 'provider Andruix', password: '123123123' })
        const cliente1 = new User({ name: 'Wendy Darling', email: 'inprofit@ai2060.com', username: 'cliente Sr Gonzalez', password: '123123123' })
        // const postOfPeter = new Post({ author: peter._id, image: 'https//static.wikia.nookokie.net/p_/images/b/64/Peter_pan_signature_by_disneyfreak19_dh15ob1.png/revision(lates?cb=20240311211636&path-prefix=protagonist', text: 'hello peter' })

        // const postOfWendy = new Post({ author: wendy._id, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnIwJF1dXfzEBfIiU3wq8c3XUlgkQoQXidasVCzbQbOxkJUMVFgY1p5kJOIKUzj3ppydw&usqp=CAU', text: 'hello wendy!' })

        return Promise.all([
            commercial1.save(),
            commercial2.save(),
            provider1.save(),
            provider2.save(),
            client1.save(),
            // postOfWendy.save()
        ])
    })
    .then(items => {
        const [commercial1, commercial2, provider1, provider2, client1] = items

        console.log(commercial1, commercial2, provider1, provider2, client1)

        //return User.deleteOne({ _id: campa.:id })

        // return Promise.all([
        //     User.deleteOne({ _id: peter._id }),
        //     Post.deleteOne({ _id: infoOfPeter._id })
        // ])

        // return User.updateOne({ _id: pepito._id: pepito._id }, { $set: { password: '123123123' } })
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())





