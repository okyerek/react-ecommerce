import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImageContainer = styled.div`
    flex: 1;
    `
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    
`
const Title = styled.h1`
    font-weight: 200;
`
const Description = styled.p`
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${({bg}) => bg};
    margin: 0 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 5px;
    padding: 5px;
`
const FilterSizeOption = styled.option`
    
`
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`
const Quantity = styled.span`
    width: 30px;
    height: 30px;
    font-weight: 600;
    border: 1px solid teal;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.5 ease;

    &:hover{
        background-color: #f8f4f4;
    }
`

const SingleProduct = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt omnis velit, harum corrupti beatae molestias cum error exercitationem soluta, voluptates quam dolores, eius nesciunt possimus a officia illo vitae! Provident similique dolore tempora expedita odit, illo sapiente cumque corporis voluptate vero, facere voluptatum eos vel unde a animi nemo. Corporis.</Description>
                    <Price>$20.00</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor bg="black"/>
                            <FilterColor bg="darkblue"/>
                            <FilterColor bg="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <QuantityContainer>
                            <Remove />
                            <Quantity>5</Quantity>
                            <Add />
                        </QuantityContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default SingleProduct
