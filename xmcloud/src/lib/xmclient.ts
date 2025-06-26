// xmclient.ts
// Add your client logic here

import { GraphQLClient } from 'graphql-request';

// Replace with your Sitecore XM Cloud GraphQL endpoint
const endpoint = process.env.NEXT_PUBLIC_XMCLOUD_GRAPHQL_ENDPOINT || 'https://<your-xmcloud-app>.sitecorecloud.io/api/graphql/';
console.log(endpoint)

console.log(process.env.NEXT_PUBLIC_XMCLOUD_API_KEY)
export const xmGraphQLClient = new GraphQLClient(endpoint, {
  headers: {
    'sc_apikey': process.env.NEXT_PUBLIC_XMCLOUD_API_KEY || '',
    // If your XM Cloud instance requires an API key or token, set it here
    // Authorization: `Bearer ${process.env.NEXT_PUBLIC_XMCLOUD_API_KEY}`
  },
});

// Usage: import { xmGraphQLClient } from './xmclient';
