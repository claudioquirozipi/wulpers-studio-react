import gql from "graphql-tag";

export const CREATE_CONTACT = gql`
  mutation CreateContact($input: createContactInput) {
    createContact(input: $input) {
      contact {
        id
      }
    }
  }
`;
