import { errors } from 'com'

const { NotFoundError, SystemError, ValidationError } = errors

import { useState, useEffect } from 'react'

import Info from './Info'

import getUserName from '../logic/getUserName'
import getInfos from '../logic/getInfos'
import logoutUser from '../logic/logoutUser'

function Home(props) {
    console.log('Home -> render')

    const [name, setName] = useState(null)
    const [infos, setInfos] = useState([])

    console.log('Home -> state: name = ' + name)

    useEffect(() => {
        try {
            getUserName()
                .then(name => setName(name))
                .catch(error => {
                    if (error instanceof NotFoundError)
                        alert(error.message)
                    else if (error instanceof SystemError)
                        alert('sorry, there was a problem. try again later.')

                    console.error(error)
                })

            getInfos()
                .then(infos => setInfos(infos))
                .catch(error => {
                    if (error instanceof NotFoundError)
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
    }, [])

    const handleLogoutClick = () => {
        try {
            logoutUser()

            props.onLogout()
        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    }

    const handleInfoDeleted = () => {
        try {
            getInfos()
                .then(infos => setInfos(infos))
                .catch(error => {
                    if (error instanceof NotFoundError)
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

            console.log(error)
        }
    }

    const handleCreateInfoClick = () => props.onCreateInfo()

    return <>
        <header className="fixed w-full top-0 flex justify-between items-center bg-black text-white px-2 h-8">
            {name && <h3 className="font-bold">{name}</h3>}

            <button type="button" onClick={handleLogoutClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>
            </button>
        </header>

        {<main className="my-8 bg-gray-300">
            {infos.map(info => <Info key={info.id} info={info} onDeleted={handleInfoDeleted} />)}
        </main>}

        <footer className="bg-blue text-white fixed bottom-0 w-full flex justify-center items-center h-8">
            <button className="leading-3 rounded h-4 p-1 flex items-center" type="button" onClick={handleCreateInfoClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

            </button>
        </footer>
    </>
}

export default Home