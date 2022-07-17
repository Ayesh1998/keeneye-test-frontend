export const addItemToCartLogic = (productsModified, addedItem) => {
    const productsModifiedTemp = [...productsModified]
    let index = productsModifiedTemp.findIndex((item) => item.id === addedItem.id);
    let itemAdded = productsModifiedTemp.find((item) => item.id === addedItem.id);
    productsModifiedTemp.splice(index, 1, {...addedItem, noAddedToCart: itemAdded.noAddedToCart + 1});
    return productsModifiedTemp;
};


export const removeOneItemFromCartLogic = (productsModified, addedItem) => {
    const productsModifiedTemp = [...productsModified]
    let index = productsModifiedTemp.findIndex((item) => item.id === addedItem.id);
    let itemAdded = productsModifiedTemp.find((item) => item.id === addedItem.id);
    productsModifiedTemp.splice(index, 1, {...addedItem, noAddedToCart: itemAdded.noAddedToCart - 1});
    return productsModifiedTemp;
};

export const toggleDropdownLogic = (toggle) => {
    return !toggle;
};

export const removeCartItemsLogic = (productsModified, removingItem) => {
    const productsModifiedTemp = [...productsModified]
    let index = productsModifiedTemp.findIndex((item) => item.id === removingItem.id);
    productsModifiedTemp.splice(index, 1, {...removingItem, noAddedToCart: 0});
    return productsModifiedTemp;
};
