import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <span className="logo">React chat app</span>
            <div className="user">
                <img src="https://www.mypokecard.com/en/Gallery/my/galery/m3dsSJwTlM8W.jpg" alt="" />
                <span>John</span>
                <Link to="/logout">
                    <button>Logout</button>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;