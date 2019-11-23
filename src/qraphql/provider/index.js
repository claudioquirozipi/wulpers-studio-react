import "cross-fetch/polyfill";
import React from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import { ApolloProvider } from "@apollo/react-hooks";

const createApolloClient = (cache = {}) =>
  new ApolloClient({
    ssrMode: typeof window !== "undefined",
    cache: new InMemoryCache().restore(cache),
    link: createUploadLink({ uri: "http://167.172.232.214/graphql" })
  });

export default Component => {
  const Wrapper = (props) => {
    console.log("wrapper", props);
    let cache = undefined;
    if (typeof window !== "undefined") {
      cache = (window).cache;
    }
    const apolloClient = createApolloClient(cache);
    cache = apolloClient.cache.extract();
    if (cache && typeof window !== "undefined") {
      (window).cache = cache;
    }
    return (
      <ApolloProvider client={apolloClient}>
        <Component props={props}/>
      </ApolloProvider>
    );
  };
  return Wrapper;
};