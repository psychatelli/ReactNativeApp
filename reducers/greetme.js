


const defaultState = {
    welcome: 'Hi',
    otherState: 'Some Stuff'
}
const greeting = (state = defaultState, action) => {

    switch(action.type) {
        case 'GREET_ME':
            return {welcome: 'Hello Adam'};
            break;
        case  'GREET WORLD':
            return [welcome: 'Hello World!'};
    }
    return state;  
};