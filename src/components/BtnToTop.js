import React from "react";

class BtnToTop extends React.Component {
    toTop = {
        position: 'fixed',
        bottom: '20px',
        right: '30px',
        zIndex: '99',
        fontSize: '18px',
        outline: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        textDecoration: 'none',
        height: '0',
        width: '0',
        borderTop: '30px solid transparent',
        borderBottom: '30px solid rgba(0,0,0,0.5)',
        borderLeft: '15px solid transparent',
        borderRight: '15px solid transparent'
    };
    render() {
        function handleClick(e) {
            e.preventDefault();
            console.log('The link was clicked.');
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
        return (
            <a href={{href:'#'}} style={this.toTop} onClick={handleClick}> </a>
        )
    }
}

export default BtnToTop


