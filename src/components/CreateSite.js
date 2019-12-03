import React, { Component } from "react";
import SiteForm from "./SiteForm";
import { connect } from "react-redux";
import { createSite } from "../Redux/actions/siteAction";
// import { withAuthenticator } from "aws-amplify-react";

class CreateSite extends Component {
  render() {
    return (
      <div>
        <SiteForm onSubmit={this.props.handleSubmit} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    sites: state.sites.sites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: site => {
      //todo: check required info of site to create query in graphql
      site.user = "abc";

      dispatch(createSite(site));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateSite);
// export default connect(mapStateToProps, mapDispatchToProps)(withAuthenticator(CreateSite) );
