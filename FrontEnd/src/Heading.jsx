import React from "react";
import { Link } from "react-router-dom";

class Heading extends React.Component {
    render() {
        return (
            <header>
                <center>
                    <h1 style={{ fontFamily: "Pacifico", color: "black" }}>Edgistify</h1>
                    <Link to="/">Home</Link>
                    <span style={{ marginLeft: '2rem' }}>
                        {this.props.loggedIn ? (<Link to="/login">Logout</Link>) : (<Link to="/login">Login</Link>)}
                    </span>
                </center>
                {/* <div style={{width: '100%'}}> */}
                {/* </div> */}
                {/* style={{fontStyle: 'normal'}}>Login</p> */}
            </header>
        );
    }
}
export default Heading;