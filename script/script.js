window.addEventListener("load", function () {
    const adress = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";


    function get_data(url) {
        return new Promise(function (resolve, reject) {

            const req = new XMLHttpRequest()
        
            req.open('GET', url)
        
            req.send()
        
            req.onload = function () {
                if (req.status === 200) {
                resolve(req.response)
                } else {
                reject(req.status + ' ' + req.statusText)
                }
            }
        
            req.onerror = function () {
                reject('Erro de conexão')
            }
        })
    }

    get_data(adress)

    .then(function (data) {
        let text_json = JSON.parse(data);

        text_json.forEach(function(product){
            let container = document.querySelector(".product_list");

            container.innerHTML+=`
            <a href="#" class="products_item">
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row no-gutters">
                    <div class="card_img col-md-4">
                        <div class="wishlist"><i class="fas fa-heart wishlist_icon"></i></div>
                        <img src="${product.photo}" class="card-img" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <span class="rate_stars"><i class="fas fa-star"></i>4,85(248)</span>
                            <h5 class="card-type">${product.property_type}</h5>
                            <h5 class="card-name">${product.name}</h5>
                            <p class="card-price"> <b>R$ 160</b>/noite</p>
                        </div>
                    </div>
                    </div>
                </div>
            </a>`
        });
    })
})