import React from 'react';

const styles = {
    h1: {
        color: 'red',
    },
}

const {...s} = styles;

const Header = () =>{
    return (
        <div className="header-container">
            <h1 style={s.h1}>Welcome!</h1>
        </div>
    )
}


export default Header