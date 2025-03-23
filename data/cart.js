export const cart = []

export function addToCart(productId){
    let matchedItem = null;
      cart.forEach((cartItem)=>{
        if(cartItem.productId === productId){
          matchedItem = cartItem
        }
      })
      if(matchedItem){
        matchedItem.quantity += 1
      }else{
        cart.push({
          productId: productId,
          quantity: 1
        })
      }
  }