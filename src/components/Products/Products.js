import React, { useState } from 'react'
import './product.css'
import { PhoneData } from "./Product.data"
import { Card, Button } from 'react-bootstrap'

const Products = () => {
    const [items, setItems] = useState(PhoneData); 

    const decqty =(id) => {
        const newItem = items.map((item)=>
            item.id === id && item.qty>1 ? {...item, qty: item.qty-1}:item
    );
    setItems(newItem)
    };
    const incqty =(id) => {
        const newItem = items.map((item)=>
            item.id === id ? {...item, qty: item.qty+1}:item
    );
    setItems(newItem)
    };
    return (
        <>
            <h1 className='heading bg-info m-2 text-white'>Products</h1>
            {items.map((item) => (
                <div className='cards shadow p-3 mb-5 bg-body-tertiary rounded d-inline-flex'
                key={item.id}>
                    <Card style={{ width: '18rem ' }} >
                        <Card.Img variant="top" src={require("./assets/iphone12.jpg")} />
                        <Card.Body>
                            <Card.Title>{item.model}</Card.Title>
                            <Card.Text>
                                {item.desc}
                            </Card.Text>
                            <Button variant="primary">Add to cart</Button>
                            <h5>Price: ₹{item.price}</h5>
                            <div className='qty'>
                                <p>qty:
                                    <Button className='m-1' onClick={()=>decqty(item.id)}>-</Button>{item.qty}
                                    <Button className='m-1' onClick={()=>incqty(item.id)}>+</Button>
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require("./assets/iphone13promax.webp")} />
                        <Card.Body>
                            <Card.Title>{item.model}</Card.Title>
                            <Card.Text>
                                {item.desc}
                            </Card.Text>
                            <Button variant="primary">Add to cart</Button>
                            <h5>Price: ₹{item.price}</h5>
                            <div className='qty'>
                                <p>qty:
                                    <Button className='m-1'>-</Button>{item.qty}<Button className='m-1'>+</Button>                            </p>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require("./assets/Iphone-14.webp")} />
                        <Card.Body>
                            <Card.Title>{item.model}</Card.Title>
                            <Card.Text>
                                {item.desc}
                            </Card.Text>
                            <Button variant="primary">Add to cart</Button>
                            <h5>Price: ₹{item.price}</h5>
                            <div className='qty'>
                                <p>qty:
                                    <Button className='m-1'>-</Button>1<Button className='m-1'>+</Button>                     </p>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require("./assets/AppleiPhone15-ProMax.png")} />
                        <Card.Body>
                            <Card.Title>{item.model}</Card.Title>
                            <Card.Text>
                                {item.desc}
                            </Card.Text>
                            <Button variant="primary">Add to cart</Button>
                            <h5>Price: ₹{item.price}</h5>
                            <div className='qty'>
                                <p>qty:
                                    <Button className='m-1'>-</Button>1<Button className='m-1'>+</Button>                      </p>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            ))}




        </>
    )
}

export default Products;
