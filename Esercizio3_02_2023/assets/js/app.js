window.addEventListener("load", () => {
    const loader = new ApiLoader("https://jsonplaceholder.typicode.com/");
    const albumList = document.querySelector("#album-list");
    albumList.innerHTML = "";
    loader.get("albums", albums => albums.forEach(album => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(album.title));
        albumList.appendChild(li);
        li.addEventListener("click", () => {
            loader.get(`albums/${album.id}/photos`, photos => new PhotoSlide(photos), (e, s) => console.log(e, s));
        });
    }), (e, s) => console.log(e, s));
});
class PhotoSlide {
    constructor(photos) {
        this.photos = photos;
        this._container = document.getElementsByClassName("photos")[0];
        this._slide = document.getElementsByClassName("content")[0];
        this._previous = document.getElementsByClassName("previous")[0];
        this._next = document.getElementsByClassName("next")[0];
        this._current = 0;
        this._container.classList.remove("hidden");
        this._next.addEventListener("click", () => {
            if (this._current < photos.length)
                this._current++;
            else
                this._current = 0;
            this.showCurrentPhoto();
        });
        this._previous.addEventListener("click", () => {
            if (this._current > 0)
                this._current--;
            else
                this._current = photos.length - 1;
            this.showCurrentPhoto();
        });
        this.showCurrentPhoto();
    }
    showCurrentPhoto() {
        const photo = this.photos[this._current];
        this._slide.innerHTML = "";
        const img = document.createElement("img");
        img.setAttribute("src", photo.url);
        img.setAttribute("title", photo.title);
        this._slide.appendChild(img);
    }
}
class Photo {
    constructor(albumId, id, title, url, thumbailUrl) {
        this.albumId = albumId;
        this.id = id;
        this.title = title;
        this.url = url;
        this.thumbailUrl = thumbailUrl; 
    }
}
class Album {
    constructor(userId, id, title) {
        this.userId = userId;
        this.id = id;
        this.title = title;
    }
}
class ApiLoader {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    get(api, successCallback, errorCallback) {
        const req = new XMLHttpRequest();
        req.open("GET", this.baseUrl + api);
        req.send();
        req.onload = () => {
            if (req.status === 200) {
                const resp = JSON.parse(req.responseText);
                successCallback(resp);
            }
            else {
                errorCallback(req.status, req.responseText);
            }
        };
    }
}
