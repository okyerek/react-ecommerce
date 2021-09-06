import styled from "styled-components";
import { categories } from "../assets/data";
import CategoryItem from "./CategoryItem  ";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    gap: 3px;
`

const Categories = () => {
    return (
        <Container>
            {
                categories.map(( category ) => {
                    return <CategoryItem 
                                key={category.id}  
                                category={category}
                            />     
                })
            }
        </Container>
    )
}

export default Categories
