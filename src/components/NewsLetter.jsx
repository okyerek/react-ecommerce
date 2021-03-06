import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

const Title = styled.h1`
    font-size: 70px;
`
const Description = styled.p`
    font-size: 24px;
    font-weight: 300;
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    border: 1px solid lightgray;
`
const Input = styled.input`
    flex: 8;
    border: none;
    outline: none;
    padding: 0 10px;
`
const Button = styled.button`
    flex: 1;
    height: 100%;
    border: none;
    background-color: teal;
    color: white;

`
    

const NewsLetter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates of your favourite products</Description>
            <InputContainer>
                <Input placeholder="Your Email"/>
                <Button>
                    <Send />
                </Button>
                
            </InputContainer>
        </Container>
    )
}

export default NewsLetter
