import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Post from './components/post/Post';
import Search from './components/search/Search';

class App extends Component {
  state = {
    posts: []
  }
  onPostSearch = (query) => {
    const filtered = this.originalPosts.filter(p => p.title.indexOf(query) > -1);
    this.setState({
      posts: filtered
    });
  }
  async componentDidMount(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    this.originalPosts = [...response.data];
    console.log(this.originalPosts);
    this.setState({
      posts: response.data
    });
  }
  render() {
    console.log(this.state.posts);
    return (
      <div className="App">
        <header className="App-header">
          <Search onSearch={this.onPostSearch} /> 
        </header>
        <div className="app-posts">
        {
          this.state.posts.map(post => <Post key={post.id} {...post} />)
        }
        </div>
      </div>
    );
  }
}

export default App;
