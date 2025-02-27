import { errors } from 'com'

const { DuplicityError, SystemError, ValidationError } = errors

import registerUser from '../logic/registerUser'

function Register(props) {
    console.log('Register -> render')

    const handleRegisterSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value

        try {
            registerUser(name, email, username, password)
                .then(() => props.onRegisterSuccess())
                .catch(error => {
                    if (error instanceof DuplicityError)
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

    const handleLoginClick = event => {
        event.preventDefault()

        props.onLoginClick()
    }

    return <main>

        <div className="relative w-96 m-3 cursor-pointer border-2 shadow-lg rounded-xl items-center">

            <div className="flex h-28 bg-blue-700 rounded-xl items-center justify-center">
                <h1 className="absolute mx-auto text-center right text-2xl text-white">
                    Register
                </h1>
            </div>

            <div className="flex flex-wrap items-center justify-center m-2">
                <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1">
                    <form onSubmit={handleRegisterSubmit}>
                        <div className="text-alignt-left"><label htmlFor="name">Name</label>
                            <input type="text" id="name" /></div>
                        <div className="text-alignt-left"><label htmlFor="email">E-mail</label>
                            <input type="email" id="email" /></div>
                        <div className="text alignt-left"><label htmlFor="username">Username</label>
                            <input type="text" id="username" /></div>
                        <div className="text alignt-left"><label htmlFor="password">Password</label>
                            <input type="password" id="password" /></div>

                        <div className="text alignt-right text-blue"><button type="submit">Register</button></div>
                    </form>

                    <p></p>

                    <a href="" onClick={handleLoginClick}>Login</a> </span>

            </div>
        </div>

    </main>

}


export default Register