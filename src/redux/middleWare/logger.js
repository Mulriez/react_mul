//penulisan middleWare
export const logger = (state) => {
  return (next) => {
    return (action) => {
      console.log("Calling", action.type);
      if (action.type === "change") {
        return next(action);
      } else {
        return;
      }
    };
  };
};

export const tes = (state) => {
    return (next) => {
      return (action) => {
        if (action.color !== 'purple') {
          action.color = 'purple'
          return next(action);
        } 
        return next(action)
      };
    };
  };
  

// export const logger2 = state => next => action => {
//     console.log("Calling", action.type);
//     return next (action)
// }
