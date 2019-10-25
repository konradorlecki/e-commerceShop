import {useState} from 'react'

const useGlobalState = () => {
    const [state, setState] = useState({cart:[]});

    const actions = (action) => {
        const {type, payload} = action;
        if (type === 'setState') {
            return setState(payload);
        } else {
            return state;
        }
    };
    return {state, actions}
};
export default useGlobalState;