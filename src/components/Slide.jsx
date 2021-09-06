import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${({ bg }) => `#${bg}`};
`
const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
 font-size: 70px;
`
const Description = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slide = ({ slide }) => {
    return (
        <Container bg={slide?.bg}>
            <ImageContainer>
                <Image src={slide?.img}/>
            </ImageContainer>
            <InfoContainer>
                <Title>{slide?.title}</Title>
                <Description>
                    {slide?.desc}
                </Description>
                <Button>SHOP NOW</Button>
            </InfoContainer>
        </Container>
    )
}

export default Slide
