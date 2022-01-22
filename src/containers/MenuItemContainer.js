import { connect } from 'react-redux';
import MenuItem from '../components/MenuItem';
import {
  removeItem,
  updatePrice,
  updateQuantity
} from '../store/items/actions';
import { selectItemTotal } from '../store/items/selectors';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => dispatch(removeItem(ownProps.uuid)),
    updatePrice: (price) => dispatch(updatePrice(ownProps.uuid, price)),
    updateQuantity: (quantity) =>
      dispatch(updateQuantity(ownProps.uuid, quantity))
  };
};

const mapStateToProps = (state, props) => ({
  total: selectItemTotal(state, props)
});

export const MenuItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
