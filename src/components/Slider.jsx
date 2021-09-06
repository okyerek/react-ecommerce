import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../assets/data";
import Slide from "./Slide";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: coral;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightgray;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${({direction})=> direction === 'left' && '10px'};
    right: ${({direction})=> direction === 'right' && '10px'};
    cursor: pointer;
    z-index: 10;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: ${({slideIndex}) => (`translateX(${slideIndex * -100}vw)`)};
    transition: all 1s ease;
`




const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleArrowClick = ( direction ) => {
        if (direction === "left"){
            setSlideIndex( slideIndex > 0 ? slideIndex - 1: 2)
        } else {
            setSlideIndex( slideIndex < 2 ? slideIndex + 1: 0)
        }
    }
    return (
        <Container>
            <Arrow 
                onClick={()=> handleArrowClick("left")}
                direction="left"
            >
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper
                slideIndex={slideIndex}
            >
                {
                    sliderItems.map(( slide ) => {
                        return <Slide key={slide.id} slide={slide}/>
                    })
                }
            </Wrapper>
            <Arrow 
                onClick={()=> handleArrowClick("right")}
                direction="right"
            >
                <ArrowRightOutlined /> 
            </Arrow>
        </Container>
    )
}

export default Slider
