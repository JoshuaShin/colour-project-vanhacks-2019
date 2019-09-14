import React, { Component } from 'react';
import Popup from "reactjs-popup";
import { Form, TextArea, Button, Segment } from 'semantic-ui-react'

export default class CreateMessage extends Component {

    yourStory = "";

    constructor (props) {
        super(props)
        this.state = {
            inputValue: '',
            backgroundColor: '',
        }
    }

    onChange(inputEntry) {
        if (inputEntry) {
            this.setState({inputValue: inputEntry, backgroundColor: '#FF0000'}) // here I want to change the color to red
        } else {
            this.setState({inputValue: inputEntry, backgroundColor: ''}) // leave empty for default
        }
    }

    render() {
        const { backgroundColor } = this.state;

        return (
            <Popup trigger={<button className="button"> Open Modal </button>} modal>
                {close => (
                    <div className="modal" style={{backgroundColor: backgroundColor}}>


                        /* ===== Directions ===== */

                        {/*<a className="close" onClick={close}>*/}
                        {/*    &times;*/}
                        {/*</a>*/}
                        {/*<div className="header"> Title </div>*/}
                        <div className="content">
                            {" "}
                            Share your story with us!
                        </div>


                        /* ===== Input fields ===== */

                        <Form>
                            <label>*Your Story</label>
                            <TextArea placeholder='Your story' style={{ minHeight: 100 }} />
                            <br />
                            <br />
                            <label>Contact</label>
                            <input placeholder='Email' />
                        </Form>


                        /* ===== Color selection ===== */

                        <div>
                            <Segment>
                                <Button
                                    inverted color='red'
                                    onClick={() => {
                                        this.setState({backgroundColor: '#ff695e'}) // here I want to change the color to red
                                    }}
                                >
                                    Anger
                                </Button>
                                <Button
                                    inverted color='yellow'
                                    onClick={() => {
                                        this.setState({backgroundColor: '#ffe21f'}) // here I want to change the color to red
                                    }}
                                >
                                    Joy
                                </Button>
                                <Button
                                    inverted color='green'
                                    onClick={() => {
                                        this.setState({backgroundColor: '#2ecc40'}) // here I want to change the color to red
                                    }}
                                >
                                    Peace
                                </Button>
                                <Button
                                    inverted color='blue'
                                    onClick={() => {
                                        this.setState({backgroundColor: '#54c8ff'}) // here I want to change the color to red
                                    }}
                                >
                                    Sad
                                </Button>
                                <Button
                                    inverted color='violet'
                                    onClick={() => {
                                        this.setState({backgroundColor: '#a291fb'}) // here I want to change the color to red
                                    }}
                                >
                                    Anxious
                                </Button>
                            </Segment>
                        </div>


                        /* ===== Submit button ===== */

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
                            <button
                                className="button"
                                onClick={() => {
                                    this.setState({backgroundColor: '#ffffff'}) // here I want to change the color to red
                                    close();
                                }}
                            >
                                submit
                            </button>
                        </div>
                    </div>
                )}
            </Popup>
        );
    }
}
