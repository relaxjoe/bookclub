import {gql} from '@apollo/client';
export const QUERY_ME = gql`

query Me {
  me {
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}`;