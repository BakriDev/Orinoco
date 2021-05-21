main()

async function main() {
    const json = await getArticles()

    for (const articles of json) {

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
    const cloneElt = document.importNode(templateElt.content, true)

    cloneElt.getElementById("article_url").href = article._id
    cloneElt.getElementById("article_image").src = article.imageUrl
    cloneElt.getElementById("article_name").textContent = article.name
    cloneElt.getElementById("article_price").textContent = article.price

    document.getElementById("main").appendChild(cloneElt)
}