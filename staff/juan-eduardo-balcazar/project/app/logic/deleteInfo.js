import { validate, errors } from 'com'

const { SystemError } = errors

function deleteInfo(infoId) {
    validate.infoId(infoId)

    return fetch(`${import.meta.env.VITE_API_URL}/infos/${infoId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`
        }
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(response => {
            const status = response.status

            if (status === 204) return

            return response.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const error = body.error
                    const message = body.message

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default deleteInfo