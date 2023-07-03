import {useState} from 'react';

function Collapse({title, children}){
    const [isCollapsed,setIsCollapsed]=useState(true);
    const [isVisible, setIsVisible] = useState(false);

    const toggleCollapse=()=>{
        setIsCollapsed(!isCollapsed);
        setIsVisible(!isVisible);
    }
    
    return(
        <div className={`collapse ${isCollapsed ? 'collapsed' : 'expanded'}`}>
            <div className='collapse-header'onClick={toggleCollapse}>
                <h2>{title}</h2>
                <div className='toggle-icon'>
                    <i className={`fa-solid ${isCollapsed ? 'fa-angle-up': 'fa-angle-down'}`}/>
                </div>
            </div>
            {!isCollapsed && <div className={`collapse-content ${isVisible ? 'visible':'invisible'}`}>{children}</div>}
        </div>
    );
}
export default Collapse