

import {storageRef} from "../config/index"

export const FETCH_SITES="FETCH_SITES";
export const FETCH_SITE="FETCH_SITE";
export const ADD_SITE="ADD_SITE";
export const UPLOADING_START="UPLOADING_START"
export const UPLOADING_SUCCESS="UPLOADING_SUCCESS"
export const UPLOADING_FAIL="UPLOADING_FAIL"
export const UPLOADING = "UPLOADING"
export const FETCH_IMAGE="FETCH_IMAGE"


//POST
export const addSite = (site) => {
    return (dispatch, getState, {getFirestore})=>{
        const firestore = getFirestore()
        firestore.collection('sites').add({...site})
        .then((docRef)=>{
            dispatch(fetchSites())
            window.location.href = `site/${docRef.id}`
        })
        
        .catch((err)=>{
            console.log("errored")
        })
    }
}

//DELETE
// export const deleteTodo = (id) =>{
//     return (dispatch,getState,{getFirestore})=>{
//         const firestore = getFirestore()
//         firestore.collection('students').doc(id).delete();
//     }
// }


//GET
export const fetchSites = () => {
    const list=[];
    //console.log('abc');
    return(dispatch,getState,{getFirestore})=>{
        const firestore = getFirestore()
        
        firestore.collection('sites').get()
        .then((collection)=>
            {   collection.docs.forEach(doc=>{
                    list.push({
                        id:doc.id,
                        info: doc.data()
                    
                    });
                })
                //console.log(list);
                dispatch({type:FETCH_SITES,payload:list})
                

            }
        )
    }    
}

export const fetchSite = (siteId)=>{
    return (dispatch,getState,{getFirestore})=>{
        const firestore = getFirestore()
        firestore.collection('sites').doc(siteId).get()
        .then((doc)=>{
            const info = doc.data()
            dispatch({type:FETCH_SITE,payload:info})
        })
    }
}

export const uploadImage = imageFile =>{
    return (dispatch,getState,{getFirestore}) =>{
        
        try{
            const metadata = {contentType:"image/jpeg"}
            const uploadTask = storageRef.child("images/sites/" + imageFile.name).put(imageFile,metadata)
            dispatch({type:UPLOADING_START})

            uploadTask.on("state_changed",
                function(snapshot){
                    //completion percent
                    let progress = (snapshot.bytesTransferred/snapshot.totalByes)*100
                    //floor: round down decimal number
                    dispatch({type:UPLOADING,payload:Math.floor(progress)})
                },
                function(error){
                    dispatch({type:UPLOADING_FAIL,payload:error})
                },
                function(){
                    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                        dispatch({type:UPLOADING_SUCCESS, payload:downloadURL})
                    })
                }
            
            )
        }
        catch(error){
            console.log(error)
        }
    }
}