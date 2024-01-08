import { useEffect, useState } from "react";

const Chats = () => {
    const [chats, setChats] = useState([]);

    useEffect(() => {

    }, []);
    return (
        <div className="chats">
              <div className="userChat">
                <img src="https://www.mypokecard.com/en/Gallery/my/galery/m3dsSJwTlM8W.jpg" alt="" />
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat">
                <img src="https://www.mypokecard.com/en/Gallery/my/galery/m3dsSJwTlM8W.jpg" alt="" />
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat">
                <img src="https://www.mypokecard.com/en/Gallery/my/galery/m3dsSJwTlM8W.jpg" alt="" />
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

export default Chats;