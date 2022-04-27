<!-- made by Yang Cheng -->
"use strict";
$(document).ready(() => {
    let lsName = "__FPtotalPrice";

    const goToCartIcon = function ($addToCartBtn) {
        let $image = $('<img class="flight-img" src="' + $addToCartBtn.data("image") + '"/>');
        $addToCartBtn.prepend($image);

        let $cartIcon = $(".my-cart-icon");
        let position = $cartIcon.offset();
        let cartIconBottom = $cartIcon.offset().top * 1;
        let scrollTop = $(window).scrollTop();
        let realTop = cartIconBottom > scrollTop ? cartIconBottom - scrollTop : position.top;

        $image.animate({
            top: realTop,
            left: position.left
        }, 500, "linear", function () {
            $image.remove();
        });
    };

    $('#pagination-container').pagination({
        dataSource: [
            {
                "id": 1,
                "name": "Samsung Galaxy A12 Nacho (64GB, 4GB) 6.5\" HD+",
                "imgSrc": "images/products/prd-1.jpg",
                "imgClass": "product-thumb-1",
                "oldPrice": "299.00",
                "newPrice": "269.99"
            },
            {
                "id": 2,
                "name": "Samsung Galaxy S20 Fan Edition - 128GB",
                "imgSrc": "images/products/prd-2.jpg",
                "imgClass": "product-thumb-2",
                "oldPrice": "999.00",
                "newPrice": "949.99"
            },
            {
                "id": 3,
                "name": "Samsung Galaxy Tab S6 Lite (128GB) - Gray",
                "imgSrc": "images/products/prd-3.jpg",
                "imgClass": "product-thumb-1",
                "oldPrice": "479.99",
                "newPrice": "399.99"
            },
            {
                "id": 4,
                "name": "Samsung Galaxy Buds2 Black",
                "imgSrc": "images/products/prd-4.jpg",
                "imgClass": "product-thumb-2",
                "oldPrice": "199.00",
                "newPrice": "189.98"
            },
            {
                "id": 5,
                "name": "Samsung Galaxy Watch4 44mm",
                "imgSrc": "images/products/prd-5.jpg",
                "imgClass": "product-thumb-2",
                "oldPrice": "399.00",
                "newPrice": "369.98"
            },
            {
                "id": 6,
                "name": "Samsung Galaxy S21 Ultra 5G",
                "imgSrc": "images/products/prd-6.jpg",
                "imgClass": "product-thumb-1",
                "oldPrice": "1509.99",
                "newPrice": "1509.99"
            },
            {
                "id": 7,
                "name": "Samsung Galaxy A12 Nacho (64GB, 4GB) 6.5\" HD",
                "imgSrc": "images/products/prd-7.jpg",
                "imgClass": "product-thumb-1",
                "oldPrice": "259.99",
                "newPrice": "259.99"
            },
            {
                "id": 8,
                "name": "OnePlus 8 (5G) 8GB(RAM)+128GB",
                "imgSrc": "images/products/prd-8.jpg",
                "imgClass": "product-thumb-1",
                "oldPrice": "441.99",
                "newPrice": "417.99"
            },
            {
                "id": 9,
                "name": "Samsung Galaxy A10s (32GB, 2GB RAM)",
                "imgSrc": "images/products/prd-9.jpg",
                "imgClass": "product-thumb-2",
                "oldPrice": "229.99",
                "newPrice": "229.99"
            }
        ],
        pageSize: 4,
        className: 'paginationjs-theme-blue paginationjs-big',
        callback: function(data, pagination) {
            let template = Handlebars.compile($('#template').html());
            let html = template({data: data});
            $('#data-container').html(html);

            $(".my-cart-btn").myCart({
                currencySymbol: '$',
                numberOfDecimals: 2,
                clickOnAddToCart: function($addTocart) {
                    goToCartIcon($addTocart);
                },
                checkoutCart: function(products, totalPrice, totalQuantity) {
                    localStorage.setItem(lsName, totalPrice);
                    console.log("checking out", products, totalPrice, totalQuantity);
                    window.location.href = "checkout.html";
                },
                getDiscountPrice: function(products, totalPrice, totalQuantity) {
                    console.log("calculating discount", products, totalPrice, totalQuantity);
                    return totalPrice * 1;
                }
            });
        }
    });

});