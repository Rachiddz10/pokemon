import { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Pagination from "./../Comps/Pagination";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import UpdatePokemon from "./UpdatePokemon";
export default class AllPokemons extends Component {
  state = {
    pokemons: [],
    loading: true,
    error: false,
    pokemonUpdate: null,
    search: "",
    currentPage: 1,
    pokemonsPerPage: 8,
    showMax: 3,
  };
  showModal = (k) => {
    this.setState({ show: true,  pokemonUpdate: k }, () => {
      console.log(this.state.pokemonUpdate);
    });
  };

  hideModal = () => {
    this.setState({ show: false, pokemonUpdate: null }, async () => {
      try {
        const response = await fetch("http://localhost:3000/pokemons");
        const json = await response.json();
        this.setState(
          {
            pokemons: json,
            loading: false,
          },
          () => {
            console.log(json);
          }
        );
      } catch (error) {
        this.setState({
          loading: false,
          error: true,
        });
      }
    });
  };
  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:3000/pokemons");
      const json = await response.json();
      this.setState(
        {
          pokemons: json,
          loading: false,
        },
        () => {
          console.log(json);
        }
      );
    } catch (error) {
      this.setState({
        loading: false,
        error: true,
      });
    }
  }

  Search() {
    this.setState(
      {
        loading: true,
      },
      async () => {
        try {
          const response = await fetch(
            "http://localhost:3000/pokemons/" + this.state.search,
            { method: "GET" }
          );
          const json = await response.json();
          this.setState(
            {
              pokemons: json,
              loading: false,
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
    );
  }

  async handleClickDelete(id) {
    this.setState(
      {
        loading: true,
      },
      async () => {
        try {
          const response = await fetch("http://localhost:3000/pokemons/" + id, {
            method: "DELETE",
          });
          const json = await response.json();
          this.setState(
            {
              pokemons: json,
              loading: false,
            },
            () => {
              console.log(json);
            }
          );
        } catch (error) {
          this.setState({
            loading: false,
            error: true,
          });
        }
      }
    );
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
    const { pokemons, loading, error, pokemonUpdate, showMax } = this.state;
    const { currentPage, pokemonsPerPage } = this.state;
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = pokemons.slice(
      indexOfFirstPokemon,
      indexOfLastPokemon
    );
    return (
      <div>
        <Alert key="info" variant="info">
          {" "}
          <h2> All Pokemons </h2>{" "}
        </Alert>

        <Navbar expand="lg">
          <Container fluid>
            {loading ? null : (
              <Navbar.Brand href="#">nombre : {pokemons.length}</Navbar.Brand>
            )}
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                {" "}
              </Nav>
              <Form className="d-flex">
                {" "}
                <Form.Control
                  placeholder="Search"
                  value={this.state.search}
                  onChange={(e) => {
                    this.setState({ search: e.target.value }, () => {});
                  }}
                  type="search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button
                  onClick={this.Search.bind(this)}
                  variant="outline-success"
                >
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="container mt-5">
            {!loading && !error ? (
              <div class="row ">
                {" "}
                {currentPokemons.map((pokemon) => (
                  <div class="col-sm-3 mb-5">
                    <div class="card h-100">
                      <div class="container">
                        <img
                          class="card-img-top"
                          src={pokemon.image}
                          alt="Card image cap"
                          text
                        />
                        <div class="">
                          <span className="btnI ">
                            <i
                              class="fa fa-info fa-lg  "
                              aria-hidden="true"
                            ></i>{" "}
                          </span>{" "}
                          <span className="btnE " onClick={this.showModal.bind(this, pokemon)}
                          variant="outline-success">
                            <i
                              class="fa fa-pencil fa-lg  "
                              aria-hidden="true"
                            ></i>{" "}
                          </span>{" "}
                          <span
                            className="btnS "
                            onClick={this.handleClickDelete.bind(
                              this,
                              pokemon.id
                            )}
                          >
                            <i
                              class="fa fa-trash-o fa-lg  "
                              aria-hidden="true"
                            ></i>{" "}
                          </span>{" "}
                        </div>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">{pokemon.name}</h5>
                        <p class="card-subtitle">{pokemon.type}</p>
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
            {pokemonUpdate ? (
              <UpdatePokemon
                show={this.state.show}
                handleHideModal={this.hideModal.bind(this)}
                pokemon={pokemonUpdate}
              ></UpdatePokemon>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}
