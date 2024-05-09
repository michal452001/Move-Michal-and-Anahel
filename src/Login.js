import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from "./header";
import Footer from "./footer";
import './Login.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:9124/login?username=${username}&password=${password}`);
            if (response.data === true) {
                navigate('/home');
            } else {
                setError('Invalid username or password, please try again');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('Server error');
        }
    };

    return (
        <div className="main-container"> {/* Updated main container */}
            <Header/>
            <div className="body">
                <div className="grey">
                    <hr className="Login"></hr>
                    <h3>Login to the personal area:</h3>
                    <form onSubmit={handleLogin}>
                        <label>Username:
                            <input className="" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </label>
                        <br/>
                        <label>PassWord:
                            <input className="" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </label>
                        <br/>
                        <button className="btn_enter" type="submit">login</button>
                    </form>
                    {error && <div className="error-message">{error}</div>}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default LoginPage;
