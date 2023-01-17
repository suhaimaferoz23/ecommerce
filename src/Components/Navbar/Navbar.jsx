import React, { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";


const Navbar = () => {


    const [open,setOpen] = useState(false)
    const products = useSelector((state) => state.cart.products);
    
      return (
        <div className="Navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src="/img/logo.jpg" alt="" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>INR</span>
                        <KeyboardArrowDownIcon />
                        </div>
          <div className="item">
            <Link to="/Products/1">Women</Link>
                </div>
                <div className="item">
                    <Link to="/Product/2">Men</Link>
                </div>
                <div className="/Products/3">Children</div>

                <div className="center">
                    <Link to="/">HIJABSTORE</Link>
                    
                   </div>
                   <div className="right">
                    <div className="center">
                        <Link to="/">Homepage</Link>
                    </div>
                    <div className="center">
                        <Link to="/">About</Link>
                    </div>
                    <div className="center">
                        <Link to="/">Contact</Link>
                    </div>
                    <div className="center">
                        <Link to="/">Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineOutlinedIcon />
                        <FavoriteBorderOutlinedIcon />
                        
                            
                        </div>
                    </div>
                   </div>
                </div>
            </div>
            </div>
        );
        };
        export default Navbar;
