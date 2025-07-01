// HomepageContent.tsx
'use client';


import React, { useEffect, useState } from 'react';
import { xmGraphQLClient } from '@/lib/xmclient';
import { Field } from '@/interfaces/Field';
import { Item } from '@/interfaces/Item';

const KGCD_SITE = process.env.NEXT_PUBLIC_KGCD_SITE || "kgcdemo";

const HOMEPAGE_QUERY = `
query GetHomePageData {
  layout(site: "${KGCD_SITE}", routePath: "/", language: "en") {
    item {
      name
      displayName
      fields {
        name
        value
      }
    }
  }
}
`

interface HomePageDataResponse {
  layout: {
    item: Item;
  };
}

const HomepageContent = () => {
  const [fields, setFields] = useState<Field[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    xmGraphQLClient.request<HomePageDataResponse>(HOMEPAGE_QUERY)
      .then((res) => {
        setFields(res.layout.item.fields || []);
        setLoading(false);
        console.log(res)
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
        console.log("error", err.message)
      });
  }, []);

  if (loading) return <section>Loading...</section>;
  if (error) return <section>Error: {error}</section>;
  if (!fields || fields.length === 0) return <section>No data found.</section>;

  return (
    <section className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Fields</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left font-semibold">Key</th>
              <th className="py-2 px-4 border-b text-left font-semibold">Value</th>
            </tr>
          </thead>
          <tbody>
            {fields.map((field, idx) => (
              <tr key={idx} className="even:bg-gray-50 hover:bg-gray-100 transition-colors">
                <td className="py-2 px-4 border-b font-medium">{field.name}</td>
                <td className="py-2 px-4 border-b">{String(field.value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default HomepageContent;
