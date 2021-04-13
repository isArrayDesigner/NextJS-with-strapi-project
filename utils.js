const baseUrl = 'https://strapi-t9rw.onrender.com'
async function strapiData(path, params = null) {
  let url
  if (params !== null) {
    url = baseUrl + '/' + path + '/'+ params
  } else {
    url = baseUrl + '/'+ path
  }
  console.log(url)
  const response = await fetch(url)
  const data = await response.json()
  return data
}
export { baseUrl, strapiData }