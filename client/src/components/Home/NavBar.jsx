const NavBar = () => {
    return (
        <div className="navbar">
            <span className="logo">React chat app</span>
            <div className="user">
                <img src="https://www.mypokecard.com/en/Gallery/my/galery/m3dsSJwTlM8W.jpg" alt="" />
                <span>John</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default NavBar;