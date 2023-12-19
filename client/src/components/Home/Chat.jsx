import Input from "./Input";
import Messages from "./Messages";

const Chat = () => {
   return (
    <div className="chat">
        <div className="chatInfo">
            <span>Jane</span>
            <div className="chatIcons">
                <img src="https://static-00.iconduck.com/assets.00/camera-circle-icon-512x512-io3lniyk.png" alt="" />
                <img src="https://cdn3.iconfinder.com/data/icons/eightyshades/512/14_Add-512.png" alt="" />
                <img src="https://cdn-icons-png.flaticon.com/512/7066/7066144.png" alt="" />
            </div>
           
        </div>
        <Messages />
        <Input />
    </div>
   )
}

export default Chat;