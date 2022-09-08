export const prettifyText = (text: string) => {
  const result = text.toLowerCase().split('_').map((item: string) => item.charAt(0).toUpperCase() + item.slice(1) + '');
  return result.toString().replace(/,/g, ' ');
};