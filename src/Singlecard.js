import React from 'react'

function Singlecard({ data, addcart, cartitems, removecart }) {

    return (
        <div className="col mb-5">
            <div className="card h-100">
                <div class="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>{data.sale}</div>
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                <div className="card-body p-4">
                    <div className="text-center">

                        <h5 className="fw-bolder">{data.name}</h5>
                        {data.i1}


                        {data.price}





                    </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    {data.bctn == "View option" ? <button style={{border:"1px solid black" }} className="text-center btn " >{data.bctn}</button> : <div>


                        <button disabled={cartitems.some((obj) => obj.id == data.id)} className="text-center " onClick={() => addcart(data.id)}><a className="btn  mt-auto" href="#">{data.bctn}</a></button>
                        <button disabled={cartitems.every((obj) => obj.id !== data.id)} className="text-center " onClick={() => removecart(data.id)}><a className="btn  mt-2" href="#">{data.bt}</a></button>
                    </div>}
                </div>
            </div>
        </div>
    )
}


export default Singlecard