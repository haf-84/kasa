import React, {useState} from 'react';

function Collapse({title, children}){
    const [isCollapsed,setIsCollapsed]=useState(true);

    const toggleCollapse=()=>{
        setIsCollapsed(!isCollapsed);
    }
    
    return(
        <div className='collapse'>
            <div className='collapse-header' onClick={toggleCollapse}>
                <h2>{title} <i>{isCollapsed ? '<FontAwesomeIcon icon="fa-solid fa-angle-down" />': '<FontAwesomeIcon icon="fa-solid fa-angle-down" />'}</i> </h2>
            </div>
            {!isCollapsed && <div className='collapse-content'>{children}</div>}
        </div>
    );
}
export default Collapse