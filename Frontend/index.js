main()

async function main() {
  const article = await getArticles()
  
  for (article of articles) {
    displayArticles(articles)
  }
    
}

function getArticles() {
  return fetch("http://localhost:3000/api/cameras")
  .then(function(httpBodyResponse) {
    return httpBodyResponse.json()
  })
  .then(function(articles) {
    return articles
  })
  .catch(function(error) {
    alert(error)
  })
}

function displayArticles(article) {
  const templateElt = document.getElementById("templateArticle")
  const clone = document.importNode(templateElt.content, true)
  
  cloneElt.getElementById("blog_title").textContent = article.title
  cloneElt.getElementById("blog_body").textContent = article.body
  
  document.getElementById("main").appendChild(cloneElt)
}