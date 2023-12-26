
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Contextapi } from "./Contextapi";


function Header() {
    const navigate = useNavigate()
    const { setloginname, loginname } = useContext(Contextapi)
    function handlelogout(e) {
        setloginname(localStorage.removeItem('username'))
        navigate('/')
    }

    return (
        <>
            {loginname ? //ternary operator
                <section id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h4>Welcome {loginname}</h4>
                            </div>
                            <div className="col-md-8">
                                <button className="btn btn-danger" onClick={(e) => { handlelogout(e) }}>Logout</button>
                                <Link to='/myblogs'><button className="btn btn-danger me-2">My Blogs</button></Link>
                                <Link to='/blogs'><button className="btn btn-danger me-2">All Blogs</button></Link>
                            </div>
                        </div>
                    </div>
                </section>

                : <></>
            }
        </>
    );
}

export default Header;