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
        borderTop: '20px solid transparent',
        borderBottom: '20px solid rgba(0,0,0,0.9)',
        borderLeft: '9px solid transparent',
        borderRight: '9px solid transparent'
    };
    render() {
        function handleClick(e) {
            e.preventDefault();
            console.log('The link was clicked.');
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
        return (
            <a className={'toTop'} href={{href:'#'}} style={this.toTop} onClick={handleClick}> </a>
        )
    }
}

export default BtnToTop


