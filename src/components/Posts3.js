import React, { Component } from 'react';

class Posts3 extends Component {
  constructor(props){
    super(props)
    this.state={
        posts:[]
    }
  }

  componentWillMount(){
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({posts:data}) )
  }

 
    render() { 
        const dataItems= this.state.posts.map(post=>(
            <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </div>
        ))
        return ( <div>
            <h1>All Post</h1>
            {dataItems}

        </div> );
    }
}
 
export default Posts3;