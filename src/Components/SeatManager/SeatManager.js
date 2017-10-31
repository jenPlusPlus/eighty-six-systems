import React, { Component } from 'react';
import SeatContainer from './../../Containers/SeatContainer';
import firebase from './../../firebase.js';
import PropTypes from 'prop-types';

class SeatManager extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  updateState(event) {
    this.setState({
      input: event.target.value
    });
  }

  clearForm() {
    this.setState({
      input: ''
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // const usersRef = firebase.database().ref('users');
    // usersRef.orderByChild("loginCode").equalTo(this.props.currentUser.loginCode)
    //   .once('value', snapshot => {
    //     snapshot.forEach(item =>
    //       item.child('seats').ref.push(
    //         {[this.state.input]: {seats: 0}} ));
    //     this.clearForm();
    //   });
    this.props.addSeat(this.props.currentTable.tableNumber,
      {
        seatNumber: this.state.input,
        order: []
      });
    this.clearForm();
  }

  mapSeats() {
    if (this.props.tables.length > 0){
      const mappedSeats = this.props.tables[0].seats.map( (seat, index) => {
        return (
          <SeatContainer key={index+Date.now()}
            seat={seat}/>
        );
      });
      return mappedSeats;
    }
  }

  render() {
    return (
      <div className="server-dashboard">
        <h3>Seat Manager!</h3>
        <form>
          <input type='text'
            placeholder='Seat Number'
            onChange={(event) => this.updateState(event)}
            value={this.state.input}/>
          <button className='add-seat'
            onClick={(event) => this.handleSubmit(event)}>Add Seat</button>
        </form>
        <div className='seat-container'>
          {this.mapSeats()}
        </div>
      </div>
    );
  }
}

SeatManager.propTypes = {
  currentUser: PropTypes.object,
  addSeat: PropTypes.func,
  seats: PropTypes.array,
  currentTable: PropTypes.object,
  tables: PropTypes.array
};

export default SeatManager;
