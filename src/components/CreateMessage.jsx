import React, { Component } from 'react';
import Popup from "reactjs-popup";
import { Form, TextArea, Button, Segment, Header } from 'semantic-ui-react'

export default class CreateMessage extends Component {

    yourStory = "";

    constructor (props) {
        super(props);
        this.state = {
            inputValue: '',
            backgroundColor: '',
            yourMessage: '',
            yourColor: ''
        }
    };

    saveMessage = message => {
        //this.setState({ yourMessage });
        this.setState({ yourMessage: message.target.value.substr(0, 100) });

        //this.state.yourMessage = message;
    };

    saveColor = color => {
        //this.setState({ yourMessage });
        this.setState({ yourColor: color });

        //this.state.yourMessage = color;
    };

    onSubmit = () => {
        // this.setState();
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
                                    inverted color='red'
                                    onClick={() => {
                                        this.setState({backgroundColor: '#ff695e'});
                                        this.saveColor('#ff695e');
                                    }}
                                >
                                    anger
                                </Button>
                                <Button
                                    inverted color='yellow'
                                    onClick={() => {
                                        this.setState({backgroundColor: '#ffe21f'})
                                    }}
                                >
                                    joy
                                </Button>
                                <Button
                                    inverted color='green'
                                    onClick={() => {
                                        this.setState({backgroundColor: '#2ecc40'})
                                    }}
                                >
                                    peace
                                </Button>
                                <Button
                                    inverted color='blue'
                                    onClick={() => {
                                        this.setState({backgroundColor: '#54c8ff'})
                                    }}
                                >
                                    sad
                                </Button>
                                <Button
                                    inverted color='violet'
                                    onClick={() => {
                                        this.setState({backgroundColor: '#a291fb'})
                                    }}
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
                                className="button"
                                onClick={() => {
                                    this.setState({backgroundColor: '#ffffff'}) // here I want to change the color to red
                                    close();
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
