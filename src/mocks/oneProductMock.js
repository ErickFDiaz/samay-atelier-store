const product = {
    "id": 1,
    "title": "Floating Clouds  (Ukigumo)",
    "price": 55.69,
    "pictureUrl": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}
 const getProduct = new Promise((resolve, reject) => {

    let condition = true
    setTimeout(() => {
        if (condition) {
            resolve(product)
        } else {
            reject('Something wrong')
        }
    }, 2000)
})

export default getProduct