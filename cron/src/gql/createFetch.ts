import { createApolloFetch } from 'apollo-fetch';

// eslint-disable-next-line import/prefer-default-export
const apolloFetch = createApolloFetch({ uri: 'http://localhost:4000/graphql' });

export default apolloFetch;
