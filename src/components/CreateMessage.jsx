import React, { Component } from 'react';
import Popup from "reactjs-popup";
import { Form, TextArea, Button, Segment } from 'semantic-ui-react'

export default class CreateMessage extends Component {

    constructor (props) {
        super(props)
        this.state = {
            inputValue: '',
            backgroundColor: '',
            yourStory: '',
            yourColor: ''
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
                        <a className="close" onClick={close}>
                            &times;
                        </a>
                        {/*<div className="header"> Title </div>*/}
                        <div className="content">
                            {" "}
                            Share your story with us - a message you would like to share with everyone, your story of hope, or any word of encouragement!
                        </div>
                        <Form>
                            <label>*Your Story</label>
                            <TextArea placeholder='Your story' style={{ minHeight: 100 }} />
                            <br />
                            <br />
                            <label>Contact</label>
                            <input placeholder='Email' />
                        </Form>


                        <div>
                            <Segment>
                                <Button
                                    inverted color='red'
                                    onClick={() => {
                                        this.setState({backgroundColor: '#FF0000'}) // here I want to change the color to red
                                    }}
                                >
                                    Anger
                                </Button>
                                {/*<Button inverted color='orange'>*/}
                                {/*    Orange*/}
                                {/*</Button>*/}
                                <Button inverted color='yellow'>
                                    Joy
                                </Button>
                                {/*<Button inverted color='olive'>*/}
                                {/*    Olive*/}
                                {/*</Button>*/}
                                <Button inverted color='green'>
                                    Peace
                                </Button>
                                {/*<Button inverted color='teal'>*/}
                                {/*    Teal*/}
                                {/*</Button>*/}
                                <Button inverted color='blue'>
                                    Sad
                                </Button>
                                <Button inverted color='violet'>
                                    Anxious
                                </Button>
                                {/*<Button inverted color='purple'>*/}
                                {/*    Purple*/}
                                {/*</Button>*/}
                                {/*<Button inverted color='pink'>*/}
                                {/*    Pink*/}
                                {/*</Button>*/}
                                {/*<Button inverted color='brown'>*/}
                                {/*    Brown*/}
                                {/*</Button>*/}
                                {/*<Button inverted color='grey'>*/}
                                {/*    Grey*/}
                                {/*</Button>*/}
                            </Segment>
                        </div>


                        <div className="actions">
                            <Popup
                                trigger={<button className="button"> color </button>}
                                position="top center"
                                closeOnDocumentClick
                            >
                                <span>
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                                  magni omnis delectus nemo, maxime molestiae dolorem numquam
                                  mollitia, voluptate ea, accusamus excepturi deleniti ratione
                                  sapiente! Laudantium, aperiam doloribus. Odit, aut.
                                </span>
                            </Popup>
                            <button
                                className="button"
                                onClick={() => {
                                    this.onChange(true);
                                    console.log("modal closed ");
                                    //close();
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
