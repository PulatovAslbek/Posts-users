import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Users.scss"


function Users() {

    const [state, setState] = useState([])

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setState(data))
    }, [])

    return (
        <>
            <section className="users">
                <div className="container">
                    <ul className="ul">
                        {
                            state.map((user) => {
                                return (
                                    <li className="user-box" key={user.id}>
                                        <div className="mini-box">
                                            <div className="user-name">{user.name}</div>
                                            <div className="user-email">{user.email}</div>
                                            <div className="user-phone">{user.phone}</div>
                                        </div>
                                        <Link className="user-btn" to={`/profile/${user.id}`}>post and Comment</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Users;