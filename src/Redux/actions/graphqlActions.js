import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import gql from "graphql-tag";
import { Auth } from "aws-amplify";
import config from "../../aws-exports";
//for graphql...
import API, { graphqlOperation } from "@aws-amplify/api";
// import PubSub from "@aws-amplify/pubsub";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
// import * as subscriptions from "../../graphql/subscriptions";
// constances action types
import * as siteActionTypes from "./actionTypes";

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
  return dispatch => {
    console.log("begin fetch sites....");
    client
      .query({
        query: gql(queries.listSites)
      })
      .then(({ data }) => {
        console.log("finish fetch sites....");
        console.log("client query result: ", data);
        dispatch({
          type: siteActionTypes.FETCH_SITES,
          payload: data.listSites.items
        });
        //structure: data = {listSites: {listSites: {items:[info can find in queries.js in graphql]}}}
        //todo: put to redux...
      });
  };
};

// async function getUserID() {
//   return await Auth.currentAuthenticatedUser();
// }
// getUserID().then(user => {
//   console.log("userid owner: ", user.username);
// });

export const createSite = newSite => {
  return dispatch => {
    console.log("begin create sites....", newSite);
    API.graphql(graphqlOperation(mutations.createSite, { input: newSite }))
      .then(result => {
        console.log("mutation result: site", result.data.createSite);
        dispatch({
          type: siteActionTypes.ADD_SITE,
          payload: result.data.createSite
        });
      })
      .catch(error => console.log("mutation error: ", error));
  };
};
export const editSite = updatedSite => {
  return dispatch => {
    console.log("begin update sites....", updatedSite);
    API.graphql(graphqlOperation(mutations.updateSite, { input: updatedSite }))
      .then(result => {
        console.log("mutation result: site", result.data.updateSite);
        dispatch({
          type: siteActionTypes.EDIT_SITE,
          payload: result.data.updateSite
        });
      })
      .catch(error => console.log("mutation error: ", error));
  };
};
