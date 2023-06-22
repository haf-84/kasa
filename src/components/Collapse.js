import {useState} from 'react';

function Collapse({title, children}){
    const [isCollapsed,setIsCollapsed]=useState(true);

    const toggleCollapse=()=>{
        setIsCollapsed(!isCollapsed);
    }
    
    return(
        <div className='collapse'>
            <div className='collapse-header'>
                <h2>{title}</h2>
                <div  onClick={toggleCollapse}>
                    {isCollapsed ? <i className="fa-solid fa-angle-down"/>: <i className="fa-solid fa-angle-up"/>}
                </div>
            </div>
            {!isCollapsed && <div className='collapse-content'>{children}</div>}
        </div>
    );
}
export default Collapse