import React from "react";
import Logo from './logo.js'


class NavBar extends React.Component {
    navBarStyle = {
        position: 'fixed',
        left: '0px',
        height: '65px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 100%)',
        zIndex: '98',
    };

    render() {
        function handleClickk(e) {
            e.preventDefault();
            console.log('The link was clicked.');
        }
        return (
            <div style={this.navBarStyle} className={'navBar'}>
                <Logo/>
                <a className={'addButton'} href={{href:'#'}} onClick={handleClickk}> + </a>
            </div>

        )
    }
}

export default NavBar


