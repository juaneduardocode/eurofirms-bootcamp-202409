import { errors } from 'com'

const { ValidationError, SystemError, NotFoundError, OwnershipError } = errors

import deleteInfo from '../logic/deleteInfo'

function Info(props) {
    console.log('Info -> render')

    const info = props.info

    const handleDeleteClick = () => {
        if (confirm('Delete info ?'))
            try {
                deleteInfo(info.id)
                    .then(() => props.onDeleted())
                    .catch(error => {
                        if (error instanceof NotFoundError)
                            alert(error.message)
                        else if (error instanceof OwnershipError)
                            alert(error.message)
                        else if (error instanceof SystemError)
                            alert('sorry, there was a problem. try again later.')

                        console.error(error)
                    })
            } catch (error) {
                if (error instanceof ValidationError)
                    alert(error.message)
                else
                    alert('sorry, there was a problem. try again later.')

                console.error(error)
            }
    }

    return <article className="bg-blue p-2 my-4">
        <h3 className="font-bold">{info.author}</h3>

        <div className="flex justify-center">
            {/* <img src={info.text} /> */}

            <p>{info.text}</p> </div>


        <div className="flex justify-between">
            <time className="text-xs">{new Date(info.date).toDateString()}</time>

            {info.own && <button type="button" onClick={handleDeleteClick}>🗑️</button>}
        </div>
    </article>
}

export default Info