import ProductData from '../../data/ProductData.json';
import { TOGGLE_FAV, SELECTED_HP, SELECTED_SIZE, SELECTED_MOC, SELECTED_TEXT, RESET } from '../actions/actions';

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
        case SELECTED_HP:
          state.products.map(el => {
            const prodIndex = el.Subtype.findIndex(p => p.id === action.productId);
            const updatedProducts = el.Subtype;
            updatedProducts[prodIndex] = {
              ...el.Subtype[prodIndex],
              SelectedHP: action.value
            }
            updatedPes = updatedProducts.filter((index) => index !== -1)
            return updatedPes;
          });
  
          return{
            products: [...state.products]
          }

          case SELECTED_SIZE:
          state.products.map(el => {
            const prodIndex = el.Subtype.findIndex(p => p.id === action.productId);
            const updatedProducts = el.Subtype;
            updatedProducts[prodIndex] = {
              ...el.Subtype[prodIndex],
              SelectedSize: action.value
            }
            updatedPes = updatedProducts.filter((index) => index !== -1)
            return updatedPes;
          });
  
          return{
            products: [...state.products]
          }

          case SELECTED_MOC:
          state.products.map(el => {
            const prodIndex = el.Subtype.findIndex(p => p.id === action.productId);
            const updatedProducts = el.Subtype;
            updatedProducts[prodIndex] = {
              ...el.Subtype[prodIndex],
              SelectedMOC: action.value
            }
            updatedPes = updatedProducts.filter((index) => index !== -1)
            return updatedPes;
          });
  
          return{
            products: [...state.products]
          }

          case SELECTED_TEXT:
          state.products.map(el => {
            const prodIndex = el.Subtype.findIndex(p => p.id === action.productId);
            const updatedProducts = el.Subtype;
            updatedProducts[prodIndex] = {
              ...el.Subtype[prodIndex],
              ItemMessage: action.value
            }
            updatedPes = updatedProducts.filter((index) => index !== -1)
            return updatedPes;
          });
  
          return{
            products: [...state.products]
          }
          case RESET:
              return{
                  products: {...initialState}
              }

          default:
           return state;       
        }
      
};

export default EnquiryReducer;