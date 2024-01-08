import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthProvider";

const Chats = () => {
    const [userChats, setUserChats] = useState([]);
    const { getCurrentLoggedUser } = useAuth();

    useEffect(() => {
        const userId = getCurrentLoggedUser()._id;
    
        fetch('http://localhost:3030/chat/userChats', {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId: userId
            })
        })
        .then(response => response.json())
        .then(chats => setUserChats(chats))
        .catch(e => console.log(e.message));
    }, []);
    
    return (
        <div className="chats">
            {userChats.length <= 0 && 
                <span>No chats at the moment.</span>
            }
            {userChats.length > 0 &&
                userChats.map(chat => (
                    <div className="userChat" key={chat._id}>
                        <img src={chat.imageUrl} alt="" />
                        <div className="userChatInfo">
                            <span>Jane</span>
                            <p>Hello</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
    
}

export default Chats;