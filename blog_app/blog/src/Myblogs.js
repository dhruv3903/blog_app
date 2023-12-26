import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Contextapi } from "./Contextapi";

function Myblogs() {
    let navigate = useNavigate()

    const [blogData, setBlogData] = useState([])
    const { loginname } = useContext(Contextapi)
    const [message, setMessage] = useState('')
    if (!loginname) {
        navigate('/')
    }
    useEffect(() => {
        fetch(`/api/myblogs/${loginname}`).then((response) => { return response.json() }).then((data) => {
            if (data.status === 200) {
                setBlogData(data.apiData)
            } else {
                console.log(data.message)


            }
        })
    }, [])
    function handleDelete(e, id) {
        console.log(id)
        fetch(`/api/deleteblog/${id}`, { method: 'DELETE' }).then((response) => { return response.json() }).then((data) => {
            if (data.status === 200) {
                setMessage(data.message)
            } else {
                console.log(data.message)
            }
        })
    }

    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <h2 className="text-center">Here you can see all your blogs</h2>
                    <div className="col-md-6">
                        <Link to='/addblog'><button className="btn btn-success form-control">Add New Blog Here</button></Link>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <table className="table table-hover">
                            <thead>
                                <p>{message}</p>
                                <tr>
                                    <th>S.NO</th>
                                    <th>Blog Title</th>
                                    <th>Blog Content</th>
                                    <th>Posted Date</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blogData.map((result, tt) => (
                                    <tr>
                                        <td>{tt + 1}</td>
                                        <td>{result.heading}</td>
                                        <td>{result.content}</td>
                                        <td>{result.postedDate}</td>
                                        <td><button className="btn btn-danger" onClick={(e) => { handleDelete(e, result._id) }}>Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </section>
    );
}

export default Myblogs;