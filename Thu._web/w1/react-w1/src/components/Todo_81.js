import React from 'react'
import {useState} from'react';
import Modal_81 from './Modal_81';
import Backdrop_81 from './Backdrop_81';
function Todo(props) {
    const [showModal, setShowModal] =useState();

    function showModalHandler(){
        setShowModal(true);
    }
    function closeModalHandler(){
        setShowModal(false);
    }

    return (
        <div>
            <div className="card">
                <h2>{props.text}</h2>
                <div className="actions">
                    <button className="btn" onClick={showModalHandler}>Delete</button>
                </div>
         </div>
        {showModal && <Backdrop_81 />}
        {showModal && <Modal_81 text='Are u sure?' onClose={closeModalHandler}></Modal_81>}
        </div>
    )
}

export default Todo;
