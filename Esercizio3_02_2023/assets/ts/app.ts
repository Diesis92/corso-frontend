window.addEventListener(
    "load", () => {
        const loader = new ApiLoader("https://jsonplaceholder.typicode.com/")
        const albumList = document.querySelector("#album-list")
        albumList.innerHTML = ""
        loader.get<Array<Album>>("albums",
            albums => albums.forEach(album => {
                const li = document.createElement("li")
                li.appendChild(document.createTextNode(album.title))
                albumList.appendChild(li)
                li.addEventListener("click", () => {
                    loader.get<Array<Photo>>(`albums/${album.id}/photos`,
                        photos => new PhotoSlide(photos),
                        (e, s) => console.log(e, s)
                    )
                })
            }),
            (e, s) => console.log(e, s)
        )
    }
)

class PhotoSlide {
    private _container = document.getElementsByClassName("photos")[0]
    private _slide = document.getElementsByClassName("content")[0]
    private _previous = document.getElementsByClassName("previous")[0]
    private _next = document.getElementsByClassName("next")[0]
    private _current: number = 0

    constructor(public photos: Array<Photo>) {
        this._container.classList.remove("hidden")
        this._next.addEventListener("click", () => {
            if (this._current < photos.length)
                this._current++
            else
                this._current = 0
            this.showCurrentPhoto()
        })
        this._previous.addEventListener("click", () => {
            if (this._current > 0)
                this._current--
            else
                this._current = photos.length - 1
            this.showCurrentPhoto()
        })
        this.showCurrentPhoto()
    }

    showCurrentPhoto() {
        const photo = this.photos[this._current]
        this._slide.innerHTML = ""
        const img = document.createElement("img")
        img.setAttribute("src", photo.url)
        img.setAttribute("title", photo.title)
        this._slide.appendChild(img)
    }
}

class Photo {
    constructor(
        public albumId: number,
        public id: number,
        public title: string,
        public url: string,
        public thumbailUrl: string) { }
}

class Album {
    constructor(public userId: number, public id: number, public title: string) { }
}

class ApiLoader {
    constructor(private baseUrl: string) { }

    get<T>(api: string, successCallback: (r: T) => void, errorCallback: (s: number, r: string) => void): void {
        const req = new XMLHttpRequest()
        req.open("GET", this.baseUrl + api)
        req.send()
        req.onload = () => {
            if (req.status === 200) {
                const resp: T = JSON.parse(req.responseText)
                successCallback(resp)
            }
            else {
                errorCallback(req.status, req.responseText)
            }
        }
    }
}