import React,{Component} from 'react';
import './App.scss';
import Cart from '../Cart/Cart'
import Products from'../Products/Products'
class App extends Component {
    render() {
        return (
            <>
                <Cart/>
                <Products/>
            </>
        );
    }
}
export default App;
