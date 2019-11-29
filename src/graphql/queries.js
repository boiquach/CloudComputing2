/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMember = `query GetMember($id: ID!) {
  getMember(id: $id) {
    id
    iconURL
    email
    ownedsites {
      items {
        id
        name
        long
        lat
        createdAt
        address
        description
        imageURLs
        plans
        owner
      }
      nextToken
    }
    comments {
      items {
        id
        content
        createdAt
        owner
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
        owner
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
        owner
      }
      nextToken
    }
    owner
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
      iconURL
      email
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
      owner
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
    createdAt
    address
    description
    imageURLs
    plans
    siteOwner {
      id
      iconURL
      email
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
      owner
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
        owner
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
        owner
      }
      nextToken
    }
    owner
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
      createdAt
      address
      description
      imageURLs
      plans
      siteOwner {
        id
        iconURL
        email
        owner
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
      owner
    }
    nextToken
  }
}
`;
export const getMembersSites = `query GetMembersSites($id: ID!) {
  getMembersSites(id: $id) {
    id
    site {
      id
      name
      long
      lat
      createdAt
      address
      description
      imageURLs
      plans
      siteOwner {
        id
        iconURL
        email
        owner
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
      owner
    }
    member {
      id
      iconURL
      email
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
      owner
    }
    createdAt
  }
}
`;
export const listMembersSitess = `query ListMembersSitess(
  $filter: ModelMembersSitesFilterInput
  $limit: Int
  $nextToken: String
) {
  listMembersSitess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      site {
        id
        name
        long
        lat
        createdAt
        address
        description
        imageURLs
        plans
        owner
      }
      member {
        id
        iconURL
        email
        owner
      }
      createdAt
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
      createdAt
      address
      description
      imageURLs
      plans
      siteOwner {
        id
        iconURL
        email
        owner
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
      owner
    }
    comments {
      items {
        id
        content
        createdAt
        owner
      }
      nextToken
    }
    siteOwner {
      id
      iconURL
      email
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
      owner
    }
    owner
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
        createdAt
        address
        description
        imageURLs
        plans
        owner
      }
      comments {
        nextToken
      }
      siteOwner {
        id
        iconURL
        email
        owner
      }
      owner
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
        createdAt
        address
        description
        imageURLs
        plans
        owner
      }
      comments {
        nextToken
      }
      siteOwner {
        id
        iconURL
        email
        owner
      }
      owner
    }
    member {
      id
      iconURL
      email
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
      owner
    }
    owner
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
        owner
      }
      member {
        id
        iconURL
        email
        owner
      }
      owner
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
    description
    amount
    createdAt
    site {
      id
      name
      long
      lat
      createdAt
      address
      description
      imageURLs
      plans
      siteOwner {
        id
        iconURL
        email
        owner
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
      owner
    }
    creator {
      id
      iconURL
      email
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
      owner
    }
    owner
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
      description
      amount
      createdAt
      site {
        id
        name
        long
        lat
        createdAt
        address
        description
        imageURLs
        plans
        owner
      }
      creator {
        id
        iconURL
        email
        owner
      }
      owner
    }
    nextToken
  }
}
`;
export const getEvent = `query GetEvent($id: ID!) {
  getEvent(id: $id) {
    id
    name
    createdAt
    queryName
  }
}
`;
export const listEvents = `query ListEvents(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      queryName
    }
    nextToken
  }
}
`;
export const itemsByDate = `query ItemsByDate(
  $queryName: String
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  itemsByDate(
    queryName: $queryName
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      createdAt
      queryName
    }
    nextToken
  }
}
`;
