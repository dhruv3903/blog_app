import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <section id='dashboard'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'> <h1 className="mb-5">Welcome to our Blogging site</h1>
                        <p className="mb-4">
                            You can write here your real life experiences as an blog to show peoples who are connected with us
                        </p>
                        <Link to='/addblog'><button className='btn btn-success'>Click here to add your blog</button></Link></div>
                    <div className='col-md-4'></div>
                </div>
            </div>

        </section>
    );
}

export default Dashboard;