import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Profile.scss'

function Profile() {

    const [state, setState] = useState([])
    const [comments, setComments] = useState([])

    const { id } = useParams()


    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setState(data))
    }, [])
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])


    return (
        <>

            <section className="profile">
                <div className="container">

                    <ul>
                        {
                            state.filter(post => post.userId === Number(id)).map((post) => {
                                return (
                                    <details>
                                        <summary>{post.body}</summary>
                                        {
                                            comments.filter(com => com.postId === post.id).map(com => {
                                                return (
                                                    <li key={com.id}>{com.body}</li>
                                                )
                                            })
                                        }
                                    </details>
                                )
                            })

                        }

                    </ul>
                </div>

            </section>
        </>
    )
}

export default Profile;