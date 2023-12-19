const Input = () => {
    return (
        <div className="input">
            <input type="text" placeholder="Type something..."></input>
            <div className="send">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Ic_attach_file_48px.svg/1024px-Ic_attach_file_48px.svg.png" alt="" />
                <input type="file" style={{display: "none"}} id="file" />
                <label htmlFor="file">
                    <img src="https://www.creativefabrica.com/wp-content/uploads/2021/08/07/Image-Gallery-Icon-Graphics-15590538-1-580x386.jpg" alt="" />
                </label>
                <button>
                    Send
                </button>
            </div>
        </div>
    )
}

export default Input;