import { LOREM_REQUEST_FILFULLED,LOREM_REQUEST_PENDING,LOREM_REQUEST_REJECTED } from "./actionType";



function lorem_request_pending(){
 
    return {
        type:LOREM_REQUEST_PENDING
    }
}



function lorem_request_filfilled(data){
 
    return {
        type:LOREM_REQUEST_FILFULLED,
        payload:data
    }
}


function lorem_request_rejected(data){
 
    return {
        type:LOREM_REQUEST_REJECTED,
        payload:data
    }
}




function fetchData(){


    return (dispatch)=>{
        dispatch(lorem_request_pending())
        fetch("https://api.nytimes.com/svc/books/v3/lists/2024-12-01/hardcover-fiction.json?api-key=NBt6OJLGf6cXxs5iwd19OHvN0PmbLfnI")
        .then(res =>{
          return res.json()
        })
        .then(data =>{
            dispatch(lorem_request_filfilled(data))
        })
        .catch((err)=>{
            dispatch(lorem_request_rejected(err.message))
        })
    }
}


export default fetchData

