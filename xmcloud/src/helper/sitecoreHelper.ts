// sitecoreHelper.ts
// Helper to parse Sitecore link XML fields

export function parseSitecoreLinkXml(xml: string): { text?: string; url?: string } {
  const matchText = xml.match(/text=\"(.*?)\"/);
  const matchUrl = xml.match(/url=\"(.*?)\"/);
  return {
    text: matchText ? matchText[1] : 'Resume Application',
    url: matchUrl ? matchUrl[1] : '#',
  };
}
