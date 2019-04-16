import { createSelector } from 'reselect';
import uuidv1 from 'uuid/v1';
import { Types } from '../actions/list';

const initialState = {
    list: null,
    items: [],
}

export default function list(state=initialState, action){
    console.log(Types.ADD_PRODUCT)
    switch(action.type){
        case Types.ADD_PRODUCT: 
            return { 
                list: action.list, 
                items: [ 
                    ...state.items, 
                    { ...action.product, total: getItemTotal(action.product), id: uuidv1(), checked: false }] 
            }
        case Types.DELETE_PRODUCT:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.productId)
            }
        case Types.TOGGLE_PRODUCT:
            return {
                ...state,
                items: toggleItem(state.items, action.productId)
            }
        case Types.UPDATE_PRODUCT:
            return {
                list: action.list,
                items: updateProduct(state.items, action.product)
            }
        default:
            return state
    }
}

// Helpers
function getItemTotal(product){
    return product.price * product.quantity;
}

function toggleItem(items, productId){
    const index = items.findIndex(item => item.id === productId)
    return [
        ...items.slice(0, index), // Primeiro, retornar os items antes do item a ser modificado
        { ...items[index], checked: !items[index].checked }, // Item atualizado
        ...items.slice(index + 1), // Retornar todos os items do array depois do item atualizado
    ]
}

function updateProduct(items, product){
    const index = items.findIndex(item => item.id === product.id)
    return [
        ...items.slice(0, index), 
        { ...product, total: getItemTotal(product) }, // produto atualizado
        ...items.slice(index + 1), // Retornar todos os items do array depois do item atualizado
    ]
}

// Selectors

// o createSelector do Reselect só vai calcular o total quando tiver atualização dos items.
export const getListTotal = createSelector (
    // recebe um state
    state => state.list.items,
    // depende do items para calcular o frete, se tiver atualização do items ele faz o cálculo, se não, ele não faz nada.
    // se tiver atualizar no items, calcula e retorna o total
    items => items.reduce((total, item) => total + item.total, 0)
)

// Procura pelos items que não estão checkados
export const getOpenedItems = createSelector(
    state => state.list.items,
    items => items.filter(item => !item.checked).length
)

// Procura pelos items que estão checkados
export const getClosedItems = createSelector(
    state => state.list.items,
    items => items.filter(item => item.checked).length
)