/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMember = `subscription OnCreateMember {
  onCreateMember {
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
export const onUpdateMember = `subscription OnUpdateMember {
  onUpdateMember {
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
export const onDeleteMember = `subscription OnDeleteMember {
  onDeleteMember {
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
export const onCreateSite = `subscription OnCreateSite {
  onCreateSite {
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
export const onUpdateSite = `subscription OnUpdateSite {
  onUpdateSite {
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
export const onDeleteSite = `subscription OnDeleteSite {
  onDeleteSite {
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
export const onCreateMembersSites = `subscription OnCreateMembersSites {
  onCreateMembersSites {
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
export const onUpdateMembersSites = `subscription OnUpdateMembersSites {
  onUpdateMembersSites {
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
export const onDeleteMembersSites = `subscription OnDeleteMembersSites {
  onDeleteMembersSites {
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
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
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
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
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
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
export const onCreateReport = `subscription OnCreateReport {
  onCreateReport {
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
export const onUpdateReport = `subscription OnUpdateReport {
  onUpdateReport {
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
export const onDeleteReport = `subscription OnDeleteReport {
  onDeleteReport {
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
