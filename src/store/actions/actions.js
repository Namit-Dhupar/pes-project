export const TOGGLE_FAV = 'TOGGLE_FAV';
export const SELECTED_HP = 'SELECTED_HP';
export const SELECTED_SIZE = 'SELECTED_SIZE';
export const SELECTED_MOC = 'SELECTED_MOC';
export const SELECTED_TEXT = 'SELECTED_TEXT';
export const RESET = 'RESET';

export const toggleFav = id => {
    return{
        type: TOGGLE_FAV,
        productId: id
    };
}

export const selectedhp = (id, value) => {
    return{
        type: SELECTED_HP,
        productId: id,
        value: value
    }
}

export const selectedsize = (id, value) => {
    return{
        type: SELECTED_SIZE,
        productId: id,
        value: value
    }
}

export const selectedmoc = (id, value) => {
    return{
        type: SELECTED_MOC,
        productId: id,
        value: value
    }
}

export const selectedtext = (id, value) => {
    return{
        type: SELECTED_TEXT,
        productId: id,
        value: value
    }
}

export const reset = () => {
    return{
        type: RESET
    }
}
