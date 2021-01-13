import './app.css';
import Habits from './components/habits';
import NavBar from './components/navbar';

import React, { Component } from 'react';

class App extends Component {

  state = {
    habits: [
        {id: 1, name: 'Reading', count:0},
        {id: 2, name: 'Running', count:0},
        {id: 3, name: 'coding', count:0},
    ]
  }

    handleIncrement = (habit) => {
      const habits = this.state.habits.map(item => {
        if(item.id === habit.id){
          return {...habit, count: habit.count+1};
        }
        return item;
      });
      
      this.setState({habits});
    }

    handleDecrement = (habit) => {
      const habits = this.state.habits.map(item => {
        if(item.id === habit.id){
          const count = habit.count - 1;
          return {...habit, count: count>0 ? count : 0};
        }
        return item;
      });
      this.setState({habits});  
    }

    handleDelete = (habit) => {
      const habits = this.state.habits.filter(item => item.id !== habit.id);
                  
      this.setState({habits});  
    }

    handleAdd = name => {
      const newHabit = {id: Date.now(), name: name, count: 0};
      const habits = [...this.state.habits, newHabit];
      this.setState({habits});
    }

    handleReset = () => {
      const habits = this.state.habits.map(item => {
        if(item.count > 0) return {...item, count: 0};
        return item;
      });
      this.setState({habits});
    }

  render() {
    return (
      <>
        <NavBar totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <Habits 
          habits={this.state.habits}
          onAdd={this.handleAdd}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset = {this.handleReset}
        /> 
      </>
    );
  }
}

export default App;
