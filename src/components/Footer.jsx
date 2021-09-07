import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    padding: 20px;
    gap: 20px;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const Logo = styled.h1``
const Description = styled.p`

`
const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #${({ bg })=> bg};
`
const Center = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    `
const Title = styled.h3`
    margin-bottom: 30px;

`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    /* gap: 10px; */
`
    
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
`
const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    gap: 10px;
`
const Payment = styled.img`
    width: 40%;

`
    

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>BUYPORT.</Logo>
                <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptas voluptates esse consequatur fugiat optio rerum ab rem, quasi quas.
                </Description>
                <SocialContainer>
                    <SocialIcon bg="3b5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon bg="e4405f">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon bg="55acee">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room />
                    622 Dixie Path, South Tobinchester 98336
                </ContactItem>
                <ContactItem>
                    <Phone />
                    +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <MailOutline />
                    support@buyport.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer
