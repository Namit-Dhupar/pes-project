import ProductData from '../../data/ProductData.json';
import { TOGGLE_FAV } from '../actions/actions';

const initialState = {
    products: ProductData
};

const EnquiryReducer = (state = initialState, action) => {
  var updatedPes;
    switch(action.type){
        case TOGGLE_FAV:
          state.products.map(el => {
          const prodIndex = el.Subtype.findIndex(p => p.id === action.productId);
          const updatedProducts = el.Subtype;
          const newFavStatus = (prodIndex !== -1) ? !el.Subtype[prodIndex].isEnquired : null;
          updatedProducts[prodIndex] = {
            ...el.Subtype[prodIndex],
            isEnquired: newFavStatus
          }
          updatedPes = updatedProducts.filter((index) => index !== -1)
          return updatedPes;
        });

        return{
          products: [...state.products]
        }

        default:
         return state;       
        }
      
};

export default EnquiryReducer;