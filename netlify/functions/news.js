import fetch from 'node-fetch';

export async function handler(event) {
  const category = event.queryStringParameters.category || 'general';
  const apiKey = process.env.REACT_APP_NEWSAPI_KEY;
  
  const url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${apiKey}&page=1&pageSize=20`;

  const response = await fetch(url);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
}
