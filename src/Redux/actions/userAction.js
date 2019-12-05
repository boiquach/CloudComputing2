import * as userActionTypes from "./actionTypes";
import { Auth } from "aws-amplify";
import * as graphqlMutations from "../../graphql/mutations";
import * as graphqlQueries from "../../graphql/queries";
import API, { graphqlOperation } from "@aws-amplify/api";
import { storageRef, fb } from "../../config/index";
export const login = () => {
  console.log("begin login....");
  Auth.federatedSignIn()
    .then(result => {
      console.log("sign in result: ", result);
      // get user info will not work because rerender callback
    })
    .catch(err => console.log("check user error: ", err));
};
const getUserInfo = () => {
  //check user then create member
  Auth.currentAuthenticatedUser()
    .then(user => {
      console.log("result checkuser: ", { user });
      // todo: check member? (if not create member)... and load ownersites also..., jointed sites...
      getMember(user.attributes.email).then(member => {
        console.log("result get member data: ", member);
        // dispatch({
        //   type: userActionTypes.CHECK_USER,
        //   payload: member
        // });
      });
    })
    .catch(err => console.log("check user error: ", err));
};

export const logout = () => {
  return dispatch => {
    Auth.signOut()
      .then(data => {
        console.log("result signout: ", data);
        dispatch({
          type: userActionTypes.LOG_OUT,
          payload: data
        });
      })
      .catch(err => console.log(err));
  };
};
export const signup = (newUser, password) => {
  // return (dispatch) => {
  //     fb.auth().createUserWithEmailAndPassword(newUser.email, password)
  //         .then((user) => {
  //             console.log(user)
  //             fb.firestore().collection('users').doc(user.user.uid)
  //                 .set(newUser)
  //                 .then(() => {
  //                     dispatch(login(newUser.email, password))
  //                 })
  //         })
  //         .catch((error) => {
  //             console.log('errored')
  //         })
  // }
};
export const checkUser = () => {
  //check user then create member
  return dispatch => {
    Auth.currentAuthenticatedUser()
      .then(user => {
        console.log("result checkuser: ", { user });
        //get or create user account
        getMember(user.attributes.email).then(member => {
          console.log("result get member: ", member);
          sessionStorage.setItem("member", JSON.stringify(member));
          dispatch({
            type: userActionTypes.CHECK_USER,
            payload: member
          });
        });
      })
      .catch(err => {
        console.log("check user error: ", err);
        Auth.federatedSignIn();
      });
  };
};
export const jointSite = (userId, siteID) => {
  console.log("begin mutation joinsite: site", siteID, " user: ", userId);
  API.graphql(
    graphqlOperation(graphqlMutations.createMembersSites, {
      input: {
        membersSitesSiteId: siteID,
        membersSitesMemberId: userId
      }
    })
  )
    .then(result => {
      console.log("mutation result: site", result.data);
    })
    .catch(error => console.log("mutation error: ", error));
};
export const undoJointSite = (userID, siteID) => {
  console.log("begin mutation undo jointsite: site", siteID, " user: ", userID);
  console.log(
    "undo jointsite warning: due to deep level of n-n relationship, this can not be done easily"
  );
  // this does not work because the deep level for n-n relationship must be large 10
};

export const updateProfile = newUser => {
  return dispatch => {
    console.log("begin mutation update user profile: ", newUser);
    API.graphql(
      graphqlOperation(graphqlMutations.updateMember, {
        input: newUser
      })
    )
      .then(result => {
        console.log("mutation result: user updated: ", result.data);
        //todo: dispatch to current user
        dispatch({
          type: userActionTypes.UPDATE_USER_PROFILE,
          payload: result.data
        });
      })
      .catch(error => console.log("mutation error: ", error));
  };
};
export const fetchAvatar = () => {};

export const createPost = (newPost, siteID, userID) => {
  //todo: replace this later
  newPost = {
    title: "post title",
    description: "post description",
    postSiteId: "c8132792-4325-4ca6-9852-2eae4be39e6d",
    postSiteOwnerId: "64af0137-868b-42f3-b411-f708f670c828"
  };
  console.log("begin mutation put post: ", newPost);
  //warning: later on will only succeed if user is owner of the site

  // newPost.postSiteId = siteID;
  // newPost.postSiteOwnerId = userID;
  return dispatch => {
    API.graphql(
      graphqlOperation(graphqlMutations.createPost, {
        input: newPost
      })
    )
      .then(result => {
        console.log("mutation result:  Post: ", result.data);
        //todo: dispatch to current user
        dispatch({
          type: userActionTypes.ADD_POST,
          payload: result.data
        });
      })
      .catch(error => console.log("mutation error: ", error));
  };
};
export const memberPutCommentOnPost = (comment, postID, memberID) => {
  return dispatch => {
    //todo: replace this later
    const Comment = {
      content: "comment content... ",

      commentPostId: "a2929440-46d9-43db-b871-89641df9ce81",
      commentMemberId: "64af0137-868b-42f3-b411-f708f670c828"
    };
    console.log("begin mutation put comment: ", Comment);
    // newPost.postSiteId = siteID;
    // newPost.postSiteOwnerId = userID;
    API.graphql(
      graphqlOperation(graphqlMutations.createComment, {
        input: Comment
      })
    )
      .then(result => {
        console.log("mutation result:  Post: ", result.data);
        //todo: dispatch to current user
        dispatch({
          type: userActionTypes.ADD_COMMENT,
          payload: result.data
        });
      })
      .catch(error => console.log("mutation error: ", error));
  };
};

async function getMember(email) {
  console.log("begin fetch member....");
  console.log("query member with email (my email)....", email);
  const filter = {
    email: { eq: email }
  };
  const result = await API.graphql(
    graphqlOperation(graphqlQueries.listMembers, { filter: filter })
  )
    .then(result => {
      console.log("query result: ", result.data.listMembers.items);
      //create new user record in system
      if (result.data.listMembers.items.length < 1) {
        const user = {
          firstName: email.split("@")[0],
          email: email
        };
        console.log("creating member.... ");
        return createMember(user);
      } else {
        return result.data.listMembers.items[0];
      }
    })
    .then(member => {
      console.log("then ... ", member);
      return member;
    })
    .catch(error => console.log("query error: ", error));
  return result;
}
async function createMember(newMember) {
  API.graphql(
    graphqlOperation(graphqlMutations.createMember, { input: newMember })
  )
    .then(result => {
      console.log("mutation result: site", result.data.createMember);
      return result.data.createMember;
    })
    .catch(error => {
      console.log("mutation error: ", error);
      return null;
    });
}
export const addVolunteerEmail = data => {
  // return dispatch => {
  //   // fb.firestore()
  //   //   .collection("volunteerEmail")
  //   //   .add({ ...data })
  //   //   .then(docRef => {
  //   //     console.log(docRef);
  //   //   })
  //   //   .catch(error => {
  //   //     console.log("errored");
  //   //   });
  // };
};

export const addVolunteerId = data => {
  // return dispatch => {
  //   fb.firestore()
  //     .collection("volunteerId")
  //     .add({ ...data })
  //     .then(docRef => {
  //       dispatch(fetchVolunteerId(data.site));
  //     })
  //     .catch(error => {
  //       console.log("errored");
  //     });
  // };
};
export const fetchVolunteerEmail = id => {
  // const list = [];
  // return dispatch => {
  //   fb.firestore()
  //     .collection("volunteerEmail")
  //     .where("site", "==", id)
  //     .onSnapshot(query => {
  //       query.forEach(docRef => {
  //         list.push(docRef.data().volunteer);
  //       });
  //       console.log(list);
  //       dispatch({ type: FETCH_VOLUNTEERS_EMAIL, payload: list });
  //     });
  // };
};

//GET by Site ID
export const fetchVolunteerId = id => {
  // const list = [];
  // const volunteers = [];
  // return dispatch => {
  //   fb.firestore()
  //     .collection("volunteerId")
  //     .where("site", "==", id)
  //     .onSnapshot(query => {
  //       query.forEach(docRef => {
  //         list.push(docRef.data().volunteer);
  //       });
  //       fb.firestore()
  //         .collection("users")
  //         .get()
  //         .then(query => {
  //           query.forEach(docRef => {
  //             if (list.includes(docRef.id)) {
  //               volunteers.push({
  //                 id: docRef.id,
  //                 data: docRef.data()
  //               });
  //             }
  //           });
  //           console.log(volunteers);
  //           dispatch({ type: FETCH_VOLUNTEERS_ID, payload: volunteers });
  //         });
  //     });
  // };
};

export const uploadImage = imageFile => {
  return dispatch => {
    try {
      const metadata = { contentType: "image/jpeg" };
      const uploadTask = storageRef
        .child("images/sites/" + imageFile.name)
        .put(imageFile, metadata);
      // dispatch({ type: UPLOADING_START });

      uploadTask.on(
        "state_changed",
        function(snapshot) {
          //completion percent
          let progress = (snapshot.bytesTransferred / snapshot.totalByes) * 100;
          //floor: round down decimal number
          // dispatch({ type: UPLOADING, payload: Math.floor(progress) });
        },
        function(error) {
          // dispatch({ type: UPLOADING_FAIL, payload: error });
        },
        function() {
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            // dispatch({ type: UPLOADING_SUCCESS, payload: downloadURL });
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchUser = id => {
  // return (dispatch) => {
  //     fb.firestore().collection('users').doc(id).get()
  //         .then(user => {
  //             //console.log(user)
  //             dispatch({ type: FETCH_USER, payload: user.data() })
  //         })
  //         .catch(error => {
  //             console.log(error.code)
  //         })
  // }
};

export const editUser = (id, user) => {
  // return dispatch => {
  //     fb.firestore().collection('users').doc(id).set(user)
  //         .then(() => {
  //             dispatch(fetchUser(id))
  //         })
  //         .catch(error => {
  //             console.log(error.code)
  //         })
  // }
};
export const fetchReports = () => {
  // const list = [];
  // return dispatch => {
  //   fb.firestore()
  //     .collection("reports")
  //     .get()
  //     .then(query => {
  //       query.docs.forEach(doc => {
  //         const obj = {
  //           id: doc.id,
  //           info: doc.data()
  //         };
  //         list.push(obj);
  //       });
  //       // dispatch({ type: FETCH_REPORTS, payload: list });
  //     })
  //     .catch(error => {
  //       console.log(error.code === "permission-denied");
  //       if (error.code === "permission-denied") {
  //         // dispatch({ type: REPORT_FAIL, payload: null });
  //       }
  //     });
  // };
};

export const fetchReport = id => {
  // return dispatch => {
  //   fb.firestore()
  //     .collection("reports")
  //     .doc(id)
  //     .onSnapshot(doc => {
  //       if (doc.data() === undefined) {
  //         // dispatch({ type: REPORT_FAIL, payload: null });
  //       } else {
  //         // dispatch({ type: FETCH_REPORT, payload: doc.data() });
  //       }
  //     });
  //   // .catch(error=>{
  //   //     console.log(error.code)
  //   // })
  // };
};

export const updateReport = obj => {
  // return dispatch => {
  //   // dispatch({ type: REPORT_LOADING, payload: null });
  //   fb.firestore()
  //     .collection("reports")
  //     .doc(obj.siteId)
  //     .set(obj.report)
  //     .then(() => {
  //       dispatch(fetchReport(obj.siteId));
  //     })
  //     .catch(error => {
  //       console.log(error.code);
  //     });
  // };
};
export const loginFacebook = () => {
  // return dispatch => {
  //   fb.auth()
  //     .setPersistence(fb.auth.Auth.Persistence.SESSION)
  //     .then(() => {
  //       const facebook = new fb.auth.FacebookAuthProvider();
  //       //facebook.addScope('public_profile, email')
  //       fb.auth()
  //         .signInWithPopup(facebook)
  //         .then(result => {
  //           console.log(result);
  //           console.log(result.credential.accessToken);
  //           console.log(result.user);
  //           fb.firestore()
  //             .collection("users")
  //             .doc(result.user.uid)
  //             .get()
  //             .then(doc => {
  //               if (doc.data() === undefined) {
  //                 fb.firestore()
  //                   .collection("users")
  //                   .doc(result.user.uid)
  //                   .set({
  //                     firstname: result.user.displayName,
  //                     lastname: "",
  //                     email: result.user.email,
  //                     phone: ""
  //                   });
  //               }
  //             });
  //           // dispatch({ type: LOGIN_SUCCESS, payload: result.user });
  //           sessionStorage.setItem("user", result.user.uid);
  //           sessionStorage.setItem("isLogin", true);
  //         })
  //         .catch(error => {
  //           console.log(error.message);
  //         });
  //     });
  // };
};

export const loginGoogle = () => {
  // return dispatch => {
  //   fb.auth()
  //     .setPersistence(fb.auth.Auth.Persistence.SESSION)
  //     .then(() => {
  //       const google = new fb.auth.GoogleAuthProvider();
  //       // google.addScope('public_profile, email')
  //       fb.auth()
  //         .signInWithPopup(google)
  //         .then(result => {
  //           console.log(result);
  //           console.log(result.credential.accessToken);
  //           console.log(result.user);
  //           fb.firestore()
  //             .collection("users")
  //             .doc(result.user.uid)
  //             .get()
  //             .then(doc => {
  //               if (doc.data() === undefined) {
  //                 fb.firestore()
  //                   .collection("users")
  //                   .doc(result.user.uid)
  //                   .set({
  //                     firstname: result.user.displayName,
  //                     lastname: "",
  //                     email: result.user.email,
  //                     phone: ""
  //                   });
  //               }
  //             });
  //           // dispatch({ type: LOGIN_SUCCESS, payload: result.user });
  //           sessionStorage.setItem("user", result.user.uid);
  //           sessionStorage.setItem("isLogin", true);
  //         })
  //         .catch(error => {
  //           console.log(error.message);
  //         });
  //     });
  // };
};
