export default function (url) {
  const arr = url.split('&');
  const result = {};
  arr.forEach((item) => {
    const items = item.split('=');
    result[items[0]] = items[1];
  });
  return result;
}