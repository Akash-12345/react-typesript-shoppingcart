import { Button, Card } from "react-bootstrap"
import { FormatCurrency } from "../utilities/formatCurrency"
import { useContext } from "react"
import { useShoppingCart } from "../context/ShoppingCartContext"

type StoreItemProps={
    id:number,
    name:string,
    price:number,
    imgUrl: string
}


export function StoreItems({id,name,price,imgUrl}:StoreItemProps){
    const {getItemQuantity,increaseCartQuantity,decreaseCartQuantity,removeFromCart}=useShoppingCart()
    const quantity=getItemQuantity(id);
    return(<>
        <Card>
            <Card.Img variant="top" src={imgUrl} height="200px"
             style={{objectFit:"cover"}}/>
        </Card>
        <Card.Title className="d-flex  flex-column">
            <Card.Body className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-2">{name}</span>
                <span className="ms-2 text-muted">{FormatCurrency(price)}</span>
            </Card.Body>
        </Card.Title>
        <div className="mt-auto">
            {quantity ===0? (<Button onClick={()=>increaseCartQuantity(id)} className="w-100">+ Add to cart</Button>):
            <div className="d-flex align-items-center flex-column" style={{gap:".5rem"}}>
                <div className="d-flex align-items-center justify-content-center"  style={{gap:".5rem"}}> 
                 <Button onClick={()=>decreaseCartQuantity(id)}>-</Button>
                 <div><span className="fs-3">{quantity}</span>in the cart</div>
                 <Button onClick={()=>increaseCartQuantity(id)}>+</Button>
                </div>
                <Button onClick={()=>removeFromCart(id)} variant="danger" size="sm">Remove</Button>
             </div>}
        </div>
        </>
    )
}