// HomepageContent.tsx
'use client';


import React, { useEffect, useState } from 'react';
import { xmGraphQLClient } from '@/lib/xmclient';
import { Field } from '@/interfaces/Field';
import { Item } from '@/interfaces/Item';
import { parseSitecoreLinkField } from '@/helper/sitecoreHelper';

const KGCD_SITE = process.env.NEXT_PUBLIC_KGCD_SITE || "kgcdemo";

const herocomponent_query = `
 query  heropcomponnetdata{
  item(path: "/sitecore/content/demo-sites/kgcdemo/Data/Heroitem", language: "en") {
  
   
    fields {
      name
      value
    }
  }
}
`

interface HeropComponentDataResponse {
  item: Item;
}

const HeroSection = () => {
  const [fields, setFields] = useState<Field[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    xmGraphQLClient.request<HeropComponentDataResponse>(herocomponent_query)
      .then((res) => {
        setFields(res.item.fields || []);
        setLoading(false);
        console.log(res)
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
        console.log("error", err.message)
      });
  }, []);

  // Convert fields array to an object with field names as properties
  const fieldsObj = React.useMemo(() => {
    const obj: Record<string, string> = {};
    fields.forEach(f => {
      obj[f.name] = f.value;
    });
    return obj;
  }, [fields]);

  // Parse ResumeApplication, LoginView, and ConsolidationLink as Sitecore link fields
  const resumeLink = parseSitecoreLinkField(fieldsObj.ResumeApplication, 'Resume Application');
  const loginViewLink = parseSitecoreLinkField(fieldsObj.LoginView, 'Login to view');
  const consolidationLink = parseSitecoreLinkField(fieldsObj.ConsolidationLink, 'Apply online');

  const resumeUrl = resumeLink.url;
  const loginViewUrl = loginViewLink.url;
  const consolidationUrl = consolidationLink.url;

  if (loading) return <section>Loading...</section>;
  if (error) return <section>Error: {error}</section>;
  if (!fields || fields.length === 0) return <section>No data found.</section>;

  return (
    <section className="flex flex-col md:flex-row w-full min-h-[400px]">
      {/* Left: Background image with overlay and text */}
      <div className="relative flex-1 flex items-center justify-center min-h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/DA/hero-banner-img.png')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 p-8 md:p-16">
          <div className="mb-6">
            <h2 className="text-white text-xl font-bold mb-1">Simple Loans <span className="text-red-500">&#8226;</span></h2>
            <h2 className="text-white text-xl font-bold">Better Service <span className="text-red-500">&#8226;</span></h2>
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-8 leading-tight max-w-xl">
           {fieldsObj.SubTitle} <span className="text-[#ff4b5c]">R300 000</span>
          </h1>
          <div className="flex flex-col gap-2 max-w-xs">
            <a href="#" className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded mb-2 text-center transition">{fieldsObj.ApplyOnline}</a>
            <a href={resumeUrl} className="text-white underline text-center">{resumeLink.text || fieldsObj.ResumeApplication}</a>
          </div>
        </div>
      </div>
      {/* Right: Info cards */}
      <div className="flex flex-col flex-shrink-0 w-full md:w-[420px]">
        <div className="flex-1 bg-[#17695b] p-8 flex flex-col justify-center min-h-[200px]">
          <h3 className="text-white text-2xl font-bold mb-2"> {fieldsObj.PulseTitle}</h3>
          <p className="text-white text-lg mb-6">{fieldsObj.PulseDescription}</p>
          <a href={loginViewUrl} className="text-white text-right font-semibold flex items-center gap-2 hover:underline">{loginViewLink.text} <span>&rarr;</span></a>
        </div>
        <div className="flex-1 bg-[#20544a] p-8 flex flex-col justify-center min-h-[200px]">
          <h3 className="text-white text-2xl font-bold mb-2">{fieldsObj.ConsolidationTitle}</h3>
          <p className="text-white text-lg mb-6">{fieldsObj.ConsolidationDescription}</p>
          <a href={consolidationUrl} className="text-white text-right font-semibold flex items-center gap-2 hover:underline">{consolidationLink.text} <span>&rarr;</span></a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
