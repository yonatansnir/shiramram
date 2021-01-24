export const cartReducer = (state, action) => {
    let { type, payload } = action;
    let newList, obj, cart;
    switch (type) {
        case "INITIAL_CART":
            let localCart = localStorage.getItem('cart');
            if (!localCart) return state;
            return JSON.parse(localCart);

        case "ADD_TO_CART":
            newList = addToCart(state.list, payload);
            obj = numberOfItemAndPrice(newList);
            cart = { list: newList, numberOfItems: obj.numberOfItems, totalItemsPrice: obj.totalItemsPrice };
            localStorage.setItem('cart', JSON.stringify(cart));
            return cart;

        case "CHANGE_QUANTITY":
            newList = changeQuantity(state.list, payload.id, payload.count);
            obj = numberOfItemAndPrice(newList);
            cart = { list: newList, numberOfItems: obj.numberOfItems, totalItemsPrice: obj.totalItemsPrice };
            localStorage.setItem('cart', JSON.stringify(cart));
            return cart;

        case "REMOVE_FROM_CART":
            newList = removeFromCart(state.list, payload);
            obj = numberOfItemAndPrice(newList);
            cart = { list: newList, numberOfItems: obj.numberOfItems, totalItemsPrice: obj.totalItemsPrice };
            localStorage.setItem('cart', JSON.stringify(cart));
            return cart;

        case "CLEAR_CART":
            localStorage.removeItem('cart');
            return { list: [], numberOfItems: 0, totalItemsPrice: 0 };

        default:
            return state;
    }
}

export const initialCart = { list: [], numberOfItems: 0, totalItemsPrice: 0 };

function addToCart(list, item) {
    let newList = [...list];
    let itemToAdd = list.find(i => i.product_id === item.product_id);
    if (itemToAdd) {
        newList = list.map(i => i.product_id === item.product_id ? { ...i, quantity: i.quantity + 1 } : i);
    } else {
        newList.push(item);
    }

    return newList;
}

function changeQuantity(list, id, count) {
    let newList = [...list];
    let index = newList.findIndex(i => i.product_id === id);
    newList[index].quantity = count;

    return newList;
}

function removeFromCart(list, id) {
    let newList = list.filter(item => item.product_id !== id);

    return newList;
}

function numberOfItemAndPrice(list) {
    let totalItemsPrice = 0, numberOfItems = 0;
    list.forEach(i => {
        totalItemsPrice = totalItemsPrice + (i.quantity * i.price);
        numberOfItems = numberOfItems + i.quantity;
    })

    return { numberOfItems, totalItemsPrice }
}