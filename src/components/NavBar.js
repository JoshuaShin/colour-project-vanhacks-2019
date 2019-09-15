import React from "react";
import Logo from './logo.js'
import CreateMessage from "./CreateMessage";


class NavBar extends React.Component {
    navBarStyle = {
        position: 'fixed',
        left: '0px',
        height: '65px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'right',
        padding: '10px',
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.01) 100%)',
        zIndex: '98',
    };

    render() {

        return (
            <div style={this.navBarStyle} className={'navBar'}>
                <Logo/>
                <CreateMessage />

            </div>

        )
    }
}

export default NavBar


