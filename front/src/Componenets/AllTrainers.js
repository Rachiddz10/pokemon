import { Component } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from './../Comps/Pagination';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

export default class Alltrainers extends Component{
    state = {
        trainers: [],
        loading: true,
        error: false
      }
      async componentDidMount() {
        try {
          const response = await fetch('http://localhost:3000/trainers');
          const json = await response.json();
          this.setState({ 
            trainers: json,
            loading: false
          }, () => {
            console.log(json);
            
          })
        } catch (error) {
            this.setState({ 
                loading: false, 
                error: true 
              })        }
    }
    
      
      render () {
        const { trainers, loading, error } = this.state;
        return (
          <div>
             <Alert key="info" variant="info">
             <h2>    All Trainers      </h2>


          
        </Alert>
             <Navbar bg="light" expand="lg" >
    <Container fluid>
    {loading ?null:<Navbar.Brand href="#">nombre : {trainers.length}</Navbar.Brand>}
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
      
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
  
    </Container>
  </Navbar>
    
            {loading ? <div>Loading...</div>:
            <div className="container mt-5">
                       {(!loading && !error) ?


<Table responsive="sm">
<thead>

   <tr>
    <th>#</th>
    <th> Name</th>
 
    <th>Gender</th>
    <th> ######</th>
  </tr>
</thead>
<tbody>
{  trainers.map(trainer => (
              <tr key={trainer.id}>
                              <td> {trainer.id}</td>

              <td> {trainer.name}</td>
                  <td>{trainer.gender=="f"?"Femme":"Homme"}</td>
               <td>  
      <Button variant="outline-info">Info</Button>{' '}
      <Button variant="outline-success">Add</Button>{' '} 
      <Button variant="outline-warning">Edit</Button>{' '}
      <Button variant="outline-danger">Supp</Button>{' '}

               
               </td>
           
            </tr>
            )  )
          }

</tbody>
</Table>

 :<div>%%%%%%%%%%%%%%%%%%%%</div>
              }
                          {error && <div>Error message</div>}

             
                          <div className="row mt-5">
    <div className="col-md-4 col-md-offset-3">{" "}</div>
    <div className="col-md-6 col-md-offset-3"><Pagination/></div>

 
</div> 
  </div>}


   
     
          </div>
        );
      }
}
 