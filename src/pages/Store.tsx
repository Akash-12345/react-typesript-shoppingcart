import storeItems from "../data/items.json"
import {Row,Col} from "react-bootstrap"
import { StoreItems } from "../components/StoreItem"

export function Store(){
    return(
    <><h1>Store</h1>
    <Row md={3} xs={2} lg={1} className="g-3">
      {storeItems.map(item=>(
             <Col key={item.id}> <StoreItems {...item}/> </Col>
      ))}
      
    </Row>
    </>
    )
}