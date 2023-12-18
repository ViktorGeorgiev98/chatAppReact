import Chat from "./Chat";
import Chats from "./Chats";
import NavBar from "./NavBar";
import Search from "./Search";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <NavBar />
            <Search />
            <Chat />
        </div>
    )
}

export default Sidebar;