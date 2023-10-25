import React from 'react'

const Modal = ({ isOpen }) => {
    return (
        <div className="modal">{isOpen ?"Modal is Open" : 'Modal is Closed'}</div>
    )
}

export default Modal
