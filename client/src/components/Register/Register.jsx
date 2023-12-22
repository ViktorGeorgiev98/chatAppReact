import { useState } from "react";


const Register = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const displayName = formData.get("displayName");
        const email = formData.get("email");
        const password = formData.get("password");
        const imageUrl = formData.get("imageUrl");
        console.log({displayName, email, password, imageUrl})
        try {
            const response = await fetch("http://localhost:3030/users/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({displayName, email, password, imageUrl})

            })

            if (response.ok) {
                const newUser = await response.json();
                console.log({newUser});
            } else {
                throw new Error(response.statusText);
            }
        } catch(e) {
            console.log(e.message);
            return alert(e.message);
        }
    }
    
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">React chat app</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="displayName" placeholder="display name" onChange={(e) => setDisplayName(e.currentTarget.value)} />
                    <input type="email" name="email" placeholder="email" onChange={(e) => setEmail(e.currentTarget.value)} />
                    <input type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.currentTarget.value)} />
                    <input type="text" name="imageUrl" id="image" placeholder="Add an avatar" onChange={(e) => setImageUrl(e.currentTarget.value)} />
                    <label htmlFor="image">
                        {/* <img src="https://www.shareicon.net/data/512x512/2016/06/30/788846_add_512x512.png" alt=""></img> */}
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