import { Component } from "react";
import Axios from "axios"
import Alert from 'react-bootstrap/Alert';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

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
    pkmName: "",
    img: "",
    hp: "",
    atk: "",
    def: "",
    atkSpe: "",
    defSpe: "",
    speed: "",
    type: "",
    chosen: false
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("okokok")
    fetch("http://localhost:3000/pokemons",
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          mode: 'no-cors',
        },
        body: JSON.stringify({
          name: this.state.name,
          ability: this.state.ability,
          force: this.state.force
        })
      }
    )
      .then(response => {
        if (response.ok) {
          this.setState({ name: "", ability: "", force: 0 }, () => {
            console.log(this.state);
            return response.json();
          });

        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .catch(error => this.setState({ error }, () => {
        console.log(error)

      }));
  };

  async componentDidMount() {
  }

  handleChange(event) {
    var nm = event.target.name;
    var v = event.target.value;
    if (nm == "name") {
      this.setState({ name: v }, () => {
        console.log(this.state);
      });
    }
    else if (nm == "ability") {
      this.setState({ ability: v }, () => {
        console.log(this.state);
      });
    }
    else if (nm == "force") {
      this.setState({ force: v }, () => {
        console.log(this.state);
      });
    }
  };

  searchPKM() {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`).then((response) => {
      this.setState({
        pkmName: response.data.species.name,
        img: response.data.sprites.front_default,
        hp: response.data.stats[0].base_stat,
        atk: response.data.stats[1].base_stat,
        def: response.data.stats[2].base_stat,
        atkSpe: response.data.stats[3].base_stat,
        defSpe: response.data.stats[4].base_stat,
        speed: response.data.stats[5].base_stat,
        type: response.data.types[0].type.name,
        chosen: true
      })
    })
  };

  render() {
    const { trainers, loading, error } = this.state;
    return (
      <>
        <Alert key="info" variant="info"><h2>Add Pokemon</h2> </Alert>

        <div className="container mt-5 mb-5 d-flex justify-content-center">
          <div className="card px-1 py-4">
            <form className="card-body" onSubmit={this.handleSubmit}>
              <h6 className="card-title mb-3">{" "}</h6>

              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input name="name" onChange={this.handleChange} className="form-control" type="text" placeholder="Name" defaultValue={this.state.name} /> </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="ability">Ability</label>
                    <input name="ability" onChange={this.handleChange} className="form-control" type="text" placeholder="Ability" defaultValue={this.state.ability} /> </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="force">Force</label>
                    <input name="force" onChange={this.handleChange} className="form-control" type="number" placeholder="Force" defaultValue={this.state.force} /> </div>
                </div>
              </div>

              <div className=" d-flex flex-column text-center px-5 mt-3 mb-3">
                <small className="agree-text">{" "}</small>
                <a href="#" className="terms">{" "}</a>
              </div>

              <button className="btn btn-info btn-block confirm-button">Add</button>
            </form>
          </div>

          <div className="card px-1 py-4">
          <form className="card-body">
    
          <h3 className="card-title text-center"></h3>
          <div className="form-group">
          <div className="Display"> {
            !this.state.chosen ? (
              <h6>No PKM chosen</h6>
            ) : (
              <>
              <h4 className="text-center">{capitalizeFirstLetter(this.state.pkmName)}</h4>
              <img src={this.state.img} class="rounded mx-auto d-block img-fluid" />
              <h6 className="text-center">HP: {(this.state.hp)}</h6>
              <h6 className="text-center">ATK: {(this.state.atk)}</h6>
              <h6 className="text-center">DEF: {(this.state.def)}</h6>
              <h6 className="text-center">SP. ATK: {(this.state.atkSpe)}</h6>
              <h6 className="text-center">SP. DEF: {(this.state.defSpe)}</h6>
              <h6 className="text-center">SPEED: {(this.state.speed)}</h6>
              <h6 className="text-center">TYPE: {capitalizeFirstLetter(this.state.type)}</h6>
              </>
            )
          }
          </div>
          </div>
          <input name="name" onChange={(event => this.setState({name: event.target.value}))} className="form-control" type="text" placeholder="Name" defaultValue={this.state.name} />
          <div className=" d-flex flex-column text-center px-5 mt-3 mb-3">
                <small className="agree-text">{" "}</small>
                <a href="#" className="terms">{" "}</a>
              </div>

          <button className="btn btn-info btn-block confirm-button" type="button" onClick={this.searchPKM.bind(this)}>Search</button>
          </form>
          </div>
        </div> </>
    );
  }
}
