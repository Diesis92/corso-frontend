window.onload = function () {
    const loader = new DataLoader()
    const ul = document.getElementById("articles")
    ul.innerHTML = ""
    loader.getAllPosts(
        a => a.forEach(
            function (p) {
                var li = document.createElement("li")
                var a = document.createElement("a")
                a.innerText = p.title
                a.setAttribute("href", "#")
                li.appendChild(a)
                ul.appendChild(li)
                a.onclick = function () {
                    const details = document.getElementById("details")
                    details.innerHTML = ""
                    const h1 = document.createElement("h3")
                    h1.innerText = p.title
                    const article = document.createElement("div")
                    article.innerText = p.body
                    details.appendChild(h1)
                    details.appendChild(article)
                }
            }),
        e => console.log(e)
    )
}