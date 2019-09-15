import React, { Component, createRef } from 'react';
import Popup from "reactjs-popup";
import { Form, TextArea, Button, Segment, Header, Dropdown } from 'semantic-ui-react'

export default class CreateMessage extends Component {
    modalDivRef = createRef();

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
    };

    // dropdownChange(e) {
    //     let {name, value} = e.target;
    //
    //     console.log(name);
    //     console.log(value);
    //
    //     this.setState({
    //         [name]: value,
    //     });
    // }
    //
    // colorOptions = [
    //     {
    //         key: '#ff695e',
    //         text: 'anger',
    //         value: '#ff695e',
    //         image: { avatar: true, src: 'https://www.colorhexa.com/ff695e.png' },
    //     },
    //     {
    //         key: '#ffe21f',
    //         text: 'joy',
    //         value: '#ffe21f',
    //         image: { avatar: true, src: 'https://www.colorhexa.com/ffe21f.png' },
    //     },
    //     {
    //         key: '#2ecc40',
    //         text: 'peace',
    //         value: '#2ecc40',
    //         image: { avatar: true, src: 'https://www.colorhexa.com/2ecc40.png' },
    //     },
    //     {
    //         key: '#54c8ff',
    //         text: 'sad',
    //         value: '#54c8ff',
    //         image: { avatar: true, src: 'https://www.colorhexa.com/54c8ff.png' },
    //     },
    //     {
    //         key: '#a291fb',
    //         text: 'anxiety',
    //         value: '#a291fb',
    //         image: { avatar: true, src: 'https://www.colorhexa.com/a291fb.png' },
    //     },
    // ];


    render() {
        const { yourMessage } = this.state;
        const { yourColor } = this.state;

        return (
            <Popup trigger={<Button className="button"> new message </Button>} modal>
                {close => (
                    <div className="modal" ref={this.modalDivRef} >
                    {/*<div className="modal" style={{backgroundColor: yourColor}}>*/}


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
                                        this.updateButton();
                                        this.modalDivRef.current.className = "modalRed";
                                        // this.focusRed();
                                    }}
                                    // onBlur={this.focusRed}
                                >
                                    anger
                                </Button>
                                <Button
                                    inverted color='yellow'
                                    onClick={() => {
                                        this.setState({backgroundColor: '#ffe21f'})
                                        this.saveColor('#ffe21f');
                                        this.updateButton();

                                        this.modalDivRef.current.className = "modalYellow";

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
                                        this.modalDivRef.current.className = "modalGreen";

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
                                        this.modalDivRef.current.className = "modalBlue";

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
                                        this.modalDivRef.current.className = "modalViolet";

                                    }}
                                    // onBlur={this.lockButton}
                                >
                                    anxious
                                </Button>
                            </Segment>
                        </div>


                        {/*<Dropdown*/}
                        {/*    placeholder='Select Friend'*/}
                        {/*    fluid*/}
                        {/*    selection*/}
                        {/*    options={this.colorOptions}*/}

                        {/*    onChange={this.dropdownChange}*/}

                        {/*    onChange = {e => {*/}
                        {/*        this.dropdownChange(e);*/}

                        {/*    }}*/}
                        {/*/>*/}


                        {/* ===== Submit button ===== */}
                        <br />
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
