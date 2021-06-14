const url =
  "https://newsapi.org/v2/top-headlines?q=covid&country=sg\&us&apiKey=";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}