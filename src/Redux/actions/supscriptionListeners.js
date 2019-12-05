import { Hub, graphqlOperation } from "aws-amplify";
import API from "@aws-amplify/api";
import * as subscriptions from "../../graphql/subscriptions";
// React Notification
import { NotificationManager } from "react-notifications";

export const newMemberListenner = () => {
  API.graphql(graphqlOperation(subscriptions.onCreateMembersSites)).subscribe({
    next: newMemberJointed => {
      console.log(
        "from subscribe: new member jointed : ",
        newMemberJointed.value.data.onCreateMembersSites
      );
      console.log(
        " new member jointed : ",
        newMemberJointed.value.data.onCreateMembersSites.member.firstName
      );
      console.log(
        " to site : ",
        newMemberJointed.value.data.onCreateMembersSites.site.name
      );
      NotificationManager.success(
        "New member " +
          newMemberJointed.value.data.onCreateMembersSites.member.firstName +
          " has jointed to site: " +
          newMemberJointed.value.data.onCreateMembersSites.site.name,
        "Successful!",
        8000
      );
      // this.props.newSiteCreated(newSite.value.data.onCreateSite);
    }
  });
};

//create listen to new post into jointed site:
export const newPostListenner = () => {
  API.graphql(graphqlOperation(subscriptions.onCreatePost)).subscribe({
    next: newPost => {
      console.log(
        "from subscribe: site owner post new info : ",
        newPost.value.data.onCreatePost
      );
      console.log(
        "post title: ",
        newPost.value.data.onCreatePost.title,
        "   post description: ",
        newPost.value.data.onCreatePost.description
      );
      console.log(
        "on site: ",
        newPost.value.data.onCreatePost.site.name,
        "    site owner: ",
        newPost.value.data.onCreatePost.siteOwner.firstName
      );
      NotificationManager.success(
        "New post " +
          newPost.value.data.onCreatePost.title +
          " has created to site: " +
          newPost.value.data.onCreatePost.site.name,
        "Successful!",
        8000
      );
    }
  });
};

export const newSiteListenner = () => {
  API.graphql(graphqlOperation(subscriptions.onCreateSite)).subscribe({
    next: newSite => {
      console.log(
        "from subscribe: new site created : ",
        newSite.value.data.onCreateSite
      );
      NotificationManager.success(
        "New site created: " + newSite.value.data.onCreateSite.name,
        "Successful!",
        8000
      );
      // this.props.newSiteCreated(newSite.value.data.onCreateSite);
    }
  });
};

export const newCommentListenner = () => {
  API.graphql(graphqlOperation(subscriptions.onCreateComment)).subscribe({
    next: newComment => {
      console.log(
        "from subscribe: new comment created : ",
        newComment.value.data.onCreateComment
      );
      // this.props.newSiteCreated(newSite.value.data.onCreateSite);
    }
  });
};
export const newReportListenner = () => {
  API.graphql(graphqlOperation(subscriptions.onCreateReport)).subscribe({
    next: newReport => {
      console.log(
        "from subscribe: new site created : ",
        newReport.value.data.onCreateReport
      );
      // this.props.newSiteCreated(newSite.value.data.onCreateSite);
    }
  });
};

export const userAuthenticationListenner = () => {
  Hub.listen("auth", data => {
    const { payload } = data;
    console.log("A new auth event has happened: ", data);
    if (payload.event === "signIn") {
      console.log("a user has signed in!", payload.username);
      console.log("token: ", payload.signInUserSession);
    }
    if (payload.event === "signOut") {
      console.log("a user has signed out!" + payload.message, payload.data);
    }
  });
};
