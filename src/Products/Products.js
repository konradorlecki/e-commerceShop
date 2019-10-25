import React,{useState} from 'react'
import '../Products/Products.scss'
import Product from "./oneProduct";
import products from '../Products/Links'

const Products = () =>{
        const [filter, setFilter] = useState('Name');

        const filterByPrice = () =>{
             return   products.sort((a,b)=> a.price-b.price )
        }

        const filterByName = () =>{
                return products.sort((a,b)=>{
                        if(a.name>b.name){return 1}
                        if(b.name>a.name){return -1}
                        return 0
                });
}
        const handleChange = (e) =>{
                setFilter(e.target.value)
        }

        if(filter === 'Name'){
                filterByName()
        }else{
                filterByPrice()
        }

        return(
            <div className='products'>
                <h2>Produkty</h2>
                <select onChange={handleChange}>
                        <option value="Name">Name</option>
                        <option value="Price">Price</option>
                </select>
                <div>
                    {products.map(e => <Product key={e.id} {...e} />)}
                </div>
            </div>
        )
}
export default Products