import { useState } from 'react'

import Welcome from './view/Welcome'
import Login from './view/Login'
import Register from './view/Register'
import Homeaux from './view/Homeaux'
import Home from './view/Home'
import CreateInfo from './view/CreateInfo'
// import CreatePost from './view/CreatePost'
import isUserLoggedIn from './logic/isUserLoggedln'

function App() {
    console.log('App -> render')

    const [view, setView] = useState(isUserLoggedIn() ? 'home' : 'welcome')

    console.log('App -> state: view = ' + view)

    console.log(view, setView)
    return <>
        {view === 'welcome' && <Welcome
            onRegisterClick={() => setView('register')}

            onLoginClick={() => setView('login')}
        />}

        {view === 'register' && <Register
            onHomeauxClick={() => setView('homeaux')}

            onRegisterSuccess={() => setView('register')}
        />}

        {view === 'login' && <Login
            // onRegisterClick={() => setView('register')}

            onHomeauxSuccess={() => setView('homeaux')}
        />}

        {view === 'homeaux' && <Homeaux
            onLogout={() => setView('login')}

            onCreateInfo={() => setView('create-info')}
        />}

        {view === 'create-info' && <CreateInfo
            onCreated={() => setView('homeaux')}
        />}
    </>
}

export default App