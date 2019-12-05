/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMember = `mutation CreateMember(
  $input: CreateMemberInput!
  $condition: ModelMemberConditionInput
) {
  createMember(input: $input, condition: $condition) {
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
    status
    ownedsites {
      items {
        id
        name
        long
        lat
        datetime
        createdAt
        location
        description
        imageURLs
        image
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
export const updateMember = `mutation UpdateMember(
  $input: UpdateMemberInput!
  $condition: ModelMemberConditionInput
) {
  updateMember(input: $input, condition: $condition) {
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
    status
    ownedsites {
      items {
        id
        name
        long
        lat
        datetime
        createdAt
        location
        description
        imageURLs
        image
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
export const deleteMember = `mutation DeleteMember(
  $input: DeleteMemberInput!
  $condition: ModelMemberConditionInput
) {
  deleteMember(input: $input, condition: $condition) {
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
    status
    ownedsites {
      items {
        id
        name
        long
        lat
        datetime
        createdAt
        location
        description
        imageURLs
        image
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
export const createSite = `mutation CreateSite(
  $input: CreateSiteInput!
  $condition: ModelSiteConditionInput
) {
  createSite(input: $input, condition: $condition) {
    id
    name
    long
    lat
    datetime
    createdAt
    location
    description
    imageURLs
    images {
      bucket
      region
      key
    }
    image
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
      status
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
export const updateSite = `mutation UpdateSite(
  $input: UpdateSiteInput!
  $condition: ModelSiteConditionInput
) {
  updateSite(input: $input, condition: $condition) {
    id
    name
    long
    lat
    datetime
    createdAt
    location
    description
    imageURLs
    images {
      bucket
      region
      key
    }
    image
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
      status
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
export const deleteSite = `mutation DeleteSite(
  $input: DeleteSiteInput!
  $condition: ModelSiteConditionInput
) {
  deleteSite(input: $input, condition: $condition) {
    id
    name
    long
    lat
    datetime
    createdAt
    location
    description
    imageURLs
    images {
      bucket
      region
      key
    }
    image
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
      status
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
      datetime
      createdAt
      location
      description
      imageURLs
      images {
        bucket
        region
        key
      }
      image
      kit
      container
      siteOwner {
        id
        email
        firstName
        lastName
        phone
        iconURL
        status
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
      status
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
      datetime
      createdAt
      location
      description
      imageURLs
      images {
        bucket
        region
        key
      }
      image
      kit
      container
      siteOwner {
        id
        email
        firstName
        lastName
        phone
        iconURL
        status
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
      status
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
      datetime
      createdAt
      location
      description
      imageURLs
      images {
        bucket
        region
        key
      }
      image
      kit
      container
      siteOwner {
        id
        email
        firstName
        lastName
        phone
        iconURL
        status
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
      status
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
      datetime
      createdAt
      location
      description
      imageURLs
      images {
        bucket
        region
        key
      }
      image
      kit
      container
      siteOwner {
        id
        email
        firstName
        lastName
        phone
        iconURL
        status
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
      status
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
      datetime
      createdAt
      location
      description
      imageURLs
      images {
        bucket
        region
        key
      }
      image
      kit
      container
      siteOwner {
        id
        email
        firstName
        lastName
        phone
        iconURL
        status
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
      status
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
      datetime
      createdAt
      location
      description
      imageURLs
      images {
        bucket
        region
        key
      }
      image
      kit
      container
      siteOwner {
        id
        email
        firstName
        lastName
        phone
        iconURL
        status
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
      status
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
        datetime
        createdAt
        location
        description
        imageURLs
        image
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
        status
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
      status
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
        datetime
        createdAt
        location
        description
        imageURLs
        image
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
        status
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
      status
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
        datetime
        createdAt
        location
        description
        imageURLs
        image
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
        status
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
      status
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
export const createReport = `mutation CreateReport(
  $input: CreateReportInput!
  $condition: ModelReportConditionInput
) {
  createReport(input: $input, condition: $condition) {
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
      datetime
      createdAt
      location
      description
      imageURLs
      images {
        bucket
        region
        key
      }
      image
      kit
      container
      siteOwner {
        id
        email
        firstName
        lastName
        phone
        iconURL
        status
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
      status
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
export const updateReport = `mutation UpdateReport(
  $input: UpdateReportInput!
  $condition: ModelReportConditionInput
) {
  updateReport(input: $input, condition: $condition) {
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
      datetime
      createdAt
      location
      description
      imageURLs
      images {
        bucket
        region
        key
      }
      image
      kit
      container
      siteOwner {
        id
        email
        firstName
        lastName
        phone
        iconURL
        status
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
      status
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
export const deleteReport = `mutation DeleteReport(
  $input: DeleteReportInput!
  $condition: ModelReportConditionInput
) {
  deleteReport(input: $input, condition: $condition) {
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
      datetime
      createdAt
      location
      description
      imageURLs
      images {
        bucket
        region
        key
      }
      image
      kit
      container
      siteOwner {
        id
        email
        firstName
        lastName
        phone
        iconURL
        status
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
      status
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
