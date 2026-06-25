import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './AuthContext'
import axios from 'axios'

export const userDataContext = createContext()

function UserContext({ children }) {
    let [userData, setUserData] = useState(null);
    let { serverUrl } = useContext(authDataContext)

    const getCurrentUser = async () => {
        try {
            const token = localStorage.getItem("token")
            // Don't call API if no token stored
            if (!token) {
                setUserData(null)
                return
            }
            let result = await axios.get(serverUrl + "/api/user/getcurrentuser", {
                headers: {
                    Authorization: `Bearer ${token}`  // send token in header
                }
            })
            setUserData(result.data)
            console.log(result.data)
        } catch (error) {
            setUserData(null)
            console.log(error)
        }
    }

    useEffect(() => {
        getCurrentUser()
    }, [])

    let value = {
        userData, setUserData, getCurrentUser
    }

    return (
        <div>
            <userDataContext.Provider value={value}>
                {children}
            </userDataContext.Provider>
        </div>
    )
}

export default UserContext
