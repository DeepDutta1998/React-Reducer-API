import React, { useEffect, useReducer } from 'react'


const initialstate = {
    loading: true,
    error: '',
    post: {}
}

const reducer = ( state, action) => {
        switch (action.type) {
             case 'SUCCESS':
                return {
                    loading: false,
                    post: action.result,
                    error: ''
                }
             case 'ERROR':
                return {
                    loading: false,
                    post: {},
                    error: 'Error on Fetch API'
                }
             default:
                return state
        }
}

export const ApiData = () => {
    const[state,dispatch]=useReducer(reducer,initialstate)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
          .then(response => response.json())
          .then(data => {
             dispatch({type: 'SUCCESS', result:data})
          })
          .catch(error=>{
             dispatch({type: 'ERROR'})
          })
    }, [])

  return (
    <div>
        <h1>API DATA:</h1> 
        <h1> ID: {state.post.id}</h1>
        <h1 className='container'>title: {state.post.title}</h1>
        <h1 className='container'>Body: {state.post.body}</h1>
    </div>

    
  )
}

