import { errors } from 'com'

const { CredentialsError, SystemError, ValidationError } = errors

import loginUser from '../logic/loginUser'

function Login(props) {

    console.log('Login -> render')

    const handleLoginSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        try {
            loginUser(username, password)
                .then(() => props.onLoginSuccess())
                .catch(error => {
                    if (error instanceof CredentialsError)
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

    const handleRegisterClick = event => {
        event.preventDefault()

        props.onRegisterClick()
    }


    return <main>

        <div className="relative w-96 m-3 cursor-pointer border-2 shadow-lg rounded-xl items-center" >

            <div className="flex h-28 bg-blue-700 rounded-xl items-center justify-center" >
                <h1 className="absolute mx-auto text-center right text-2xl text-white">
                    Login
                </h1>
            </div >

            <div className="flex flex-wrap items-center m-2">
                <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1">

                    <form onSubmit={handleLoginSubmit}>
                        <label htmlFor="username">Username</label>
                        <input className="border-2 border-blue-300 px-2 text-center" type="text" id="username" />

                        <div className="text-center">
                            <label htmlFor="password">Password</label>
                            <input className="border-2 border-blue-300 px-2 text-center" type="password" id="password" />
                            <button className="bg-blue-300 text-white text-center" type="submit">Login</button>
                        </div>
                    </form>

                    {/* <p></p>

                    <a className="underline" href="" onClick={handleRegisterClick}>Register</a> */}
                </span>

            </div>
        </div>

    </main>
}



export default Login