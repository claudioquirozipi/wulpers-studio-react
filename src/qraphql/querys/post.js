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
      createdAt
      updatedAt
    }
  }
`;

export const FIND_URL_POST = url =>
  gql`
    {
      postByUrl(url: "${url}") {
        id
        title
        description
        article
        image {
          url
        }
        createdAt
        updatedAt
      }
    }
  `;
