
const defaultState = {
    inputValue: '',
    list:[]
}

export default ( state = defaultState,action) => {
    if(action.type === 'changeInputValue'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === 'addItem') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ' '
        return newState
    }
    if(action.type === 'deleteItem'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    return state;
}