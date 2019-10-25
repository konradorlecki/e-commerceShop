import React, {useContext,useEffect} from "react";
import Context from "../Store/context";

let Product= ({id, src, name, price}) =>  {

        const{state, actions} = useContext(Context);
        const send = {id:id, src:src, name:name, price:price, count:1};

        const addToGlobalState= () => {
            const productAlreadyInCart = state.cart.filter(p => p.id === id);
            if (productAlreadyInCart.length === 0) {
                actions({type: 'setState', payload: {cart: [...state.cart, send]}});

            } else {
                const cartWithoutProduct = state.cart.filter(p=> p.id !== id);
                const updatingCount = {
                        ...productAlreadyInCart[0],
                        count: productAlreadyInCart[0].count +1,
                };
                        actions({type:'setState', payload:{cart:[...cartWithoutProduct, updatingCount]}})

            }
        };

    useEffect(()=>{
        sessionStorage.setItem('cart', JSON.stringify(state.cart));
    })

        return(
            <div>
                    <img src={src}/>
                    <p>{name}</p>
                    <p>{price} zł</p>
                    <button onClick={addToGlobalState} className='myButton'>Dodaj do koszyka</button>
            </div>
        )
}
export default Product