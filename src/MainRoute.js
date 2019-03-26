import React from 'react';
import { Switch,Route } from 'react-router-dom';

import Shop from './Pages/ShopPage';
import GamePage from './Pages/GamePage';
import MusicPage from './Pages/MusicPage';
import DecorPage from './Pages/DecorPage';
import OtherPage from './Pages/OtherPage';
import Home from './Pages/HomePage';
import SignUp from './Pages/SignUpPage';
import SignIn from './Pages/SignInPage';
import DetailProduct from './Pages/ProductDetail';
import DashboardSeller from './Pages/MyProfileSeller';
import MyProduct from './Pages/MyProductSeller';
import DashboardBuyer from './Pages/MyProfileBuyer';
import EditProduct from './Pages/EditProductPage';
import TransactionDetail from './Pages/TransactionDetail';
import MyCart from './Pages/MyCartPage';
// import PatNolPat from ./404/404.js;

const MainRoute = () => {
    return(
        <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/store" component = {Shop}/>
            <Route exact path = "/store/games" component = {GamePage}/>
            <Route exact path = "/store/music" component = {MusicPage}/>
            <Route exact path = "/store/decor" component = {DecorPage}/>
            <Route exact path = "/store/other" component = {OtherPage}/>
            <Route exact path = "/signin" component = {SignIn}/>
            <Route exact path = "/register" component = {SignUp}/>
            <Route exact path = "/detailproduct" component = {DetailProduct}/>
            <Route exact path = "/dashboard" component = {DashboardSeller}/>
            <Route exact path = "/myproduct" component = {MyProduct}/>
            <Route exact path = "/editproduct" component = {EditProduct}/>
            <Route exact path = "/myprofile" component = {DashboardBuyer}/>
            <Route exact path = "/transactiondetail" component = {TransactionDetail}/>
            <Route exact path = "/mycart" component = {MyCart}/>
        </Switch>
    )
}

export default MainRoute;
