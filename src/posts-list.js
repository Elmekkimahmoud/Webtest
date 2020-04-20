import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUserCircle, faBuilding, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import Listcomments from './listcomments';
import axios from 'axios' ;

class Postslist extends Component {
    constructor(props) {
        super(props);
        this.state = { posts:[ ] , comments:[] }
    }

    componentDidMount(){
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res=>{
        this.setState({posts: res.data})
      })
    }

    

    render() { 
        console.log(this.props)
    
        return ( 
            <section className='post'>
                
                <img src='https://www.ricoh.fr/media/Future%20of%20Work%20-%20Topic%20Banner_tcm79-36228.png' />
                <span> < FontAwesomeIcon icon={faUserCircle} /> </span>
                <h1>This is the post list of user N° {this.props.match.params.id}</h1>
                <div className='listposts'>
                    {this.state.posts.filter(el=> el.userId==this.props.match.params.id).map((el,i)=>
                      <div key={i} className='postsuser' >
                          
                          <img src='https://sparkup.app/wp-content/uploads/2018/08/re%CC%81union-jeunes-managers_re%CC%81duit-3017840545-1535709036220.jpg'  />
                          <span>< FontAwesomeIcon icon={faBuilding} /></span>
                          <h4>{el.title}</h4>
                          <p>{el.body}</p>
                          <Link  to={`/user/${el.userId}/post/${el.id}`}   >   <span onClick={this.DispFun}> < FontAwesomeIcon icon={faCommentDots} />Comments</span> </Link>

                      </div>
                    
                    )}
                    <div>
                        <Route path="/user/:userId/post/:id" component={Listcomments} />
                    </div>
                </div>
                
            </section>
         );
    }
}
 
export default Postslist;