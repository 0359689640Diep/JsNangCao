const init = {
    cars: ['BMW']
}

export default function reduce(state = init, action, args) {
    console.log(action, args);
    switch (action) {
        case "ADD":
            const [newCar] = args
            return {
                ...state,
                cars: [...state.cars, newCar]
            }
        case "CREATE":
            break
        default: 
            return state;
    }
}