/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMember = `subscription OnCreateMember($owner: String!) {
  onCreateMember(owner: $owner) {
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
export const onUpdateMember = `subscription OnUpdateMember($owner: String!) {
  onUpdateMember(owner: $owner) {
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
export const onDeleteMember = `subscription OnDeleteMember($owner: String!) {
  onDeleteMember(owner: $owner) {
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
export const onCreateSite = `subscription OnCreateSite($owner: String!) {
  onCreateSite(owner: $owner) {
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
export const onUpdateSite = `subscription OnUpdateSite($owner: String!) {
  onUpdateSite(owner: $owner) {
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
export const onDeleteSite = `subscription OnDeleteSite($owner: String!) {
  onDeleteSite(owner: $owner) {
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
export const onCreateMembersSites = `subscription OnCreateMembersSites {
  onCreateMembersSites {
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
export const onUpdateMembersSites = `subscription OnUpdateMembersSites {
  onUpdateMembersSites {
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
export const onDeleteMembersSites = `subscription OnDeleteMembersSites {
  onDeleteMembersSites {
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
export const onCreatePost = `subscription OnCreatePost($owner: String!) {
  onCreatePost(owner: $owner) {
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
export const onUpdatePost = `subscription OnUpdatePost($owner: String!) {
  onUpdatePost(owner: $owner) {
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
export const onDeletePost = `subscription OnDeletePost($owner: String!) {
  onDeletePost(owner: $owner) {
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
export const onCreateComment = `subscription OnCreateComment($owner: String!) {
  onCreateComment(owner: $owner) {
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
export const onUpdateComment = `subscription OnUpdateComment($owner: String!) {
  onUpdateComment(owner: $owner) {
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
export const onDeleteComment = `subscription OnDeleteComment($owner: String!) {
  onDeleteComment(owner: $owner) {
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
export const onCreateReport = `subscription OnCreateReport($owner: String!) {
  onCreateReport(owner: $owner) {
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
export const onUpdateReport = `subscription OnUpdateReport($owner: String!) {
  onUpdateReport(owner: $owner) {
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
export const onDeleteReport = `subscription OnDeleteReport($owner: String!) {
  onDeleteReport(owner: $owner) {
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
export const onCreateEvent = `subscription OnCreateEvent {
  onCreateEvent {
    id
    name
    createdAt
    queryName
  }
}
`;
export const onUpdateEvent = `subscription OnUpdateEvent {
  onUpdateEvent {
    id
    name
    createdAt
    queryName
  }
}
`;
export const onDeleteEvent = `subscription OnDeleteEvent {
  onDeleteEvent {
    id
    name
    createdAt
    queryName
  }
}
`;
