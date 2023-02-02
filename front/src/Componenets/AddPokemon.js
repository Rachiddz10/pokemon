import { Component } from "react";
import Alert from "react-bootstrap/Alert";

export default class AddPokemon extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    trainers: [],
    loading: true,
    error: false,
    name: "",
    hp: 0,
    atk: 0,
    def: 0,
    atkspe: 0,
    defspe: 0,
    speed: 0,
    type: "",
    image: "",
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("okokok");

    fetch("http://localhost:3000/pokemons", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        mode: "no-cors",
      },
      body: JSON.stringify({
        name: this.state.name,
        hp: this.state.hp,
        atk: this.state.atk,
        def: this.state.def,
        atkspe: this.state.atkspe,
        defspe: this.state.defspe,
        speed: this.state.speed,
        type: this.state.type,
        image: this.state.image,
      }),
    })
      .then((response) => {
        if (response.ok) {
          this.setState(
            {
              name: "",
              hp: 0,
              atk: 0,
              def: 0,
              atkspe: 0,
              defspe: 0,
              speed: 0,
              type: "",
              image: "",
            },
            () => {
              console.log(this.state);
              return response.json();
            }
          );
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

  async componentDidMount() {}

  handleChange(event) {
    var nm = event.target.name;
    var v = event.target.value;
    if (nm == "name") {
      this.setState({ name: v }, () => {
        console.log(this.state);
      });
    } else if (nm == "hp") {
      this.setState({ hp: v }, () => {
        console.log(this.state);
      });
    } else if (nm == "atk") {
      this.setState({ atk: v }, () => {
        console.log(this.state);
      });
    } else if (nm == "def") {
      this.setState({ def: v }, () => {
        console.log(this.state);
      });
    } else if (nm == "atkspe") {
      this.setState({ atkspe: v }, () => {
        console.log(this.state);
      });
    } else if (nm == "defspe") {
      this.setState({ defspe: v }, () => {
        console.log(this.state);
      });
    } else if (nm == "speed") {
      this.setState({ speed: v }, () => {
        console.log(this.state);
      });
    } else if (nm == "type") {
      this.setState({ type: v }, () => {
        console.log(this.state);
      });
    } else if (nm == "image") {
      this.setState({ image: v }, () => {
        console.log(this.state);
      });
    }
  }

  render() {
    const { trainers, loading, error } = this.state;
    return (
      <>
        <Alert key="info" variant="info">
          {" "}
          <h2> Add Pokemon </h2>{" "}
        </Alert>
        <div className="container mt-5 mb-5 d-flex justify-content-center">
          <div className="card px-1 py-4">
            <form className="card-body" onSubmit={this.handleSubmit}>
              <h6 className="card-title mb-3"> </h6>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      name="name"
                      onChange={this.handleChange}
                      className="form-control"
                      type="text"
                      placeholder="Name"
                      defaultValue={this.state.name}
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="hp">Hit Points</label>
                    <input
                      name="hp"
                      onChange={this.handleChange}
                      className="form-control"
                      type="number"
                      placeholder="HP"
                      defaultValue={this.state.hp}
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="atk">Attack</label>
                    <input
                      name="atk"
                      onChange={this.handleChange}
                      className="form-control"
                      type="number"
                      placeholder="Attack"
                      defaultValue={this.state.atk}
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="def">Defense</label>
                    <input
                      name="def"
                      onChange={this.handleChange}
                      className="form-control"
                      type="number"
                      placeholder="Defense"
                      defaultValue={this.state.def}
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="atkspe">Special Attack</label>
                    <input
                      name="atkspe"
                      onChange={this.handleChange}
                      className="form-control"
                      type="number"
                      placeholder="Special Attack"
                      defaultValue={this.state.atkspe}
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="defspe">Special Defense</label>
                    <input
                      name="defspe"
                      onChange={this.handleChange}
                      className="form-control"
                      type="number"
                      placeholder="Special Defense"
                      defaultValue={this.state.defspe}
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="speed">Speed</label>
                    <input
                      name="speed"
                      onChange={this.handleChange}
                      className="form-control"
                      type="number"
                      placeholder="Speed"
                      defaultValue={this.state.speed}
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="type">Type</label>
                    <input
                      name="type"
                      onChange={this.handleChange}
                      className="form-control"
                      type="text"
                      placeholder="Type"
                      defaultValue={this.state.type}
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input
                      name="image"
                      onChange={this.handleChange}
                      className="form-control"
                      type="text"
                      placeholder="url"
                      defaultValue={this.state.image}
                    />{" "}
                  </div>
                </div>
              </div>
              <div className=" d-flex flex-column text-center px-5 mt-3 mb-3">
                <small className="agree-text"> </small>
                <a href="#" className="terms">
                  {" "}
                </a>{" "}
              </div>{" "}
              <button className="btn btn-info btn-block confirm-button">
                Add
              </button>
            </form>
          </div>
        </div>{" "}
      </>
    );
  }
}
