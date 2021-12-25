// in React the interface method adds functions to the props
// the interface method specifies that the properties from the Product app component
// are required to be passed to the interface component
import { Button } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";


interface Props {
    products: Product[];
    addProduct: () => void;
}


export default function Catalog({products, addProduct}: Props) 
{
    return (
        <>
            <ProductList products={products} />
            <Button variant='contained' onClick={addProduct}>Add product</Button>
        </>
    )
}