import React, { Component } from 'react';
import firebase from './../../firebase.js';

class AddMenuItems extends Component {
  constructor() {
    super();
    this.state = {
      category: 'Appetizer',
      menuItem: '',
      ingredient: '',
      ingredients: [],
      numIngredients: 0
    };
  }

  handleChange(event, key) {
    this.setState({
      [key]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const menuRef = firebase.database().ref('menu');
    console.log('menuRef: ', menuRef);
    menuRef.orderByChild("category").equalTo(this.state.category)
      .once('value', snapshot => {
        snapshot.forEach(item =>
          item.child('items').ref.push(
            {item: this.state.menuItem,
              ingredients: this.state.ingredients
            }));
        this.clearForm();
      });
      console.log('adding menu item');
  }

  clearForm() {
    this.setState({
      category: 'Appetizer',
      menuItem: '',
      ingredient: ''
    });
  }

  mapInputFields() {
    for (let count = 0; count < this.state.numIngredients; count++) {
      console.log('count: ', count);
      console.log('numIngredients: ', this.state.numIngredients);
      // this return breaks the for loop
      return (
        <div className='ingredient-wrapper'>
          <input type='text'
            className='ingredient-input'
            placeholder='Enter Ingredient'
            onChange={(event) => this.handleChange(event, 'ingredient')}
            value={this.state.ingredient}/>
          <div className="add-input-field"
            onClick={(event) => this.addIngredient(event)}>+</div>
        </div>
      );
    }
  }

  addIngredient(event) {
    event.preventDefault();
    this.setState({
      numIngredients: this.state.numIngredients + 1,
      ingredients: [...this.state.ingredients, this.state.ingredient]
    });
  }

  render() {
    return (
      <div className='add-menu-items'>
        <form>
          <select id='menu-categories'
            value={this.state.category}
            onChange={(event) => this.handleChange(event, 'category')}>
            <option value="Appetizer">Appetizer</option>
            <option value="Soup/Salad">Soup/Salad</option>
            <option value="Entree">Entree</option>
            <option value="Dessert">Dessert</option>
            <option value="Beverage">Beverage</option>
          </select>
          <input type='text'
            placeholder='Enter Menu Item'
            onChange={(event) => this.handleChange(event, 'menuItem')}
            value={this.state.menuItem}/>
          <input type='text'
            className='ingredient-input'
            placeholder='Enter Ingredient'
            onChange={(event) => this.handleChange(event, 'ingredient')}
            value={this.state.ingredient}/>
          <div className="add-input-field"
            onClick={(event) => this.addIngredient(event)}>+</div>
          <div className='additional-ingredient-inputs'>
            {this.mapInputFields()}
          </div>
          <button className='submit-menu-item-button'
            onClick={(event) => this.handleSubmit(event)}>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddMenuItems;
