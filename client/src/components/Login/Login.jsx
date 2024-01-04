import { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    async function submitLoginHandler(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        console.log({email, password});
        
       
        try {
            if (!email || !password) {
                throw new Error("Email and password are mandatory!");
            }
            const response = await fetch('http://localhost:3030/users/login', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email, password})
            });

            if (response.ok) {
                const userAndToken = await response.json();
                console.log({userAndToken});
                await login(userAndToken.user, userAndToken.token);

            } else {
                const errorMessage = await response.text();
                throw new Error(errorMessage);
            }
        } catch(e) {
            console.log(e.message);
            return alert(e.message);
        }
        navigate('/home');
      
    }

    
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">React chat app</span>
                <span className="title">Login</span>
                <form onSubmit={submitLoginHandler}>
                    <input onChange={(e) => setEmail(e.currentTarget.value)} type="email" placeholder="email" name="email" />
                    <input onChange={(e) => setPassword(e.currentTarget.value)} type="password" placeholder="password" name="password" />
                    <button>Sign up</button>
                </form>
                <p>You don't have an account ?
                    <Link to="/register">Register</Link>
                </p>
            </div>

        </div>
    )
}

export default Login;