import { Types } from '../actions/list';

const initialState = {
    list: null,
    items: [],
}

export default function list(state=initialState, action){
    console.log(Types.ADD_PRODUCT)
    switch(action.type){
        case Types.ADD_PRODUCT: 
            console.log('cai aqui');
            return { list: action.list, items: [ ...state.items, action.product ] }
        default:
            console.log('não cai aqui');
            return state
    }
}