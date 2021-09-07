import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";


const InfoContainer = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    gap: 10px;
    transition: all 0.5s ease;
`

const Container = styled.div`
    flex: 1;
    min-width: 280px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${InfoContainer}{
        opacity: 1;
    }
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    background-color: white;
    position: absolute;
    border-radius: 50%;
`
const Image = styled.img`
    height: 75%;
    z-index: 2;
`

const IconContainer = styled.div`
    width: 40px;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5 ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`

    

const ProductItem = ({ product }) => {
    return (
        <Container>
            <Circle />
            <Image src={product?.img}/>
            <InfoContainer>
                <IconContainer>
                    <ShoppingCartOutlined />
                </IconContainer>
                <IconContainer>
                    <SearchOutlined />
                </IconContainer>
                <IconContainer>
                    <FavoriteBorderOutlined />
                </IconContainer>
            </InfoContainer>
        </Container>
    )
}

export default ProductItem
