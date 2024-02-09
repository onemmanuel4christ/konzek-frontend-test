import { ApolloClient, InMemoryCache } from "@apollo/client";
const baseUrl = import.meta.env.VITE_BASE_URL;

const client = new ApolloClient({
  uri: baseUrl,
  cache: new InMemoryCache(),
});

export default client;
