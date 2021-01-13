import React, { Component } from 'react';

class InputHabit extends Component {
  handleAdd = ()=>{
    const item = document.querySelector('.input-habit');
    this.props.onItemAdd(item.value.trim());
    item.value = '';
  }

  render() {
    return (
      <>
      <input type="text" className="input-habit" />
      <button className="add-button" onClick={this.handleAdd}>Add</button>
      </>
    );
  }
}

export default InputHabit;