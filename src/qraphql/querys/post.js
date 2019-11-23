import gql from "graphql-tag";

export const EXCHANGE_RATES = gql`
  {
    posts {
      id
      title
      description
      url
      image {
        url
      }
      tags
      createdAt
      updatedAt
    }
  }
`;

export const FIND_ID_POST = (id) =>
  gql`
    {
      post(id: "${id}") {
        id
        title
        description
        article
        image {
          url
        }
        tags
        createdAt
        updatedAt
      }
    }
  `;