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
            yourColor: '#f2f5fb'
        }
    };

    saveMessage = message => {
        this.setState({ yourMessage: message.target.value.substr(0, 1000) });
    };

    saveColor = color => {
        this.setState({ yourColor: color });
    };

    updateButton = () => {
        if (this.state.yourMessage.length) {
            this.setState({ ready: true });
        }
    };

    onSubmit = () => {
        console.log(this.state.yourMessage + this.state.yourColor);
    };

    randomGreet = () => {
        const greets = ["Tell us your story!",
                        "What's in your mind?",
                        "Tell us about your day!",
                        "Did something happen?",
                        "Any good news?"];
        return greets[Math.floor(Math.random() * Math.floor(4))];
    };

    render() {
        const { yourMessage } = this.state;
        const { yourColor } = this.state;

        return (
            <Popup trigger={<Button className="button"> new message </Button>} modal>
                {close => (
                    <div className="modal" ref={this.modalDivRef} style={{backgroundColor: this.yourColor}}>
                    {/*<div className="modal" ref={this.modalDivRef} >*/}


                        {/* ===== Directions ===== */}

                        {/*<a className="close" onClick={close}>*/}
                        {/*    &times;*/}
                        {/*</a>*/}
                        {/*<div className="header"> Title </div>*/}
                        <div className="content">
                            <Header as='h1' style={{color: "#212529", marginTop: '8px', marginBottom: '16px'}}> {this.randomGreet()} </Header>
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

                        {/*<div>*/}
                        {/*    <Segment>*/}
                                <Button.Group widths='5'>
                                    {/*<Button*/}
                                    {/*    style={{backgroundColor: '#ace8dc'}}*/}
                                    {/*    onClick={() => {*/}
                                    {/*        this.setState({backgroundColor: '#ace8dc'});*/}
                                    {/*        this.saveColor('#ace8dc');*/}
                                    {/*        this.updateButton();*/}
                                    {/*        this.modalDivRef.current.className = "modalTeal";*/}
                                    {/*        // this.focusRed();*/}
                                    {/*    }}*/}
                                    {/*    // onBlur={this.focusRed}*/}
                                    {/*>*/}
                                    {/*    curious*/}
                                    {/*</Button>*/}
                                    <Button
                                        style={{backgroundColor: '#efc7de'}}

                                        onClick={() => {
                                            this.setState({backgroundColor: '#efc7de'})
                                            this.saveColor('#efc7de');
                                            this.updateButton();
                                            this.modalDivRef.current.className = "modalPink";

                                        }}
                                        // onBlur={this.lockButton}
                                    >
                                        love
                                    </Button>
                                    <Button
                                        style={{backgroundColor: '#b5eecd'}}
                                        onClick={() => {
                                            this.setState({backgroundColor: '#b5eecd'})
                                            this.saveColor('#b5eecd');
                                            this.updateButton();

                                            this.modalDivRef.current.className = "modalGreen";

                                            // this.focusYellow();
                                        }}
                                        // onBlur={this.focusYellow}
                                    >
                                        peace
                                    </Button>
                                    <Button
                                        style={{backgroundColor: '#b4d3e8'}}

                                        onClick={() => {
                                            this.setState({backgroundColor: '#b4d3e8'})
                                            this.saveColor('#b4d3e8');
                                            this.updateButton();
                                            this.modalDivRef.current.className = "modalBlue";

                                        }}
                                        // onBlur={this.lockButton}
                                    >
                                        sadness
                                    </Button>
                                    <Button
                                        style={{backgroundColor: '#ddc5e7'}}

                                        onClick={() => {
                                            this.setState({backgroundColor: '#ddc5e7'});
                                            this.saveColor('#ddc5e7');
                                            this.updateButton();
                                            this.modalDivRef.current.className = "modalViolet";

                                        }}
                                        // onBlur={this.lockButton}
                                    >
                                        anxiety
                                    </Button>
                                </Button.Group>

                                <Button.Group widths='5'>
                                    <Button
                                        style={{backgroundColor: '#faeba6'}}
                                        onClick={() => {
                                            this.setState({backgroundColor: '#faeba6'});
                                            this.saveColor('#faeba6');
                                            this.updateButton();
                                            this.modalDivRef.current.className = "modalYellow";
                                            // this.focusRed();
                                        }}
                                        // onBlur={this.focusRed}
                                    >
                                        happy
                                    </Button>
                                    <Button
                                        style={{backgroundColor: '#f6d2ae'}}
                                        onClick={() => {
                                            this.setState({backgroundColor: '#f6d2ae'})
                                            this.saveColor('#f6d2ae');
                                            this.updateButton();

                                            this.modalDivRef.current.className = "modalOrange";

                                            // this.focusYellow();
                                        }}
                                        // onBlur={this.focusYellow}
                                    >
                                        excitement
                                    </Button>
                                    <Button
                                        style={{backgroundColor: '#f8c1ba'}}

                                        onClick={() => {
                                            this.setState({backgroundColor: '#f8c1ba'})
                                            this.saveColor('#f8c1ba');
                                            this.updateButton();
                                            this.modalDivRef.current.className = "modalRed";

                                        }}
                                        // onBlur={this.lockButton}
                                    >
                                        anger
                                    </Button>
                                    {/*<Button*/}
                                    {/*    style={{backgroundColor: '#dbe1e1'}}*/}

                                    {/*    onClick={() => {*/}
                                    {/*        this.setState({backgroundColor: '#dbe1e1'})*/}
                                    {/*        this.saveColor('#dbe1e1');*/}
                                    {/*        this.updateButton();*/}
                                    {/*        this.modalDivRef.current.className = "modalGrey";*/}

                                    {/*    }}*/}
                                    {/*    // onBlur={this.lockButton}*/}
                                    {/*>*/}
                                    {/*    sadness*/}
                                    {/*</Button>*/}
                                    <Button
                                        style={{backgroundColor: '#C6CBD2'}}

                                        onClick={() => {
                                            this.setState({backgroundColor: '#C6CBD2'})
                                            this.saveColor('#C6CBD2');
                                            this.updateButton();
                                            this.modalDivRef.current.className = "modalGrey";

                                        }}
                                        // onBlur={this.lockButton}
                                    >
                                        grief
                                    </Button>
                                </Button.Group>
                        {/*    </Segment>*/}
                        {/*</div>*/}


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
                                size='large'
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
