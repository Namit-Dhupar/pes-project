import ProductData from '../../data/ProductData.json';
import { TOGGLE_FAV, SELECTED_HP, SELECTED_SIZE, SELECTED_MOC, SELECTED_TEXT, 
         SELECTED_FLOW, SELECT_FITTING, SELECT_UNION,SELECT_PURPOSE, RESET } from '../actions/actions';

const copy = JSON.parse(JSON.stringify(ProductData));
const initialState = {
    products: copy
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
          ...state,
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
            ...state,
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
            ...state,
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
            ...state,
            products: [...state.products]
          }

          case SELECTED_FLOW:
          state.products.map(el => {
            const prodIndex = el.Subtype.findIndex(p => p.id === action.productId);
            const updatedProducts = el.Subtype;
            updatedProducts[prodIndex] = {
              ...el.Subtype[prodIndex],
              SelectedFlowRate: action.value
            }
            updatedPes = updatedProducts.filter((index) => index !== -1)
            return updatedPes;
          });
  
          return{
            ...state,
            products: [...state.products]
          }

          case SELECT_FITTING:
          state.products.map(el => {
            const prodIndex = el.Subtype.findIndex(p => p.id === action.productId);
            const updatedProducts = el.Subtype;
            updatedProducts[prodIndex] = {
              ...el.Subtype[prodIndex],
              SelectedFitting: action.value
            }
            updatedPes = updatedProducts.filter((index) => index !== -1)
            return updatedPes;
          });
  
          return{
            ...state,
            products: [...state.products]
          }

          case SELECT_UNION:
          state.products.map(el => {
            const prodIndex = el.Subtype.findIndex(p => p.id === action.productId);
            const updatedProducts = el.Subtype;
            updatedProducts[prodIndex] = {
              ...el.Subtype[prodIndex],
              SelectedUnion: action.value
            }
            updatedPes = updatedProducts.filter((index) => index !== -1)
            return updatedPes;
          });
  
          return{
            ...state,
            products: [...state.products]
          }

          case SELECT_PURPOSE:
          state.products.map(el => {
            const prodIndex = el.Subtype.findIndex(p => p.id === action.productId);
            const updatedProducts = el.Subtype;
            updatedProducts[prodIndex] = {
              ...el.Subtype[prodIndex],
              SelectedPurpose: action.value
            }
            updatedPes = updatedProducts.filter((index) => index !== -1)
            return updatedPes;
          });
  
          return{
            ...state,
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
            ...state,
            products: [...state.products]
          }
         case RESET:
          return{
              ...state,
              products: ProductData
          }

          default:
           return state;       
        }
      
};

export default EnquiryReducer;