const products = [{
    "id": 1,
    "title": "Floating Clouds  (Ukigumo)",
    "price": 55.69,
    "pictureUrl": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
    "id": 2,
    "title": "Three Brave Men",
    "price": 68.83,
    "pictureUrl": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
    "id": 3,
    "title": "Boy in Blue, The",
    "price": 58.31,
    "pictureUrl": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
    "id": 4,
    "title": "Empire of Silver (Bai yin di guo)",
    "price": 62.69,
    "pictureUrl": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}, {
    "id": 5,
    "title": "Last Broadcast, The",
    "price": 45.85,
    "pictureUrl": "http://dummyimage.com/250x250.png/dddddd/000000"
}]

export const data = new Promise((resolve, reject) => {

    let condition = true
    setTimeout(() => {
        if (condition) {
            resolve(products)
        } else {
            reject('Something wrong')
        }
    }, 2000)
})

