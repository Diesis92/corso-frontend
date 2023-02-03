function DataLoader() {
    const get_all_posts = "https://jsonplaceholder.typicode.com/posts"
    const get_post = "https://jsonplaceholder.typicode.com/posts/id"

    function sendRequest(method, req, ok, error) {
        var r = new XMLHttpRequest()
        r.onload = function () {
            if (r.status == 200)
                ok(JSON.parse(r.responseText))
            else
                error(r.status, r.responseText)
        }
        r.onerror = function () {
            error()
        }
        r.open(method, req)
        r.send()
    }

    function getAllPosts(okCallback, errorCallback) {
        sendRequest("GET", get_all_posts, okCallback, errorCallback)
    }

    function getPost(id, okCallback, errorCallback) {
        sendRequest("GET", get_post.replace("id", id), okCallback, errorCallback)
    }

    return {
        getSinglePost: getPost,
        getAllPosts: getAllPosts
    }
}