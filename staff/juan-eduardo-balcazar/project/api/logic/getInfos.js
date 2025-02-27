import { User, Info } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function getInfos(userId) {
    validate.userId(userId)

    return Promise.all([
        User.findById(userId).lean(),
        Info.find({}, '-__v').populate('author', 'username').sort({ date: -1 }).lean()
    ])
        .catch(error => { throw new SystemError(error.message) })
        .then(userAndInfos => {
            const [user, infos] = userAndInfos

            if (!user) throw new NotFoundError('user not found')

            infos.forEach(info => {
                info.id = info._id.toString()
                delete info._id

                if (info.author._id) {
                    info.author.id = info.author._id.toString()

                    delete info.author._id
                }

                info.own = info.author.id === userId

                info.author = info.author.username
            })

            return infos
        })
}

export default getInfos
