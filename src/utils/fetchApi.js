

export async function fetchApi(url, method, data) {
  // using fetch api client
  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return res.json();
}