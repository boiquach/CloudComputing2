import { storageRef } from "../../config/index";
import * as siteActionTypes from "./actionTypes";
import * as graphqlActions from "./graphqlActions";
//GET
export const fetchSites = graphqlActions.fetchSites;
//note: when we create site, we don't dispatch using reducer, we us subscription insteads
export const createSite = graphqlActions.createSite;
export const editSite = graphqlActions.editSite;

// export const addSite = site => {
//   return (dispatch, getState, { getFirestore }) => {
//     const firestore = getFirestore();
//     firestore
//       .collection("sites")
//       .add({ ...site })
//       .then(docRef => {
//         dispatch(fetchSites());
//         window.location.href = `site/${docRef.id}`;
//       })

//       .catch(err => {
//         console.log("errored");
//       });

//     // createNewSite(site);
//   };
// };

// export const editSite = (id, site) => {
//   return (dispatch, getState, { getFirestore }) => {
//     const firestore = getFirestore();
//     firestore
//       .collection("sites")
//       .doc(id)
//       .set(site)
//       .then(() => {
//         dispatch(fetchSite(id));
//         window.location.href = `${id}`;
//       })

//       .catch(err => {
//         console.log("errored");
//       });
//   };
// };

export const deleteSie = () => {};

//DELETE
// export const deleteTodo = (id) =>{
//     return (dispatch,getState,{getFirestore})=>{
//         const firestore = getFirestore()
//         firestore.collection('students').doc(id).delete();
//     }
// }

export const fetchSite = siteId => {};

export const uploadImage = imageFile => {
  return (dispatch, getState, { getFirestore }) => {
    try {
      const metadata = { contentType: "image/jpeg" };
      const uploadTask = storageRef
        .child("images/sites/" + imageFile.name)
        .put(imageFile, metadata);
      dispatch({ type: siteActionTypes.UPLOADING_START });

      uploadTask.on(
        "state_changed",
        function(snapshot) {
          //completion percent
          let progress = (snapshot.bytesTransferred / snapshot.totalByes) * 100;
          //floor: round down decimal number
          dispatch({
            type: siteActionTypes.UPLOADING,
            payload: Math.floor(progress)
          });
        },
        function(error) {
          dispatch({ type: siteActionTypes.UPLOADING_FAIL, payload: error });
        },
        function() {
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            dispatch({
              type: siteActionTypes.UPLOADING_SUCCESS,
              payload: downloadURL
            });
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
};
