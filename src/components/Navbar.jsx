import styled from "styled-components"
import SearchIcon from '@material-ui/icons/Search';
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;

`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 25px;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
`
const Input = styled.input`
    border: none;
    outline: none;
`
const Center = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`
const Logo = styled.h1`
    font-weight: bold;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 25px;
`
const MenuItem = styled.div`
    font-size: 14px;
    font-weight: 500;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <SearchIcon />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>BUYPORT.</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGNIN</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={2} color="primary">
                        <ShoppingCartOutlined style={{color: 'gray', fontSize:16}}/>
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
