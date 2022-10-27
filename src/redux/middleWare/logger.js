//penulisan middleWare

export const logger = (state) => {
    return (next) => {
        return (action) => {
            console.log("Calling", action.type)
            return next(action);
        }
    }
}

// export const logger2 = state => next => action => {
//     console.log("Calling", action.type);
//     return next (action)
// }