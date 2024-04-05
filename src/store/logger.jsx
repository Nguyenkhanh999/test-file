function logger(reducer) {
    return (prevState, action) => {
        console.group(action.type)
        console.log('Prev State: ', prevState);
        console.log('Action State: ', action);


        const nextState = reducer(prevState, action)
        console.groupEnd()

        return nextState
    }
}
export default logger