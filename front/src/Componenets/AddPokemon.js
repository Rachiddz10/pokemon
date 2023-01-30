import { Component } from "react";
import Alert from 'react-bootstrap/Alert';

export default class AddPokemon extends Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

     }
  
    state = {
        trainers: [],
        loading: true,
        error: false,
        name:"",
        ability:"",
        force:0,
       
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
             ability:this.state.ability,
             force:this.state.force
           })
          }    

          )
            .then(response => {
                if (response.ok) {
                this.setState({name:"",ability:"",force:0}, () => {
                    console.log(this.state);
                    return response.json();
                  });
                  
                 } else {
                    throw new Error('Something went wrong ...');
                 }
            })
             .catch(error => this.setState({ error } ,() => {
                console.log(error)
                 
              }));
    
      
      };




      async componentDidMount() {
        
    }
    
     handleChange(event) {
      
        var nm=event.target.name;
        var v=event.target.value;
        if(nm=="name"){
            this.setState({name:v}, () => {
                console.log(this.state);
              });
        }
       else if(nm=="ability"){
          this.setState({ability:v}, () => {
              console.log(this.state);
            });
      }
      else if(nm=="force"){
        this.setState({force:v}, () => {
            console.log(this.state);
          });
    }
      
        
  

      }
      
      render () {
        const { trainers, loading, error } = this.state;
        return (
          <>
          <Alert key="info" variant="info">  <h2>    Add Pokemon      </h2> </Alert>

          
            <div className="container mt-5 mb-5 d-flex justify-content-center">
            <div className="card px-1 py-4">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <h6 className="card-title mb-3">{" "}</h6>


                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                               <label htmlFor="name">Name</label> 
                                <input name="name" onChange={this.handleChange} className="form-control" type="text" placeholder="Name" defaultValue={this.state.name}/> </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                               <label htmlFor="ability">Ability</label> 
                                <input name="ability" onChange={this.handleChange} className="form-control" type="text" placeholder="Ability" defaultValue={this.state.ability}/> </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                               <label htmlFor="force">Force</label> 
                                <input name="force" onChange={this.handleChange} className="form-control" type="number" placeholder="Force" defaultValue={this.state.force}/> </div>
                        </div>
                    </div>
   
   
                   
                    <div className=" d-flex flex-column text-center px-5 mt-3 mb-3">
                         <small className="agree-text">{" "}</small> 
                         <a href="#" className="terms">{" "}</a> </div> <button className="btn btn-info btn-block confirm-button">Add</button>
                </form>
            </div>
        </div> </>

        );
      }
}
 