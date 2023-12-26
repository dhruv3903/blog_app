import { useEffect, useState } from "react"

function Blogs() {


    const [blogData, setBlogData] = useState([])
    useEffect(() => {
        fetch('/api/allblogs').then((response) => { return response.json() }).then((data) => {
            if (data.status === 200) {
                setBlogData(data.apiData)
            } else {
                console.log(data.message)
            }
        })
    }, [])
    return (
        <section id="blog">
            <h2 className="text-center mt-4">You can see all blogs here</h2>
            {blogData.map((result, tt) => (
                <div className="container" key={result._id}>
                    <div className="row text-center">
                        <div className="col-md-12">
                            <h3>{result.heading}</h3>
                            <p>{result.content}</p>
                            <p>Posted Date:{result.postedDate}</p>
                            <h5>Posted By:{result.username}</h5>

                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Blogs;