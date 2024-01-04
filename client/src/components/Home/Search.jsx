import { useState } from "react";

const Search = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(false);

    const handleSearch = async () => {
        try {
            const response = await fetch('');
        } catch(e) {
            console.log(e.message);
            return alert(e.message);
        }   
    }

    const handleKeydown = async (e) => {
        e.preventDefault();
        e.code === 'Enter' && handleSearch();
    }
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="find a user" onKeyDown={handleKeydown} onChange={(e) => setUsername(e.currentTarget.value)} />
            </div>
            <div className="userChat">
                <img src="https://www.mypokecard.com/en/Gallery/my/galery/m3dsSJwTlM8W.jpg" alt="" />
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>

           
            
        </div>
    )
}

export default Search;