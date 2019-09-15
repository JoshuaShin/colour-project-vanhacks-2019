import React, { Component, createRef } from 'react';
import Popup from "reactjs-popup";
import { Form, TextArea, Button, Segment, Header } from 'semantic-ui-react'

export default class CreateMessage extends Component {
    redButtonRef = createRef();
    focusRed = () => {
        if (this.state.yourColor === "#ff695e") {
            this.redButtonRef.current.focus();
        }
    };

    yellowButtonRef = createRef();
    focusYellow = () => {
        if (this.state.yourColor === "#ffe21f") {
            this.yellowButtonRef.current.focus();
        }
    };

    constructor (props) {
        super(props);
        this.state = {
            ready: false,
            inputValue: '',
            backgroundColor: '',
            yourMessage: '',
            yourColor: '#ffffff'
        }
    };

    resetYourColor = () => {
        this.setState({ yourColor: '#ffffff' });
    };

    saveMessage = message => {
        this.setState({ yourMessage: message.target.value.substr(0, 1000) });
    };

    saveColor = color => {
        this.setState({ yourColor: color });
    };

    lockButton = () => {
        this.setState({ ready: false });
    };

    updateButton = () => {
        if (this.state.yourMessage.length) {
            this.setState({ ready: true });
        }
    };

    onSubmit = () => {
        console.log(this.state.yourMessage + this.state.yourColor);
        this.close();
    };

    render() {
        const { backgroundColor } = this.state;
        const { yourMessage } = this.state;
        const { yourColor } = this.state;

        return (
            <Popup trigger={<Button className="button"> new message </Button>} modal>
                {close => (
                    <div className="modal">
                        {/*<div className="modal" style={{backgroundColor: backgroundColor}}>*/}


                        {/* ===== Directions ===== */}

                        {/*<a className="close" onClick={close}>*/}
                        {/*    &times;*/}
                        {/*</a>*/}
                        {/*<div className="header"> Title </div>*/}
                        <div className="content">
                            <Header as='h1' style={{color: "#36454f"}}> Share your story with us! </Header>
                        </div>


                        {/* ===== Input fields ===== */}

                        <Form>
                            {/*<label>*Your Story</label>*/}
                            {/*onChange={ () => this.saveText( { "textMessage" } ) }*/}
                            <TextArea
                                placeholder='Your story'
                                style={{ minHeight: 100 }}
                                defaultValue={yourMessage}
                                onChange={ this.saveMessage }
                            />
                            <br />
                            <br />
                            {/*<label>Contact</label>*/}
                            {/*<input placeholder='Email' />*/}
                            {/*<br />*/}
                            {/*<br />*/}
                        </Form>


                        {/* ===== Color selection ===== */}

                        <div>
                            <Segment>
                                <Button
                                    ref={this.redButtonRef}

                                    inverted color='red'

                                    onClick={() => {
                                        this.setState({backgroundColor: '#ff695e'});
                                        this.saveColor('#ff695e');
                                        this.updateButton();
                                        // this.focusRed();
                                    }}
                                    // onBlur={this.focusRed}
                                >
                                    anger
                                </Button>
                                <Button
                                    ref={this.yellowButtonRef}

                                    inverted color='yellow'
                                    onClick={() => {
                                        this.setState({backgroundColor: '#ffe21f'})
                                        this.saveColor('#ffe21f');
                                        this.updateButton();
                                        // this.focusYellow();
                                    }}
                                    // onBlur={this.focusYellow}
                                >
                                    joy
                                </Button>
                                <Button
                                    inverted color='green'
                                    onClick={() => {
                                        this.setState({backgroundColor: '#2ecc40'})
                                        this.saveColor('#2ecc40');
                                        this.updateButton();
                                    }}
                                    // onBlur={this.lockButton}
                                >
                                    peace
                                </Button>
                                <Button
                                    inverted color='blue'
                                    onClick={() => {
                                        this.setState({backgroundColor: '#54c8ff'})
                                        this.saveColor('#54c8ff');
                                        this.updateButton();
                                    }}
                                    // onBlur={this.lockButton}
                                >
                                    sad
                                </Button>
                                <Button
                                    inverted color='violet'
                                    onClick={() => {
                                        this.setState({backgroundColor: '#a291fb'})
                                        this.saveColor('#a291fb');
                                        this.updateButton();
                                    }}
                                    // onBlur={this.lockButton}
                                >
                                    anxious
                                </Button>
                            </Segment>
                        </div>


                        {/* ===== Submit button ===== */}

                        <div className="actions">
                            {/*<Popup*/}
                            {/*    trigger={<button className="button"> color </button>}*/}
                            {/*    position="top center"*/}
                            {/*    closeOnDocumentClick*/}
                            {/*>*/}
                            {/*    <span>*/}
                            {/*      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae*/}
                            {/*      magni omnis delectus nemo, maxime molestiae dolorem numquam*/}
                            {/*      mollitia, voluptate ea, accusamus excepturi deleniti ratione*/}
                            {/*      sapiente! Laudantium, aperiam doloribus. Odit, aut.*/}
                            {/*    </span>*/}
                            {/*</Popup>*/}
                            <Button
                                disabled={!this.state.ready || !this.state.yourMessage}
                                className="button"
                                onClick={() => {
                                    this.onSubmit();
                                }}
                            >
                                submit
                            </Button>
                        </div>
                    </div>
                )}
            </Popup>
        );
    }
}
