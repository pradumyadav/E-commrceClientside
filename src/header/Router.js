

import { Route, Routes } from "react-router-dom";

import Home from "../allComponent/home/Home";
import Clothe from "../allComponent/clothes/Clothe";
import Mobile from "../allComponent/mobile/Mobile";
import Furniture from "../allComponent/furniture/Furniture";
import Watch from "../allComponent/watch/Watch";
import Gym from "../allComponent/gym/Gym";
import MenClothe from "../allComponent/clothes/MenClothe";
import WomenClothe from "../allComponent/clothes/WomenClothe";
import BabyClothes from "../allComponent/clothes/BabysClothes";
import Iphone from "../allComponent/mobile/Iphone";
import Infinix from "../allComponent/mobile/Infinix";
import Vivo from "../allComponent/mobile/Viovo";
import Shelf from "../allComponent/furniture/Shelf";
import Sofa from "../allComponent/furniture/Sofa";
import Table from "../allComponent/furniture/Table";
import Fastrck from "../allComponent/watch/Fastrck";
import FireBolt from "../allComponent/watch/FireBolt";
import Sonata from "../allComponent/watch/Sonata";
import Barbell from "../allComponent/gym/Barbell";
import Dumbbell from "../allComponent/gym/Dumbbell";
import Gloves from "../allComponent/gym/Gloves";
import Dynamic from "../dynamic/dynamic";
import Cart from "../cart/Cart";
import Login from "../allComponent/userLoginRegister/Login";
import Register from "../allComponent/userLoginRegister/Register";
import { ShowSearch } from "./ShowSearch";
import Checkout from "../cart/Checkout";
import { BuyCompo } from "../cart/BuyCompo";
import  Sucess  from "../cart/Sucess";
import Cancle from "../cart/Cancle";



     export default function Router (){
            return(
                <div>
                  

                    <Routes>

                    <Route path="/" element={<Home/>}/>

                    <Route path="/clothe" element={<Clothe/>}/>
                    <Route  path="/men" element={<MenClothe/>}/>
                    <Route path ="/women" element={<WomenClothe/>}/>
                    <Route path="/baby" element={<BabyClothes/>}/>


                    <Route path ="/mobile" element={<Mobile/>}/>
                    <Route path="/iphone" element={<Iphone/>}/>
                    <Route path="/infinix" element={<Infinix/>}/>
                    <Route path="/vivo" element={<Vivo/>}/>
                   
                    <Route path="/furniture" element={<Furniture/>}/>
                    <Route path="/shelf" element={<Shelf/>}/>
                    <Route path="/sofa" element={<Sofa/>}/>
                    <Route path="/table" element={<Table/>}/>

                    <Route path="/watch" element={<Watch/>}/>
                    <Route path="/fastrck" element={<Fastrck/>}/>
                    <Route path="/firebolt" element={<FireBolt/>}/>
                    <Route path="/sonata" element={<Sonata/>}/>

                    <Route path="/gym" element={<Gym/>}/>
                    <Route path="/barbell" element={<Barbell/>}/>
                    <Route path="/dumbbell" element={<Dumbbell/>}/>
                    <Route path="/glove" element={<Gloves/>}/>
                    <Route path ="/dynamic/:id"element={<Dynamic/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/register" element={<Register/>}></Route>
                    <Route path="/search" element={<ShowSearch/>}></Route>
                    <Route path="/checkout" element={<Checkout/>}></Route>
                    <Route path="/buy" element={<BuyCompo/>}></Route>
                    <Route path="/sucess" element={<Sucess/>}></Route>
                    <Route path="/cancel" element={<Cancle/>}></Route>
                    </Routes>

                </div>
            )
        }