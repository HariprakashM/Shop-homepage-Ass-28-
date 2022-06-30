import React from 'react'
import Singlecard from './Singlecard'
import { useState } from 'react'
import Nav from './Nav';
import Header from './Header';


function Card() {
    const product = [
        {
            name: "Fancy Products",
            price: "$40.00 - $80.00", 
            bctn: "View option",
            id:1,
            sale:"",
            bt:"Remove",
            i1:""
            
        },
        {
            name: "Special Item",
            price:(<div>
                <s>$$20.00</s> <span>$18.00</span>
            </div>), 
            bctn: "Add to cart",
            id:2,
            sale:"Sale",
            bt:"Remove",
            i1: <div>
                <img style={{ width: "20px", height: "20px" }} src="https://www.zenclass.in/Icons/goldenStar.svg" alt="no preview" />
                <img style={{ width: "20px", height: "20px" }} src="https://www.zenclass.in/Icons/goldenStar.svg" alt="no preview" />
                <img style={{ width: "20px", height: "20px" }} src="https://www.zenclass.in/Icons/goldenStar.svg" alt="no preview" />
                <img style={{ width: "20px", height: "20px" }} src="https://www.zenclass.in/Icons/goldenStar.svg" alt="no preview" />
                <img style={{ width: "20px", height: "20px" }} src="https://www.zenclass.in/Icons/star.svg" alt="no preview" />
            </div>
          
        },
        {
            name: "Sale Item",
            price: (<div>
                <s>$50.00</s> <span>$25.00</span>
            </div>),
            bctn: "Add to cart",
            id:3,
            sale:"Sale",
            bt:"Remove",
            i1:""
        },
        {
            name: "Popular Item",
            price: "$40.00",
            bctn: "Add to cart",
            id:4,
            sale:"",
            bt:"Remove",
            i1: <div>
                <img style={{ width: "20px", height: "20px" }} src="https://www.zenclass.in/Icons/goldenStar.svg" alt="no preview" />
                <img style={{ width: "20px", height: "20px" }} src="https://www.zenclass.in/Icons/goldenStar.svg" alt="no preview" />
                <img style={{ width: "20px", height: "20px" }} src="https://www.zenclass.in/Icons/goldenStar.svg" alt="no preview" />
                <img style={{ width: "20px", height: "20px" }} src="https://www.zenclass.in/Icons/goldenStar.svg" alt="no preview" />
                <img style={{ width: "20px", height: "20px" }} src="https://www.zenclass.in/Icons/star.svg" alt="no preview" />
            </div>
           
        },
        {
            name: "Sale Item",
            price: (<div>
                <s>$50.00</s> <span>$25.00</span>
            </div>),
            bctn: "Add to cart",
            id:5,
            sale:"Sale",
            bt:"Remove",
            i1:""
        },
        {
            name: "Fancy Products",
            price: "$120.00 - $280.00",
            bctn: "View option",
            id:6,
            sale:"",
            bt:"Remove",
            i1:""
        },
        {
            name: "Special Item",
            price:  (<div>
                <s>$20.00</s> <span>$18.00</span>
            </div>),
            bctn: "Add to cart",
            id:7,
            sale:"Sale",
            bt:"Remove",
            i1: <div>
                <img style={{ width: "20px", height: "20px" }} src="https://www.zenclass.in/Icons/goldenStar.svg" alt="no preview" />
                <img style={{ width: "20px", height: "20px" }} src="https://www.zenclass.in/Icons/goldenStar.svg" alt="no preview" />
                <img style={{ width: "20px", height: "20px" }} src="https://www.zenclass.in/Icons/goldenStar.svg" alt="no preview" />
                <img style={{ width: "20px", height: "20px" }} src="https://www.zenclass.in/Icons/goldenStar.svg" alt="no preview" />
                <img style={{ width: "20px", height: "20px" }} src="https://www.zenclass.in/Icons/star.svg" alt="no preview" />
            </div>
            
        },
        {
            name: "Popular Item",
            price: "$40.00",
            bctn: "Add to cart",
            id:8,
            sale:"",
            bt:"Remove",
            i1: <div>
                <img style={{ width: "20px", height: "20px" }} src="https://www.zenclass.in/Icons/goldenStar.svg" alt="no preview" />
                <img style={{ width: "20px", height: "20px" }} src="https://www.zenclass.in/Icons/goldenStar.svg" alt="no preview" />
                <img style={{ width: "20px", height: "20px" }} src="https://www.zenclass.in/Icons/goldenStar.svg" alt="no preview" />
                <img style={{ width: "20px", height: "20px" }} src="https://www.zenclass.in/Icons/goldenStar.svg" alt="no preview" />
                <img style={{ width: "20px", height: "20px" }} src="https://www.zenclass.in/Icons/star.svg" alt="no preview" />
            </div>
            
        }
    ]
    
    const [total, settotal] = useState(0);
    const [cartitems, setcartitems] = useState([])
    let addcart = (id) => {
        settotal(total + 1);
        const pindex = product.findIndex((obj) => obj.id == id);
        let p = product[pindex];
        setcartitems([...cartitems, p]);

    }
    let removecart=(id)=>{
        const cindex=cartitems.findIndex((obj)=>obj.id==id);
        settotal(total - 1);
        cartitems.splice(cindex,1);
        setcartitems([...cartitems])
    }


    return (
        <> <Nav total={total}></Nav>
            <Header></Header>
           
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {product.map((e) => <Singlecard data={e} addcart={addcart} removecart={removecart} cartitems={cartitems}></Singlecard>)}
                </div>
            </div>
            
        </>
    )
}

export default Card