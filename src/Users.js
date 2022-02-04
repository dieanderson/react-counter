import React, {useState, useEffect} from "react"

import Loading from "./Loading"

const Users = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [users, setUsers] = useState([])

    useEffect( () => {
        setIsLoading(true)

        fetch('https://jsonplaceholder.typicode.com/users')
        .then( response => response.json())
        .then( data => {
            setUsers(data)
            setIsLoading(false)
        })
    }, [])

    return(
        <>
            <Loading visible={isLoading} />
            {
                users.map( user => {
                    return(
                        <div>
                            <b>Id: </b><span>{user.id}</span><br/>
                            <b>Nome: </b><span>{user.name}</span><br/>
                            <b>E-mail: </b><span>{user.email}</span><br/>
                            <b>Endereço: </b><span>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</span><br/>
                            <b>Telefone: </b><span>{user.phone}</span><br/>
                            <b>Site: </b><span>{user.website}</span>
                            <hr/>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Users