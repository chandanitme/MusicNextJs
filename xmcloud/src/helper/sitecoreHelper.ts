// sitecoreHelper.ts


// General utility to parse Sitecore link field (XML or plain text)
export function parseSitecoreLinkField(value: string | undefined, defaultText: string): { text: string; url: string } {
  if (value && value.trim().startsWith('<link')) {
    const matchText = value.match(/text=\"(.*?)\"/);
    const matchUrl = value.match(/url=\"(.*?)\"/);
    return {
      text: matchText ? matchText[1] : defaultText,
      url: matchUrl ? matchUrl[1] : '#',
    };
  }
  return { text: value || defaultText, url: '#' };
}
