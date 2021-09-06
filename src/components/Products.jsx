import styled from "styled-components";
import { popularProducts } from "../assets/data";
import ProductItem from "./ProductItem";

const Container = styled.div`
    display: flex;
    padding: 20px;
    gap: 5px;
    flex-wrap: wrap;
    justify-content: space-between;
`


const Products = () => {
    return (
        <Container>
            {
                popularProducts.map(( product ) => {
                    return <ProductItem
                                key={product.id}
                                product={product}
                            />
                })
            }
        </Container>
    )
}

export default Products
