import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://withcoderstestbackend.vercel.app/",
    cache: new InMemoryCache(),
});

export default client;