import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../assets/css/Sidebar.css';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);  // 사이드바의 열림/닫힘 상태

    const toggleSidebar = () => setIsOpen(!isOpen);  // 사이드바 토글 함수
    const navigate = useNavigate();
    
    // Function to handle navigation
    function handleNavigation(targetRoute) {
        setIsOpen(false);//메뉴 선택시 사이드바 닫음
        navigate(targetRoute);// 메뉴 이동
    }

    return (
        <div className="HBox">
            <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <ul>
	                <li onClick={() => handleNavigation('/')}>Home</li>
	                <li onClick={() => handleNavigation('/page1')}>page1</li>
	                <li onClick={() => handleNavigation('/page2')}>page2</li>
                </ul>
            </div>
            <div className={`toggle-button ${isOpen ? 'open' : 'closed'}`}
                 onClick={toggleSidebar}>
                    {isOpen ? '<' : '>'}
            </div>
        </div>
    );
}

export default Sidebar;
