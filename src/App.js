import logo from './logo.svg';
import React,{ Component } from 'react'; 
import {CardList} from "./components/card-list/card-list.component"
import {SearchBox} from './components/serach-box/search-box.component'
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters:[],
      serachFiled:''
    }
  }
  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  render(){
    const{ monsters,serachFiled } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(serachFiled.toLocaleLowerCase())

    );

    return (

      <div className="App"> 
          <h1>monsters Rolodox  </h1>

          <SearchBox
            placeholder = 'search monsters'
            handleChange = {e => this.setState({serachFiled: e.target.value })}
          />

        <CardList monsters= {filteredMonsters} /> 
      </div>
    );

  }

}

export default App;
