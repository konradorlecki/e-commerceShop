import {useState} from 'react'

const useGlobalState = () => {
    console.log('global chuj');
    const [state, setState] = useState({cart:[]});

    const actions = (action) => {
        const {type, payload} = action;
        if (type === 'setState') {
            return setState(payload);
        } else {
            return state;
        }
    };
    return {state, actions, setState}
};
export default useGlobalState;