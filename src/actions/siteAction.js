

import { storageRef, fb } from "../config/index"

export const FETCH_REPORT = "FETCH_REPORT";
export const FETCH_SITES = "FETCH_SITES";
export const REPORT_FAIL = "REPORT_FAIL"
export const REPORT_LOADING = "REPORT_LOADING"
export const FETCHING = "FETCHING";
export const FETCHING_FAIL = "FETCHING_FAIL"
export const FETCH_SITE = "FETCH_SITE";
export const ADD_SITE = "ADD_SITE";
export const EDIT_SITE = "EDIT_SITE";
export const UPLOADING_START = "UPLOADING_START"
export const UPLOADING_SUCCESS = "UPLOADING_SUCCESS"
export const UPLOADING_FAIL = "UPLOADING_FAIL"
export const UPLOADING = "UPLOADING"
export const FETCH_IMAGE = "FETCH_IMAGE"
export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export const LOGOUT_REQUEST = "LOGOUT_REQUEST"
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
export const LOGOUT_FAILURE = "LOGOUT_FAILURE"
export const DELETE_SITE = "DELETE_SITE"
export const FETCH_VOLUNTEERS_EMAIL = "FETCH_VOLUNTEERS_EMAIL"
export const FETCH_VOLUNTEERS_ID = "FETCH_VOLUNTEERS_ID"
export const FETCH_USER = "FETCH_USER"
export const FETCH_REPORTS = "FETCH_REPORTS"
export const FETCH_SITES_USER = "FETCH_SITES_USER"
export const SITES_USER_LOADING = "SITES_USER_LOADING"
export const SITES_USER_FAIL="SITES_USER_FAIL"

//POST
export const addSite = (site) => {
    return (dispatch) => {
        // const firestore = getFirestore()
        fb.firestore().collection('sites').add({ ...site })
            .then((docRef) => {
                dispatch(fetchSites())
                window.location.href = `site/${docRef.id}`
            })

            .catch((err) => {
                console.log("errored")
                console.log(err)
            })
    }
}

//PUT
export const editSite = (id, site) => {
    return (dispatch) => {
        //const firestore = getFirestore()
        fb.firestore().collection('sites').doc(id)
            .set(site)
            .then(() => {
                dispatch(fetchSite(id))
                window.location.href = `${id}`
            })

            .catch((err) => {
                console.log("errored")
            })
    }
}

//DELETE
export const deleteSite = (id) => {
    return (dispatch) => {
        fb.firestore().collection('sites').doc(id).delete()
            .then(() => {
                console.log("Successfully deleted")
                dispatch(fetchSites())
                dispatch({ type: DELETE_SITE, payload: null })
            })
            .catch((error) => {
                console.log("errored")
            })
    }
}


//GET
export const fetchSites = () => {
    const list = [];
    //console.log('abc');
    return (dispatch) => {
        // const firestore = getFirestore()

        fb.firestore().collection('sites')
            .onSnapshot({ includeMetadataChanges: true }, querySnapshot => {
                querySnapshot.forEach(doc => {
                    list.push({
                        id: doc.id,
                        info: doc.data()
                    })

                })
                console.log(querySnapshot.metadata.fromCache)

                //console.log(list);
                dispatch({ type: FETCH_SITES, payload: list })


            })
    }
}

//GET BY ID
export const fetchSite = (siteId) => {
    return (dispatch) => {
        //const firestore = getFirestore()
        fb.firestore().collection('sites').doc(siteId).onSnapshot(doc => {
            //console.log(doc.data())
            if (doc.data() === undefined) {
                dispatch({ type: FETCHING_FAIL, payload: null })
            }
            else {

                const info = doc.data()
                dispatch({ type: FETCH_SITE, payload: info })
            }

        })

    }
}

//POST
export const addVolunteerEmail = (data) => {
    return (dispatch) => {
        fb.firestore().collection('volunteerEmail').add({ ...data })
            .then((docRef) => {
                console.log(docRef)
            })
            .catch((error) => {
                console.log('errored')
            })
    }
}

export const addVolunteerId = (data) => {
    return (dispatch) => {
        fb.firestore().collection('volunteerId').add({ ...data })
            .then((docRef) => {
                dispatch(fetchVolunteerId(data.site))
            })
            .catch((error) => {
                console.log('errored')
            })
    }
}

//GET
export const fetchVolunteerEmail = (id) => {
    const list = []
    return (dispatch) => {
        fb.firestore().collection('volunteerEmail').where('site', '==', id).onSnapshot(query => {
            query.forEach(docRef => {
                list.push(docRef.data().volunteer)
            })
            console.log(list)
            dispatch({ type: FETCH_VOLUNTEERS_EMAIL, payload: list })
        })
    }
}

//GET by Site ID
export const fetchVolunteerId = (id) => {
    const list = []
    const volunteers = []
    return (dispatch) => {
        fb.firestore().collection('volunteerId').where('site', '==', id).onSnapshot((query) => {
            query.forEach(docRef => {
                list.push(docRef.data().volunteer)
            })
            fb.firestore().collection('users').get()
                .then((query) => {
                    query.forEach(docRef => {
                        if (list.includes(docRef.id)) {
                            volunteers.push({
                                id: docRef.id,
                                data: docRef.data()
                            })
                        }
                    })
                    console.log(volunteers)
                    dispatch({ type: FETCH_VOLUNTEERS_ID, payload: volunteers })
                })
        })
    }
}


export const uploadImage = imageFile => {
    return (dispatch) => {

        try {
            const metadata = { contentType: "image/jpeg" }
            const uploadTask = storageRef.child("images/sites/" + imageFile.name).put(imageFile, metadata)
            dispatch({ type: UPLOADING_START })

            uploadTask.on("state_changed",
                function (snapshot) {
                    //completion percent
                    let progress = (snapshot.bytesTransferred / snapshot.totalByes) * 100
                    //floor: round down decimal number
                    dispatch({ type: UPLOADING, payload: Math.floor(progress) })
                },
                function (error) {
                    dispatch({ type: UPLOADING_FAIL, payload: error })
                },
                function () {
                    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                        dispatch({ type: UPLOADING_SUCCESS, payload: downloadURL })
                    })
                }

            )
        }
        catch (error) {
            console.log(error)
        }
    }
}

export const login = (email, password) => {
    console.log(email)
    return (dispatch) => {
        fb.auth().setPersistence(fb.auth.Auth.Persistence.SESSION)
            .then(() => {
                fb.auth().signInWithEmailAndPassword(email, password)
                    .then((user) => {
                        console.log(user)
                        dispatch({ type: LOGIN_SUCCESS, payload: user })
                        sessionStorage.setItem('user', user.user.uid)
                        sessionStorage.setItem('isLogin', true)
                    })
                    .catch((error) => {
                        console.log(error)
                        if(error.code==="auth/wrong-password"){
                            dispatch({type:LOGIN_FAILURE,payload:"Wrong password."})
                        }
                        else if(error.code==="auth/user-not-found"){
                            dispatch({type:LOGIN_FAILURE,payload:"User not found."})
                        }
                    })
            }

            )
    }
}

export const logout = () => {
    return (dispatch) => {
        fb.auth().signOut()
            .then(() => {
                dispatch({ type: LOGOUT_SUCCESS, payload: null })
                sessionStorage.clear()
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const verifyAuth = () => {
    return (dispatch) => {
        fb.auth().onAuthStateChanged(user => {
            if (user !== null) {
                dispatch({ type: LOGIN_SUCCESS, payload: user })
            }
        })
    }
}

export const signup = (newUser, password) => {
    return (dispatch) => {
        fb.auth().createUserWithEmailAndPassword(newUser.email, password)
            .then((user) => {
                console.log(user)
                fb.firestore().collection('users').doc(user.user.uid)
                    .set(newUser)
                    .then(() => {
                        dispatch(login(newUser.email, password))
                    })

            })
            .catch((error) => {
                console.log('errored')
            })
    }
}

export const fetchUser = (id) => {
    return (dispatch) => {
        fb.firestore().collection('users').doc(id).get()
            .then(user => {
                //console.log(user)
                dispatch({ type: FETCH_USER, payload: user.data() })
            })
            .catch(error => {
                console.log(error.code)
            })
    }
}

export const editUser = (id, user) => {
    return dispatch => {
        fb.firestore().collection('users').doc(id).set(user)
            .then(() => {
                dispatch(fetchUser(id))
            })
            .catch(error => {
                console.log(error.code)
            })
    }

}

export const fetchSitesByUser = (id) => {
    
    const list = []
    return dispatch => {
        dispatch({type:SITES_USER_LOADING})
        fb.firestore().collection('sites').where("owner", "==", id).get().then(query => {
            query.docs.forEach(doc => {
                list.push({
                    id: doc.id,
                    info: doc.data()

                });
            })

            dispatch({ type: FETCH_SITES_USER, payload: list })
        })
        // .catch(error => {
        //     console.log(error.code)
        // })
    }
}

export const fetchReports = () => {
    const list = []
    return dispatch => {
        fb.firestore().collection('reports').get()
            .then(query => {
                query.docs.forEach(doc => {
                    const obj = {
                        id: doc.id,
                        info: doc.data()
                    }
                    list.push(obj)

                })
                dispatch({ type: FETCH_REPORTS, payload: list })
            })
            .catch(error => {
                console.log(error.code === "permission-denied")
                if (error.code === "permission-denied") {
                    dispatch({ type: REPORT_FAIL, payload: null })
                }
            })
    }
}

export const fetchReport = (id) => {
    return dispatch => {
        fb.firestore().collection('reports').doc(id).onSnapshot(doc => {
            if (doc.data() === undefined) {
                dispatch({ type: REPORT_FAIL, payload: null })
            }
            else {
                dispatch({ type: FETCH_REPORT, payload: doc.data() })
            }
        })
        // .catch(error=>{
        //     console.log(error.code)
        // })
    }
}

export const updateReport = (obj) => {
    return dispatch => {
        dispatch({ type: REPORT_LOADING, payload: null })
        fb.firestore().collection('reports').doc(obj.siteId).set(obj.report)
            .then(() => {
                dispatch(fetchReport(obj.siteId))
            })
            .catch(error => {
                console.log(error.code)
            })
    }
}

export const loginFacebook = () => {
    return dispatch => {
        fb.auth().setPersistence(fb.auth.Auth.Persistence.SESSION)
            .then(() => {
                const facebook = new fb.auth.FacebookAuthProvider()
                //facebook.addScope('public_profile, email')
                fb.auth().signInWithPopup(facebook).then((result) => {
                    // console.log(result)
                    // console.log(result.credential.accessToken)
                    // console.log(result.user)

                    fb.firestore().collection('users').doc(result.user.uid).get()
                    .then(doc=>{
                        if(doc.data()===undefined){
                            fb.firestore().collection('users').doc(result.user.uid)
                            .set(
                                {
                                    firstname:result.user.displayName,
                                    lastname:'',
                                    email:result.user.email,
                                    phone: ''
                                }
                            )
                        }
                    })

                    dispatch({ type: LOGIN_SUCCESS, payload: result.user })
                    sessionStorage.setItem('user', result.user.uid)
                    sessionStorage.setItem('isLogin', true)



                })
               .catch(error => {
                    console.log(error.message)
                })

                }

            )

    }
}

export const loginGoogle = () => {
    return dispatch => {
        fb.auth().setPersistence(fb.auth.Auth.Persistence.SESSION)
            .then(() => {
                const google = new fb.auth.GoogleAuthProvider()
                // google.addScope('public_profile, email')
                fb.auth().signInWithPopup(google).then((result) => {
                    // console.log(result)
                    // console.log(result.credential.accessToken)
                    // console.log(result.user)

                    fb.firestore().collection('users').doc(result.user.uid).get()
                    .then(doc=>{
                        if(doc.data()===undefined){
                            fb.firestore().collection('users').doc(result.user.uid)
                            .set(
                                {
                                    firstname:result.user.displayName,
                                    lastname:'',
                                    email:result.user.email,
                                    phone: ''
                                }
                            )
                        }
                    })

                    dispatch({ type: LOGIN_SUCCESS, payload: result.user })
                    sessionStorage.setItem('user', result.user.uid)
                    sessionStorage.setItem('isLogin', true)



                })
               .catch(error => {
                    console.log(error.message)
                })

                }

            )

    }
}