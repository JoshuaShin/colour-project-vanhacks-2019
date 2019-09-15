import React from "react";

class Logo extends React.Component {

    logoStyle = {
        width: '4.5vh',
        height: '4.5vh',
        borderRadius: '3px',
        backgroundColor: 'white',
        border: 'solid 4px #181010',
        position: 'fixed',
        transition: '0.35s',
        top:'10px',
        left: '200xp',
    };

    render() {
        return (
            <div className={'animate'} style={this.logoStyle} onClick={this.updateColor}>
            </div>
        )
    }
}

export default Logo
