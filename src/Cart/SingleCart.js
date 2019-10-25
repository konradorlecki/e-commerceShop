import React,{useContext, useEffect} from 'react';
import Context from "../Store/context";



const SingleCartItem=({hidden,id,src, name, price, count})=> {

    const{state, actions} = useContext(Context);
    const productAlreadyInCart = state.cart.filter(p => p.id === id);
    const cartWithoutProduct = state.cart.filter(p=> p.id !== id);

    const addCount = () => {
        const updatingCount = {
            ...productAlreadyInCart[0],
            count: productAlreadyInCart[0].count +1,
        };
        actions({type:'setState', payload:{cart:[...cartWithoutProduct, updatingCount]}})
        actions({type:'setState', payload:{cart:[...cartWithoutProduct, updatingCount]}})
    };

    const reduceCount = () => {
        console.log(state.cart.length)
        const updatingCount = {
            ...productAlreadyInCart[0],
            count: productAlreadyInCart[0].count -1,
        };
        if(updatingCount.count>0) {
            actions({type: 'setState', payload: {cart: [...cartWithoutProduct, updatingCount]}});
        }else{
            actions({type: 'setState', payload: {cart: [...cartWithoutProduct]}});
        }


    };
    useEffect(()=>{
        if(state.cart.length === 1 && sessionStorage.getItem('cart').length === 2){
            sessionStorage.clear()
        }
    })
    if(count>0){
    return(
            <div hidden={hidden}>
                <div>
                    <img src={src}/>
                    <p>{name}</p>
                    <span>{count}</span>
                    <div>
                        <button onClick={addCount}>+</button>
                        <button onClick={reduceCount}>-</button>
                    </div>
                    <p>{price*count} zł</p>
                </div>
            </div>
        )}else{
        return null
    }
}
export default SingleCartItem;