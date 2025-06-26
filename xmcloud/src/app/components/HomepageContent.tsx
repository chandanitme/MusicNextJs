// HomepageContent.tsx
'use client';


import React, { useEffect, useState } from 'react';
import { xmGraphQLClient } from '@/lib/xmclient';

const HOMEPAGE_QUERY = `
query{
  item(path: "/sitecore/content/home", language: "en") {
    id
    name
    path
  }
}
`


const HomepageContent = () => {
  const [data, setData] = useState<{ id: string; name: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    xmGraphQLClient.request(HOMEPAGE_QUERY)
      .then((res: any) => {
        setData(res.item);
        setLoading(false);
        console.log(res)
       
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
          console.log("error", err.message)
      });
  }, []);


  if (loading) return <section>Loading...</section>;
  if (error) return <section>Error: {error}</section>;
  if (!data) return <section>No data found.</section>;

  return (
    <section>
      <h1>{data.id}</h1>
      <p>{data.name}</p>
    </section>
  );
};

export default HomepageContent;
