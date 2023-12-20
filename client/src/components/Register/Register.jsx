import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


const Register = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        })


    }
    
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">React chat app</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="display name" onChange={(e) => setDisplayName(e.currentTarget.value)} />
                    <input type="email" placeholder="email" onChange={(e) => setEmail(e.currentTarget.value)} />
                    <input type="password" placeholder="password" onChange={(e) => setPassword(e.currentTarget.value)} />
                    <input style={{display: "none"}} type="file" id="file" />
                    <label htmlFor="file">
                        <img src="https://www.shareicon.net/data/512x512/2016/06/30/788846_add_512x512.png" alt=""></img>
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>You do have an account ? Login</p>
            </div>

        </div>
    )
}

export default Register;