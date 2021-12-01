import React from "react";
import Content from './content/Content';
import SideContent from './content/SideContent'
import '../App.css'

const Contents = () => {
    return (
        <div className="contents">
            <Content />
            <SideContent />
        </div>
    )
}

export default Contents;
