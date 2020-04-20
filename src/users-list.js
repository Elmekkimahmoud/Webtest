import React, { Component } from 'react';

import { BrowserRouter as Router,Route, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUserCircle, faEnvelope, faPhone, faBuilding } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios' ;






class Userslist extends Component {
    constructor(props) {
        super(props);
        this.state = {display:'users', users:[] }

    }

    componentDidMount(){
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res=>{
        this.setState({users: res.data})
      })
    }

  DispFunc=()=>{
  this.setState({display:'hidden'})
  } 

    render() { 
        return ( 
            <section>
                
                <div className={this.state.display}>
                <h1>This is the users list</h1>
                    {this.state.users.map((el, i)=>
                        <div key={i} className='userinfo'>
                             <span> < FontAwesomeIcon icon={faUserCircle} /> </span>
                            <span>{el.name}</span>
                            <span>< FontAwesomeIcon icon={faEnvelope} /> {el.email}</span>
                            <span>< FontAwesomeIcon icon={faPhone} /> {el.phone}</span>
                            <span>< FontAwesomeIcon icon={faBuilding} /> {el.address.city}</span>
                            <Link to={`/user/${el.id}`}> <button onClick={this.DispFunc}>Follow</button> </Link>
                        </div>    
                    )}
                </div>
            </section>
         );
    }
}
 
export default Userslist;