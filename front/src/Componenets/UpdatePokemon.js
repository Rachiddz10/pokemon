import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default class UpdatePokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: this.props.show,
            nameP: this.props.pokemon.name,
            hp: this.props.pokemon.hp,
            atk: this.props.pokemon.atk,
            def: this.props.pokemon.def,
            atkspe: this.props.pokemon.atkspe,
            defspe: this.props.pokemon.defspe,
            speed: this.props.pokemon.speed,
            type: this.props.pokemon.type,
            showHideClassName: this.props.show,
            image:this.props.pokemon.image
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleHpChange = this.handleHpChange.bind(this);
        this.handleAtkChange = this.handleAtkChange.bind(this);
        this.handleDefChange = this.handleDefChange.bind(this);
        this.handleAtkspeChange = this.handleAtkspeChange.bind(this);
        this.handleDefspeChange = this.handleDefspeChange.bind(this);
        this.handleSpeedChange = this.handleSpeedChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleNameChange(event) {
        this.setState({ nameP: event.target.value });
    }

    handleHpChange(event) {
        this.setState({ hp: event.target.value });
    }

    handleAtkChange(event) {
        this.setState({ atk: event.target.value });
    }

    handleDefChange(event) {
        this.setState({ def: event.target.value });
    }

    handleAtkspeChange(event) {
        this.setState({ arkspe: event.target.value });
    }

    handleDefspeChange(event) {
        this.setState({ defspe: event.target.value });
    }

    handleSpeedChange(event) {
        this.setState({ speed: event.target.value });
    }

    handleTypeChange(event) {
        this.setState({ type: event.target.value });
    }

    async handleSubmit(event) {
        
        event.preventDefault();
      
        await fetch(`http://localhost:3000/pokemons/${this.props.pokemon.id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                name: this.state.nameP,
                hp: this.state.hp,
                atk: this.state.ark,
                def: this.state.def,
                atkspe: this.state.atkspe,
                defspe: this.state.defspe,
                speed: this.state.speed,
                type: this.state.type,
                image:this.state.image,

            }),           
        }).then(async (response) => {
             if (response.ok) {
                this.props.handleHideModal();
                const json = await response.json();
                console.log(json);
            } else {
                throw new Error("Something went wrong ...");
            }
        });
    }

    render() {
        const { nameP, hp, atk, def, atkspe, defspe, speed, type } = this.state;

        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleHideModal}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modifier le pokemon</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formName">
                                <Form.Label >Nom</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={nameP}
                                    onChange={this.handleNameChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formHp">
                                <Form.Label className="mt-4">hp</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={hp}
                                    onChange={this.handleHpChange}
                                />
                            </Form.Group >
                            <Form.Group controlId="formAtk">
                                <Form.Label className="mt-4">atk</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={atk}
                                    onChange={this.handleAtkChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="def">
                                <Form.Label className="mt-4">def</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={def}
                                    onChange={this.handleDefChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="atkspe">
                                <Form.Label className="mt-4">atkspe</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={atkspe}
                                    onChange={this.handleAtkspeChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="defspe">
                                <Form.Label className="mt-4">defspe</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={defspe}
                                    onChange={this.handleDefspeChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="speed">
                                <Form.Label className="mt-4">speed</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={speed}
                                    onChange={this.handleSpeedChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="type">
                                <Form.Label className="mt-4">type</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={type}
                                    onChange={this.handleTypeChange}
                                />
                            </Form.Group>
                            <Button variant="success" className="mt-3"type="submit">
                                Enregistrer
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}