import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import gql from "graphql-tag";
import { Auth } from "aws-amplify";
import config from "../../aws-exports";
//for graphql...
// import API, { graphqlOperation } from "@aws-amplify/api";
// import PubSub from "@aws-amplify/pubsub";
// import * as mutations from "../graphql/mutations";
import * as queries from "../../graphql/queries";
// import * as subscriptions from "../graphql/subscriptions";
// constances action types
export const FETCH_SITES = "FETCH_SITES";
export const FETCH_SITE = "FETCH_SITE";
export const ADD_SITE = "ADD_SITE";
export const EDIT_SITE = "EDIT_SITE";
export const UPLOADING_START = "UPLOADING_START";
export const UPLOADING_SUCCESS = "UPLOADING_SUCCESS";
export const UPLOADING_FAIL = "UPLOADING_FAIL";
export const UPLOADING = "UPLOADING";
export const FETCH_IMAGE = "FETCH_IMAGE";

// export const QUERY = "QUERY";
// export const SUBSCRIPTION = "SUBSCRIPTION";

//config an appsyncclient
export const client = new AWSAppSyncClient({
  url: config.aws_appsync_graphqlEndpoint,
  region: config.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    jwtToken: async () =>
      (await Auth.currentSession()).getIdToken().getJwtToken(),
    disableOffline: true
  }
});

export const fetchSites = () => {
  console.log("begin fetch sites....");
  client
    .query({
      query: gql(queries.listSites)
    })
    .then(({ data }) => {
      console.log("finish fetch sites....");
      console.log("client query result: ", data);
      //structure: data = {listSites: {listSites: {items:[info can find in queries.js in graphql]}}}
      //todo: put to redux...
    });

  return (dispatch, getState, { getFirestore }) => {};
};
