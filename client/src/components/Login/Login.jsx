

const Login = () => {
    
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">React chat app</span>
                <span className="title">Login</span>
                <form>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button>Sign up</button>
                </form>
                <p>You don't have an account ? Register</p>
            </div>

        </div>
    )
}

export default Login;