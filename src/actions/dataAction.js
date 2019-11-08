
export const FETCH_TODOS="FETCH_TODOS";

//POST
// export const addTodo = (todo) => {
//     return (dispatch, getState, {getFirestore})=>{
//         const firestore = getFirestore()
//         firestore.collection('students').add({...todo})
//         .then(()=>{
//             dispatch({type:ADD_TODOS,todo})
//         })
//         .catch((err)=>{
//             console.log("errored")
//         })
//     }
// }

//DELETE
// export const deleteTodo = (id) =>{
//     return (dispatch,getState,{getFirestore})=>{
//         const firestore = getFirestore()
//         firestore.collection('students').doc(id).delete();
//     }
// }


//GET
export const fetchToDos = () => {
    const list=[];
    return(dispatch,getState,{getFirestore})=>{
        const firestore = getFirestore()
        firestore.collection('students').get()
        .then((collection)=>
            {   collection.docs.forEach(doc=>{

                    list.push(doc.data());
                })
                //console.log(list)
                dispatch({type:FETCH_TODOS,payload:list})
                

            }
        )
    }    
}
