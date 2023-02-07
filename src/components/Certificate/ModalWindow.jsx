import React from "react";
import './ModalWindow.css';


const Modal = ({active, setActive, children}) => {
    return(
        <div className={active ? 'modalWindows active' : 'modalWindows'} onClick={() => setActive(false)}>
            <div className='imgModel' onClick={e => e.stopPropagation()}>
                {children}
            </div>

        </div>

    )
}

export default Modal;