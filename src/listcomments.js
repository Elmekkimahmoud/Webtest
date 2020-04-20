import React, { Component } from 'react';
import axios from 'axios' ;




class Listcomments extends Component {
    constructor(props) {
        super(props);
        this.state = { list:[]  }
    }

    componentDidMount(){
      axios.get("https://jsonplaceholder.typicode.com/comments")
      .then(res=>{
        this.setState({list: res.data})
      })
    }



    render() { 
        console.log("hello listcommentaires")
        console.log(this.props)
        return ( 
            <section className="listcomment">
              <h1>This is the different comments of the post N° {this.props.match.params.id} </h1>
              <div className="comments">
                {this.state.list.filter(el=>el.postId==this.props.match.params.id).map((item,i)=> 
                <div className="item">
                  <h4> Comment N°{i+1}: </h4>
                  <span>{item.body}</span>
                </div>
                  )}
              </div>
            </section>
         );
    }
}
 
export default Listcomments;