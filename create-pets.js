import React , { Component } from "react";
import axios from "axios";

export default class CreatePet extends Component {
    constructor(props){
        super(props);

       this.onChangepetsid= this.onChangepetsid.bind(this);
       this.onChangebreed= this.onChangebreed.bind(this);
       this.onChangeage= this.onChangeage.bind(this);
       this.onChangename= this.onChangename.bind(this);
       this.onSubmit=this.onSubmit.bind(this); 
 
        this.state={
            petsid: '',
            breed: '',
            age: 0,
            name: '',
            users :[]
        
        }
    }

     componentDidMount() {
       axios.get('http://localhost:5000/pets/')
        .then(response => {
            if(response.data.length > 0)
            {
                this.setState({
                    users: response.data.map(user => user.username),
                    username: response.data[0].username 
                })
            }
        })
    } 
 
    onChangepetsid(e) {
        this.setState({
            petsid: e.target.value
        });
    }

    onChangebreed(e) {
        this.setState({
            breed : e.target.value
        });
    }

    onChangeage(e) {
        this.setState({
            age: e.target.value
        });
    }

    onChangename(e) {
        this.setState({
            name: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const pet = {
            petsid: this.state.petsid,
            breed: this.state.breed,
            age: this.state.age,
            name: this.state.name
        }
        console.log(pet);
    
        axios.post('http://localhost:5000/pets/add', pet)
        .then(res => console.log(res.data));
     
        window.location ='/';

    }


    render() {
        return(
            <div>
                <h3> Add New Pets  </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>PetsId </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.petsid}
                        onChange={this.onChangepetsid}/>
                          </div>

                    <div className="form-group">
                        <label>Breed: </label>
                        <input type="text"
                          required
                          className="form-control"
                          value={this.state.breed}
                          onChange={this.onChangebreed}/>
                        </div>
                    
                        <div className="form-group">
                        <label>Age: </label>
                        <input type="text"
                          required
                          className="form-control"
                          value={this.state.age}
                          onChange={this.onChangeage}/>
                        </div>

                        <div className="form-group">
                            <label>Name: </label>
                            <input type="text"
                          required
                          className="form-control"
                          value={this.state.name}
                          onChange={this.onChangename}/>

                        </div>
                    <div className="form-group">
                        <input type="submit" value="Add Pets" className="btn btn-primary" />

                    </div>
                </form>
            </div>


        )
    }
}