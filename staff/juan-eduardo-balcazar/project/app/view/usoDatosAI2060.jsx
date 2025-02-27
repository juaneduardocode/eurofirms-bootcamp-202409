function Welcome(props) {
    console.log('Welcome -> render')

    const handleRegisterClick = event => {
        event.preventDefault()

        props.onRegisterClick()
    }

    const handleLoginClick = event => {
        event.preventDefault()

        props.onLoginjAI2060Click()
    }

    return <main>

        {
            (
                <div className="relative w-96 m-3 cursor-pointer border-2 shadow-lg rounded-xl items-center">

                    <div className="flex h-28 bg-blue-700 rounded-xl items-center justify-center">
                        <h1 className="absolute mx-auto text-center right text-2xl text-white">
                            What do you wich to do with date
                        </h1>
                    </div>


                    <div className="p-2 border-b-2 text-center text -2x1">
                        <h6>
                            Select the corresponding choose
                        </h6>
                        <div className="flex flex-wrap items-center rounded-b-xl border-t-2 bg-white button left">
                            <button className="border rounded-2xl bg-blue-600 text-white text-center shadow-sm p-1 px-2 m-2">


                                {/* <a href="" onClick={handleRegisterClick}>Register</a> </button>
                            <button className="border rounded-2xl bg-blue-600 text-white text-center shadow-sm p-1 px-2 m-2"> */}


                                <a href="" onClick={handleLoginClick}>Login</a>
                                {/* <a href="" onClick={handleLoginClick}>Login1</a>
                                <a href="" onClick={handleLoginClick}>Login2</a>
                                <a href="" onClick={handleLoginClick}>Login3</a> */}

                            </button >  </div >

                    </div>
                </div>

            )
        };

    </main>

};

export default usoDatosAI2060