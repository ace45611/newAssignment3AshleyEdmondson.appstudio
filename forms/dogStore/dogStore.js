//Creates arrays for store products and wishlist items
let storeProducts = ['Crocheted Dog Toy, $10.00', 'Slow Feeder Bowl, $14.00', 'Pawz Grey Treat Jar, $20.00', 'Blue Sweet Dreams Thermal Pajamas, $30.00', 'Checker Chewy Vuiton Bowl, $32.00', 'Red Heart Sweater Dress, $27.00', 'Velvet Hair Bow - Sun Kissed, $12.00', 'Into the Wild Leash, $27.00']
let wishList  = []

//Displays pending Wishlist items
selProducts.onchange = function(){
  lblPendingWishlist.value = selProducts.value
}

//Adds items to wishlist array
btnAddWishlist.onclick = function(){
    wishList.push(selProducts.value)
    lblUpdatedWishlist.value = wishList
}

