import { useState } from "react";

const Search = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(false);
    const [foundUser, setFoundUser] = useState(false);

    const handleSearch = async (e) => {
        // e.preventDefault();
        try {
            
            const response = await fetch('http://localhost:3030/users/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username
                })
            });

            if (response.status === 200) {
                const foundUser = await response.json();
                setUser(foundUser);
                setFoundUser(true);
                console.log({user});
            } else if (response.status === 204) {
                setFoundUser("Not found");
                setUser("");
                console.log("No user found");
            } else {
                setUser("");
                throw new Error(response.statusMessage);
            }
        } catch(e) {
            console.log(e.message);
            return alert(e.message);
        }   
    }

    const handleSelect = (e) => {
        e.preventDefault();
    }

    
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="find a user" 
                 onKeyDown={(e) => {
                    if (e.key === "Enter")
                        handleSearch();
                    }}
                onChange={(e) => setUsername(e.target.value)} 
                />
            </div>
            {!user && foundUser === 'Not found' &&
                <span>No user found!</span>
            }
           {user && 
             <div className="userChat" onClick={handleSelect}>
                <img src={user.imageUrl} alt="" />
                <div className="userChatInfo">
                    <span>{user.displayName}</span>
                </div>
            </div>
           }

           
            
        </div>
    )
}

export default Search;