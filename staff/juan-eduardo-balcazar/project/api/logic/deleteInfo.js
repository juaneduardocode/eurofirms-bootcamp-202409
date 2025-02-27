import { User, Info } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError, OwnershipError } = errors

function deleteInfo(userId, infoIdId) {
    validate.userId(userId)
    validate.infoId(infoId)

    return Promise.all([
        User.findById(userId).lean(),
        Info.findById(infoId).lean()
    ])
        .catch(error => { throw new SystemError(error.message) })
        .then(userAndInfo => {
            const [user, info] = userAndInfo

            if (!user) throw new NotFoundError('user not found')
            if (!info) throw new NotFoundError('info not found')

            if (info.author.toString() !== userId) throw new OwnershipError('user is not author of info')

            return Info.deleteOne({ _id: info._id })
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(_ => { })
}

export default deleteInfo