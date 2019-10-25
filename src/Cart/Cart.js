import React, {useContext, useState} from 'react'
import './Cart.scss'
import '../Products/Products'
import Context from '../Store/context'
import SingleCartItem from './SingleCart'
const Cart= () => {
    const {state, actions} = useContext(Context);
    const [localState, setCartShow] = useState({emptyCartShow:true,emptyCartMessage:'Rozwiń koszyk' })
    const [cartProducts, setCartProducts] = useState({cartShow:false, cartMessage:'Ukryj koszyk'})
    let productsInCartState = state.cart;

    if(sessionStorage.getItem('cart') !==null && state.cart.length === 0 && JSON.parse(sessionStorage.getItem('cart')).length > 1){
        productsInCartState = JSON.parse(sessionStorage.getItem('cart'));
        actions({type:'setState', payload:{cart:productsInCartState}});
    }


    const showEmptyCart = () =>{
        if(localState.emptyCartShow === false) {
            setCartShow({emptyCartShow:true, emptyCartMessage: 'Rozwiń koszyk'})
        }else{
            setCartShow({emptyCartShow:false, emptyCartMessage:'Ukryj koszyk'})
        }};
    const showCart = () =>{
        if(cartProducts.cartShow === false){
            setCartProducts({cartShow:true, cartMessage:'Rozwiń koszyk'})
        }else{
            setCartProducts({cartShow:false, cartMessage:'Ukryj koszyk'})
        }
    }

    let sum = 0;
    for(let i=0;i<state.cart.length;i++){
        sum += state.cart[i].price * state.cart[i].count
    }

    if(productsInCartState[0] === undefined || productsInCartState[0].count === 0){
        console.log(productsInCartState);
    return(
        <div className='cart'>
            <p>Koszyk</p>
            <button onClick={showEmptyCart} className='myButton'>{localState.emptyCartMessage}</button>
            <h4 hidden={localState.emptyCartShow}>koszyk jest pusty</h4>
        </div>
    )}else{
        return(
            <div className='cart'>
                <p>Koszyk</p>
                <button onClick={showCart} className='myButton'>{cartProducts.cartMessage}</button>
                <p hidden={cartProducts.cartShow}>Ilość</p>
                {productsInCartState.map(e=><SingleCartItem hidden={cartProducts.cartShow} key={e.id} {...e}/>)}
                <h4 hidden={cartProducts.cartShow}>Suma:{sum} zł</h4>
            </div>
        )

    }


}

export default Cart;
