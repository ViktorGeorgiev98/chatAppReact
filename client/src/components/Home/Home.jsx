import Chat from "./Chat";
import Chats from "./Chats";
import Sidebar from "./Sidebar";

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default Home;