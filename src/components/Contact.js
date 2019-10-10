import React from 'react';
import './Contact.css';

const Contact = props => (
    <div class="Contact">
        <img className="avatar" src = {props.avatar}/>
        <div>
            <h3 className="name">{props.name}</h3>
                <div className="status">
                   <div className = {props.online ? 'status-online' : 'status-offline'}></div>
                    <p className = 'status-text'> {props.online ? "Online" : "Offline"}</p>               
                </div>
        </div>
    </div>
)

export default Contact


                        