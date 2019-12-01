import {REPORT_LOADING,REPORT_FAIL,FETCH_REPORT,FETCHING_FAIL,FETCH_REPORTS,FETCH_USER,FETCH_VOLUNTEERS_ID,FETCH_VOLUNTEERS_EMAIL,DELETE_SITE,LOGOUT_SUCCESS,FETCH_SITES, FETCH_SITE, UPLOADING, UPLOADING_FAIL,UPLOADING_START,UPLOADING_SUCCESS, FETCH_IMAGE, LOGIN_SUCCESS} from "../actions/siteAction";

const initialState={
    sites: [],
    site:{},
    image_error:null,
    image_percent:null,
    image_showProgress:false,
    image:'',
    user: {},
    userId:sessionStorage.getItem('user'),
    isLogin: sessionStorage.getItem('isLogin'),
    volunteerEmail:[],
    volunteerObject:[],
    reports:[],
    fetching:true,
    fetchingFail:false,
    report:{},
    fetchingReport:true,
    reportFail:false
}

export default (state=initialState,action)=>{
    switch(action.type){
        case FETCHING_FAIL:
            return {
                ...state,
                fetchingFail:true,
                fetching:false
                
            }
        case FETCH_SITES:
            return {
                ...state,
                sites:action.payload
                
            }
        case FETCH_SITE:{
            return {
                ...state,
                site:action.payload,
                fetching:false
            }
        }
        case UPLOADING:{
            return{
                ...state,
                image_percent:action.payload
                
            }
        }
        case UPLOADING_START:{
            return{
                ...state,
                image_percent:0
            }
        }
        case UPLOADING_SUCCESS:{
            return{
                ...state,
                image_error:false,
                image_percent:null,
                image:action.payload
            }
        }
        case UPLOADING_FAIL:{
            return{
                ...state,
                image_error:action.payload
            }
        }
        case FETCH_IMAGE:{
            return{
                ...state,
                image:action.payload
            }
        }
        case LOGIN_SUCCESS:{
            console.log(action.payload)
            return{
                ...state,
                user:action.payload,
                isLogin:true

                
            }
        }
        case LOGOUT_SUCCESS:{
            return{
                ...state,
                user:{},
                userId:null,
                isLogin:false
            }
        }

        case DELETE_SITE:{
            return{
                ...state,
                site:{}
            }
        }

        case FETCH_VOLUNTEERS_EMAIL:{
            console.log("emails: " + action.payload)
            return{
                ...state,
                volunteerEmail:action.payload
            }
        }
        case FETCH_VOLUNTEERS_ID:{
            console.log("objects: " + action.payload)
            return{
                ...state,
                volunteerObject:action.payload
            }
        }
        case FETCH_USER:{
            //console.log(action.payload)
            return{
                ...state,
                user:action.payload
            }
        }
        case FETCH_REPORTS:{
            return{
                ...state,
                reports:action.payload
            }
        }
        case FETCH_REPORT:{
            return{
                ...state,
                report:action.payload,
                fetchingReport:false,
            }
        }
        case REPORT_FAIL:{
            return{
                ...state,
                reportFail:true,
                fetchingReport:false
            }
        }
        case REPORT_LOADING:{
            return{
                ...state,
                fetchingReport:true,
                reportFail:false
            }
        }

        default:
            return state;
    }
}