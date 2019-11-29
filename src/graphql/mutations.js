/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMember = `mutation CreateMember(
  $input: CreateMemberInput!
  $condition: ModelMemberConditionInput
) {
  createMember(input: $input, condition: $condition) {
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
export const updateMember = `mutation UpdateMember(
  $input: UpdateMemberInput!
  $condition: ModelMemberConditionInput
) {
  updateMember(input: $input, condition: $condition) {
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
export const deleteMember = `mutation DeleteMember(
  $input: DeleteMemberInput!
  $condition: ModelMemberConditionInput
) {
  deleteMember(input: $input, condition: $condition) {
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
export const createSite = `mutation CreateSite(
  $input: CreateSiteInput!
  $condition: ModelSiteConditionInput
) {
  createSite(input: $input, condition: $condition) {
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
export const updateSite = `mutation UpdateSite(
  $input: UpdateSiteInput!
  $condition: ModelSiteConditionInput
) {
  updateSite(input: $input, condition: $condition) {
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
export const deleteSite = `mutation DeleteSite(
  $input: DeleteSiteInput!
  $condition: ModelSiteConditionInput
) {
  deleteSite(input: $input, condition: $condition) {
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
export const createMembersSites = `mutation CreateMembersSites(
  $input: CreateMembersSitesInput!
  $condition: ModelMembersSitesConditionInput
) {
  createMembersSites(input: $input, condition: $condition) {
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
export const updateMembersSites = `mutation UpdateMembersSites(
  $input: UpdateMembersSitesInput!
  $condition: ModelMembersSitesConditionInput
) {
  updateMembersSites(input: $input, condition: $condition) {
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
export const deleteMembersSites = `mutation DeleteMembersSites(
  $input: DeleteMembersSitesInput!
  $condition: ModelMembersSitesConditionInput
) {
  deleteMembersSites(input: $input, condition: $condition) {
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
export const createPost = `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
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
export const updatePost = `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
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
export const deletePost = `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
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
export const createComment = `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
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
export const updateComment = `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
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
export const deleteComment = `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
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
export const createReport = `mutation CreateReport(
  $input: CreateReportInput!
  $condition: ModelReportConditionInput
) {
  createReport(input: $input, condition: $condition) {
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
export const updateReport = `mutation UpdateReport(
  $input: UpdateReportInput!
  $condition: ModelReportConditionInput
) {
  updateReport(input: $input, condition: $condition) {
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
export const deleteReport = `mutation DeleteReport(
  $input: DeleteReportInput!
  $condition: ModelReportConditionInput
) {
  deleteReport(input: $input, condition: $condition) {
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
export const createEvent = `mutation CreateEvent(
  $input: CreateEventInput!
  $condition: ModelEventConditionInput
) {
  createEvent(input: $input, condition: $condition) {
    id
    name
    createdAt
    queryName
  }
}
`;
export const updateEvent = `mutation UpdateEvent(
  $input: UpdateEventInput!
  $condition: ModelEventConditionInput
) {
  updateEvent(input: $input, condition: $condition) {
    id
    name
    createdAt
    queryName
  }
}
`;
export const deleteEvent = `mutation DeleteEvent(
  $input: DeleteEventInput!
  $condition: ModelEventConditionInput
) {
  deleteEvent(input: $input, condition: $condition) {
    id
    name
    createdAt
    queryName
  }
}
`;
