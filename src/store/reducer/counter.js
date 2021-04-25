export const counterReducer = ( state = {counter:0} , action ) => {
    if( action.type === "increment" ){
        return {
            counter: state.counter + 1
        }
    };

    if ( action.type === "dicrement" ){
        return {
            counter: state.counter - 1
        };
    };

    return state;
    
};