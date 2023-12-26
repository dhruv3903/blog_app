import { useContext, useState } from "react";
import { Contextapi } from "./Contextapi";

function Addblog() {
    const { loginname } = useContext(Contextapi)
    const [heading, setHeading] = useState('')
    const [content, setContent] = useState('')
    const [message, setmessage] = useState('')
    function handleform(e) {
        e.preventDefault()
        const data = { heading, content }
        fetch(`/api/addblog/${loginname}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then((result) => { return result.json() }).then((data) => {
            if (data.status === 201) {
                setmessage(data.message)
            } else {
                setmessage(data.message)
            }
        })
    }
    return (
        <section className='addblog'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <h2 className='mt-5'>You can add your blogs here</h2>
                        <p>{message}</p>
                        <form onSubmit={(e) => { handleform(e) }}>
                            <label>Heading of your Blog</label>
                            <input type='text' className='form-control mt-2 mb-4' placeholder='Heading of blog'
                                value={heading}
                                onChange={(e) => { setHeading(e.target.value) }} />
                            <label>Content of your Blog</label>
                            <textarea className="form-control mt-2" placeholder="Leave your blog here"
                                value={content}
                                onChange={(e) => { setContent(e.target.value) }}></textarea>
                            <button type='submit' className='btn btn-success mt-2 mb-2 form-control'>Submit</button>
                        </form>
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </div>
        </section>
    );
}

export default Addblog;