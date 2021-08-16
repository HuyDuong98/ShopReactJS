import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router, Redirect, useHistory,
} from "react-router-dom";


// import {createBrowserHistory} from 'history'

// let browserHistory = createBrowserHistory()

export let Context = React.createContext()
function Provider({ children }) {
    let [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')) || {
        login: false,
        user: null,
        error: null,
    })

    useEffect(() => {
        localStorage.setItem('auth', JSON.stringify(auth))
    }, [auth])

    let history = useHistory()

    function handleLogin(res) {
        console.log("handleLogin", res)
        setAuth({
            login: res.status,
            user: {
                name: res.name,
                email: res.username
            }
        })
        localStorage.setItem("token", res.token)

        history.push("/")
    }

    function hadleLogout() {
        setAuth({
            login: false,
            user: null
        })

        localStorage.removeItem("token")
    }

    return (
        <Context.Provider value={{ ...auth, handleLogin, hadleLogout }}>
                {children}
        </Context.Provider>
    );
}

export default function AppProvider({ children }) {
    return <Router>
        <Provider>
            {children}
        </Provider>
    </Router>
}