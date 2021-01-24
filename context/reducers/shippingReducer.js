export const shippingReducer = (state, action) => {
    let { type } = action;
    switch (type) {
        case "local_pickup":
            return { method: "local_pickup", price: 0 };
        case "free_shipping":
            return { method: "free_shipping", price: 25 };
        case "flat_rate":
            return { method: "flat_rate", price: 35 };
        default:
            return state;
    }
}

export const initialShipping = { method: "local_pickup", price: 0 };