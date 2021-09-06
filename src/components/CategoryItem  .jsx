import styled from "styled-components";

const Container = styled.div`
    flex : 1;
    height: 70vh;
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
    
const InfoContainer = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

const Title = styled.h1`
    color: white;
`
    
const Button = styled.button`
    border: none;
    padding: 10px;
    font-size: 14px;
    font-weight: 500;
    color: gray;
`

const CategoryItem = ({ category }) => {
    return (
        <Container>
            <Image src={category?.img} />
            <InfoContainer>
                <Title>{ category?.title }</Title>
                <Button>SHOP NOW</Button>
            </InfoContainer>
        </Container>
    )
}

export default CategoryItem
