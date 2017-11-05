import { connect } from 'react-redux';
import { removeFromAllOrders } from './../Actions/index';
import KitchenView from './../Components/KitchenView/KitchenView';

const mapStateToProps = (store) => ({
  allOrders: store.allOrders
});

const mapDispatchToProps = (dispatch) => ({
  removeFromAllOrders: (order) => {
    return dispatch(removeFromAllOrders(order));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(KitchenView);
