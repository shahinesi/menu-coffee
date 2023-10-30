/**
* Author: Shahin Eskandari
* License: -
*/

(function () {
    "use strict";
    /**
   * Easy selector helper function
   */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    document.addEventListener("DOMContentLoaded", (function () {
        console.log(
            '░██████╗██╗░░██╗░█████╗░██╗░░██╗██╗███╗░░██╗  ███████╗░██████╗██╗░░██╗░█████╗░███╗░░██╗██████╗░░█████╗░██████╗░██╗\n' +
            '██╔════╝██║░░██║██╔══██╗██║░░██║██║████╗░██║  ██╔════╝██╔════╝██║░██╔╝██╔══██╗████╗░██║██╔══██╗██╔══██╗██╔══██╗██║\n' +
            '╚█████╗░███████║███████║███████║██║██╔██╗██║  █████╗░░╚█████╗░█████═╝░███████║██╔██╗██║██║░░██║███████║██████╔╝██║\n' +
            '░╚═══██╗██╔══██║██╔══██║██╔══██║██║██║╚████║  ██╔══╝░░░╚═══██╗██╔═██╗░██╔══██║██║╚████║██║░░██║██╔══██║██╔══██╗██║\n' +
            '██████╔╝██║░░██║██║░░██║██║░░██║██║██║░╚███║  ███████╗██████╔╝██║░╚██╗██║░░██║██║░╚███║██████╔╝██║░░██║██║░░██║██║\n' +
            '╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝╚═╝░░╚══╝  ╚══════╝╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝'),
            console.group("%cWelcome My Friend", "color: #41b883;"),
            console.log('If you in the devtools, so probably you a developer.\n"imshahineskandari@gmail.com" this is my email.\nPlease contact me, This is the best way to support me.'),
            console.groupEnd();
    }));

    if (localStorage.getItem('fullName') == null) {
        var fullName;
        fullName = prompt('لطفا نام و نام خانوادگی خود را وارد کنید');
        if (input === null) {
            return; //break out of the function early
        }
        localStorage.setItem('fullName', fullName)
    }

})();

var product_list = "", all_price = "";
var shoppingCart = (function () {

    cart = [];

    function Item(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }

    // Save cart
    function saveCart() {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    // Load cart
    function loadCart() {
        cart = JSON.parse(localStorage.getItem('shoppingCart'));
    }
    if (localStorage.getItem("shoppingCart") != null) {
        loadCart();
    }


    var obj = {};

    // Add to cart
    obj.addItemToCart = function (name, price, count) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count++;
                saveCart();
                return;
            }
        }
        var item = new Item(name, price, count);
        cart.push(item);
        saveCart();
    }
    // Set count from item
    obj.setCountForItem = function (name, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
    };
    // Remove item from cart
    obj.removeItemFromCart = function (name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count--;
                if (cart[item].count === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        saveCart();
    }

    // Remove all items from cart
    obj.removeItemFromCartAll = function (name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart.splice(item, 1);
                break;
            }
        }
        saveCart();
    }

    // Clear cart
    obj.clearCart = function () {
        cart = [];
        saveCart();
    }

    // Count cart 
    obj.totalCount = function () {
        var totalCount = 0;
        for (var item in cart) {
            totalCount += cart[item].count;
        }
        return totalCount;
    }

    // Total cart
    obj.totalCart = function () {
        var totalCart = 0;
        for (var item in cart) {
            totalCart += cart[item].price * cart[item].count;
        }
        return Number(totalCart.toFixed(2));
    }

    // List cart
    obj.listCart = function () {
        var cartCopy = [];
        for (i in cart) {
            item = cart[i];
            itemCopy = {};
            for (p in item) {
                itemCopy[p] = item[p];
            }
            itemCopy.total = Number(item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy)
        }
        return cartCopy;
    }
    return obj;
})();


// Add item
$('.default-btn').click(function (event) {
    // alert('working');
    event.preventDefault();
    var name = $(this).data('name');
    var price = Number($(this).data('price'));
    shoppingCart.addItemToCart(name, price, 1);
    displayCart();
});

// Clear items
$('.clear-cart').click(function () {
    shoppingCart.clearCart();
    displayCart();
});


function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "";
    product_list = "";
    for (var i in cartArray) {
        output += "<tr>"
            + "<td>" + cartArray[i].name + "</td>"
            + "<td>(" + Number(cartArray[i].price).toLocaleString('US') + ")</td>"
            + "<td><div class='input-group'>"
            + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
            + "</div></td>"
            + "<td><button class='delete-item btn btn-danger' style='padding: 0.175rem 0.575rem;' data-name=" + cartArray[i].name + ">X</button></td>"
            + " = "
            + "<td>" + Number(cartArray[i].total).toLocaleString('US') + "</td>"
            + "</tr>";
        product_list += cartArray[i].count + ' عدد ' + cartArray[i].name + '\n'
    }
    all_price = Number(shoppingCart.totalCart()).toLocaleString('US');
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart()); //total mony
    $('.total-count').html(shoppingCart.totalCount());
}

// Delete item button

$('.show-cart').on("click", ".delete-item", function (event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function (event) {
    var name = $(this).data('name');
    var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
});
displayCart();

//////// ui script start /////////
// Tabs Single Page
$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
$('.tab ul.tabs li a').on('click', function (g) {
    var tab = $(this).closest('.tab'),
        index = $(this).closest('li').index();
    tab.find('ul.tabs > li').removeClass('current');
    $(this).closest('li').addClass('current');
    tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
    tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
    g.preventDefault();
});

function order() {
    let date = new Date();
    fetch('https://api2.ippanel.com/api/v1/sms/pattern/normal/send', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'apikey': '4CPakLLDLFyexs7yOJ2eVgG44P8QYL7gQoq4X4JN5ng=',
        },
        body: JSON.stringify({
            "code": "f5ouv4vo5tiaa0j",
            "sender": "+9890002731",
            "recipient": "09356737133",
            "variable": {
                "name": localStorage.getItem('fullName'),
                "date": "تاریخ " + date.toLocaleDateString('fa-IR') + " و در ساعت " + date.getHours() + ":" + date.getMinutes(),
                "product_list": product_list,
                "price": all_price
            }
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.code == 200) {
                shoppingCart.clearCart();
                displayCart();
                alert('سفارش شما با موفقیت ثبت شد');
            }
            else {
                alert('خطا در ثبت سفارش، مجددا تلاش کنید');
            }
        })
}
