import {useContext} from 'react';
import {Context} from '../Context/Authentication'

function useToken(){

    let {state, setState} = useContext(Context)

    return [state, setState]

}

export default useToken;