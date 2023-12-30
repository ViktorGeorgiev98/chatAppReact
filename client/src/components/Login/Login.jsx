import { useState } from "react";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submitLoginHandler(e) {
        e.preventDefault();
    }

    
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">React chat app</span>
                <span className="title">Login</span>
                <form onSubmit={submitLoginHandler}>
                    <input onChange={(e) => setEmail(e.currentTarget.value)} type="email" placeholder="email" />
                    <input onChange={(e) => setPassword(e.currentTarget.value)} type="password" placeholder="password" />
                    <button>Sign up</button>
                </form>
                <p>You don't have an account ? Register</p>
            </div>

        </div>
    )
}

export default Login;