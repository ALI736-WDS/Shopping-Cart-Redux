const shorten = (title) => {
    const splitedTitle = title.split(" ");
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`
    return newTitle;
}

const isInCart = (state, id) => {
    // console.log(state.selectedItems)
    const result = !!state.selectedItems.find(item => item.id === id)
    return result;
}

const quantityCount = (state, id) => {
    // console.log(state.selectedItems)
    const index = state.selectedItems.findIndex(item => item.id === id);
    if (index === -1) {  //if index finded ? shomare index miare : -1 miare, pas agar -1 bud return false kon
        return false
    } else {
        return state.selectedItems[index].quantity;  //quantity ro neshun bede ke bebinam 1 hast ya bishtar
    }
}

export { shorten, isInCart, quantityCount };