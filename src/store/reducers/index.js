import { combineReducers } from 'redux';

import list from './list';
import form from './form';

// pega todos os reducers, junto em um objeto e retorna para a store.
export default combineReducers({
    list,
    form,
})