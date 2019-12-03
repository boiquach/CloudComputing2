/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMember = `query GetMember($id: ID!) {
  getMember(id: $id) {
    id
    email
    firstName
    lastName
    phone
    iconURL
    image {
      bucket
      region
      key
    }
    ownedsites {
      items {
        id
        name
        long
        lat
        date
        createdAt
        location
        description
        imageURLs
        plans
        kit
        container
      }
      nextToken
    }
    comments {
      items {
        id
        content
        createdAt
      }
      nextToken
    }
    jointedSites {
      items {
        id
        createdAt
      }
      nextToken
    }
    posts {
      items {
        id
        title
        description
        createdAt
      }
      nextToken
    }
    reports {
      items {
        id
        date
        imageURLs
        description
        amount
        createdAt
      }
      nextToken
    }
  }
}
`;
export const listMembers = `query ListMembers(
  $filter: ModelMemberFilterInput
  $limit: Int
  $nextToken: String
) {
  listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      firstName
      lastName
      phone
      iconURL
      image {
        bucket
        region
        key
      }
      ownedsites {
        nextToken
      }
      comments {
        nextToken
      }
      jointedSites {
        nextToken
      }
      posts {
        nextToken
      }
      reports {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getSite = `query GetSite($id: ID!) {
  getSite(id: $id) {
    id
    name
    long
    lat
    date
    createdAt
    location
    description
    imageURLs
    images {
      bucket
      region
      key
    }
    plans
    kit
    container
    siteOwner {
      id
      email
      firstName
      lastName
      phone
      iconURL
      image {
        bucket
        region
        key
      }
      ownedsites {
        nextToken
      }
      comments {
        nextToken
      }
      jointedSites {
        nextToken
      }
      posts {
        nextToken
      }
      reports {
        nextToken
      }
    }
    members {
      items {
        id
        createdAt
      }
      nextToken
    }
    posts {
      items {
        id
        title
        description
        createdAt
      }
      nextToken
    }
    reports {
      items {
        id
        date
        imageURLs
        description
        amount
        createdAt
      }
      nextToken
    }
  }
}
`;
export const listSites = `query ListSites(
  $filter: ModelSiteFilterInput
  $limit: Int
  $nextToken: String
) {
  listSites(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      long
      lat
      date
      createdAt
      location
      description
      imageURLs
      images {
        bucket
        region
        key
      }
      plans
      kit
      container
      siteOwner {
        id
        email
        firstName
        lastName
        phone
        iconURL
      }
      members {
        nextToken
      }
      posts {
        nextToken
      }
      reports {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    title
    description
    createdAt
    site {
      id
      name
      long
      lat
      date
      createdAt
      location
      description
      imageURLs
      images {
        bucket
        region
        key
      }
      plans
      kit
      container
      siteOwner {
        id
        email
        firstName
        lastName
        phone
        iconURL
      }
      members {
        nextToken
      }
      posts {
        nextToken
      }
      reports {
        nextToken
      }
    }
    comments {
      items {
        id
        content
        createdAt
      }
      nextToken
    }
    siteOwner {
      id
      email
      firstName
      lastName
      phone
      iconURL
      image {
        bucket
        region
        key
      }
      ownedsites {
        nextToken
      }
      comments {
        nextToken
      }
      jointedSites {
        nextToken
      }
      posts {
        nextToken
      }
      reports {
        nextToken
      }
    }
  }
}
`;
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      createdAt
      site {
        id
        name
        long
        lat
        date
        createdAt
        location
        description
        imageURLs
        plans
        kit
        container
      }
      comments {
        nextToken
      }
      siteOwner {
        id
        email
        firstName
        lastName
        phone
        iconURL
      }
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    content
    createdAt
    post {
      id
      title
      description
      createdAt
      site {
        id
        name
        long
        lat
        date
        createdAt
        location
        description
        imageURLs
        plans
        kit
        container
      }
      comments {
        nextToken
      }
      siteOwner {
        id
        email
        firstName
        lastName
        phone
        iconURL
      }
    }
    member {
      id
      email
      firstName
      lastName
      phone
      iconURL
      image {
        bucket
        region
        key
      }
      ownedsites {
        nextToken
      }
      comments {
        nextToken
      }
      jointedSites {
        nextToken
      }
      posts {
        nextToken
      }
      reports {
        nextToken
      }
    }
  }
}
`;
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      createdAt
      post {
        id
        title
        description
        createdAt
      }
      member {
        id
        email
        firstName
        lastName
        phone
        iconURL
      }
    }
    nextToken
  }
}
`;
export const getReport = `query GetReport($id: ID!) {
  getReport(id: $id) {
    id
    date
    imageURLs
    image {
      bucket
      region
      key
    }
    description
    amount
    createdAt
    site {
      id
      name
      long
      lat
      date
      createdAt
      location
      description
      imageURLs
      images {
        bucket
        region
        key
      }
      plans
      kit
      container
      siteOwner {
        id
        email
        firstName
        lastName
        phone
        iconURL
      }
      members {
        nextToken
      }
      posts {
        nextToken
      }
      reports {
        nextToken
      }
    }
    creator {
      id
      email
      firstName
      lastName
      phone
      iconURL
      image {
        bucket
        region
        key
      }
      ownedsites {
        nextToken
      }
      comments {
        nextToken
      }
      jointedSites {
        nextToken
      }
      posts {
        nextToken
      }
      reports {
        nextToken
      }
    }
  }
}
`;
export const listReports = `query ListReports(
  $filter: ModelReportFilterInput
  $limit: Int
  $nextToken: String
) {
  listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      date
      imageURLs
      image {
        bucket
        region
        key
      }
      description
      amount
      createdAt
      site {
        id
        name
        long
        lat
        date
        createdAt
        location
        description
        imageURLs
        plans
        kit
        container
      }
      creator {
        id
        email
        firstName
        lastName
        phone
        iconURL
      }
    }
    nextToken
  }
}
`;
