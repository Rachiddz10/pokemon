import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Pagination from "./../Comps/Pagination";

export default class AddPokemonTrainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: this.props.show,
      name: this.props.trainer.name,
      gender: this.props.trainer.gender,
      showHideClassName: this.props.show,

      pokemons: [],
      loading: true,
      error: false,
      search: "",
      currentPage: 1,
      pokemonsPerPage: 8,
      showMax: 3,

      checkedState: [],
      pokemonIds: [],
      trainerId: this.props.trainer.id,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(position) {
    const updatedCheckedState = this.state.checkedState.map((item, index) =>
      index === position ? !item : item
    );

    this.setState(
      {
        checkedState: updatedCheckedState,
      },
      () => {
        let tab = [];
        const total = this.state.checkedState.map((currentState, index) => {
          if (currentState === true) {
            tab.push(this.state.pokemons[index].id);
          }
          this.setState(
            {
              pokemonIds: tab,
            },
            () => {}
          );
        });
      }
    );
  }
  handleSubmit = async (e) => {
    e.preventDefault();

    fetch("https://pokemon-production-6166.up.railway.app/pokemons/link", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        mode: "no-cors",
      },
      body: JSON.stringify({
        pokemonIds: this.state.pokemonIds,
        trainerId: this.state.trainerId,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log(this.state);
          this.props.handleHideModal();

          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .catch((error) =>
        this.setState({ error }, () => {
          console.log(error);
        })
      );
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://pokemon-production-6166.up.railway.app/pokemons"
      );
      const json = await response.json();
      console.log("json");

      console.log(json.filter((j) => j.trainerId === null));

      this.setState(
        {
          pokemons: json.filter((j) => j.trainerId === null),
          loading: false,
          checkedState: new Array(json.length).fill(false),
        },
        () => {}
      );
    } catch (error) {
      this.setState({
        loading: false,
        error: true,
      });
    }
  }

  handleClick(num, etat) {
    if (etat === "normale") {
      this.setState(
        {
          currentPage: Number(num),
        },
        () => {}
      );
    } else if (etat === "prev") {
      this.setState(
        { currentPage: Number(num) - 1 >= 1 ? Number(num) - 1 : Number(num) },
        () => {}
      );
    } else if (etat === "next") {
      this.setState(
        {
          currentPage:
            Number(num) + 1 <=
            Math.ceil(this.state.pokemons.length / this.state.pokemonsPerPage)
              ? Number(num) + 1
              : Number(num),
        },
        () => {}
      );
    }
  }

  render() {
    const { pokemons, loading, error, showMax } = this.state;
    const { currentPage, pokemonsPerPage } = this.state;
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = pokemons.slice(
      indexOfFirstPokemon,
      indexOfLastPokemon
    );

    return (
      <div>
        <Modal
          show={this.props.show}
          onHide={this.props.handleHideModal}
          size="xl"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <h2> nombre : {pokemons.length}</h2>{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formName">
                <div>
                  {loading ? (
                    <div>Loading...</div>
                  ) : (
                    <div className="container mt-5">
                      {!loading && !error ? (
                        <div className="row ">
                          {" "}
                          {currentPokemons.map((pokemon, index) => (
                            <div className="col-sm-3 mb-3">
                              <div className="card h-100">
                                <div className="container">
                                  <img
                                    className="card-img-top"
                                    src={pokemon.image}
                                    alt="Card image cap"
                                    text
                                  />
                                  <div className="">
                                    <span className="caseC ">
                                      <input
                                        type="checkbox"
                                        id={`custom-checkbox-${
                                          index +
                                          pokemonsPerPage * (currentPage - 1)
                                        }`}
                                        name={pokemon.name}
                                        value={pokemon.name}
                                        checked={
                                          this.state.checkedState[
                                            index +
                                              pokemonsPerPage *
                                                (currentPage - 1)
                                          ]
                                        }
                                        onChange={this.handleOnChange.bind(
                                          this,
                                          index +
                                            pokemonsPerPage * (currentPage - 1)
                                        )}
                                      />
                                    </span>{" "}
                                  </div>
                                </div>
                                <div className="card-body">
                                  <h5
                                    className="card-title"
                                    htmlFor={`custom-checkbox-${index}`}
                                  >
                                    {pokemon.name}
                                  </h5>
                                  <p className="card-subtitle">
                                    {pokemon.type}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div>%%%%%%%%%%%%%%%%%%%%</div>
                      )}
                      {error && <div>Error message</div>}

                      <div className="row">
                        <div className="col-md-4 col-md-offset-3"> </div>
                        <div className="col-md-6 col-md-offset-3">
                          <Pagination
                            liste={pokemons}
                            listePerPage={pokemonsPerPage}
                            showMax={showMax}
                            currentPage={currentPage}
                            handleClick={this.handleClick.bind(this)}
                          ></Pagination>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Form.Group>

              <Button variant="primary" type="submit">
                Enregistrer
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
