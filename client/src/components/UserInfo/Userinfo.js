import React from 'react';
import "./Userinfo.scss"
const Userinfo = () => {
    return <form className="userInfoContainer">
        <label>Name:</label>
        <input type="text"></input>
        <label>Phone num:</label>
        <input type="text"></input>
        <label>City:</label>
        <input type="text"></input>
        <label>Address:</label>
        <input type="text"></input>
        <button type="submit">Change</button>
    </form>;
};

export default Userinfo;
