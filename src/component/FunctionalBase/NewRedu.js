import React , { useState } from 'react';
import {useDispatch} from 'react-redux';
import {firebasePost} from '../../store/action/oneAction'

function NewRedu() {

    const [ val , setVal ] = useState('')

    const inputVal = (e) => {
        setVal( e.target.value )
    }

    const dispatch = useDispatch()

    const sendVal = () =>{
        dispatch(firebasePost(val))
    }

    

    return (
        <div style={{"marginBottom":'100px'}}>
            <h1>
                new redux
            </h1>

            <input onChange={inputVal} placeholder="text" />
            <button onClick={sendVal}> Submit </button>
        </div>
    )
}

export default NewRedu
