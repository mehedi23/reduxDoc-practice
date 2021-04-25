export const oneActionFun = () => (dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                dispatch({ type: "this_is_json" , payload: json })
            })

}


export const firebasePost = (values) => (dispatch) =>{
    return fetch('https://test-64e57-default-rtdb.firebaseio.com/test.json', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                })
                .then((response) => response.json())
                .then((json) => console.log(json));
}