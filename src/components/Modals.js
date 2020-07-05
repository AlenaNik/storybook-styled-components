import React from 'react';
import styled from 'styled-components';
import { typeScale } from "../utils";
import { Illustrations, CloseIcon } from "../assets";
import {useSpring, animated} from "react-spring";

import { PrimaryButton } from "./Buttons";

const ModalWrapper = styled.div`
  width: 500px;
  height: 400px;
  box-shadow: 0 5px 16px rgba(0,0,0, 0.2);
  background-color: ${props => props.theme.formElementBackground};
  color: ${props => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 10px;
`

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`

const SignUpText = styled.p`
font-size: ${typeScale.paragraph};
max-width: 70%;
text-align: center;
`

const CloseModalButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    position: absolute;
    right: 40px;
    top: 40px;
    width: 24px;
    height: 24px;
    padding: 0;
`


export const SignUpModal = ({showModal, setShowModal}) => {
    const animation = useSpring({
        opacity: showModal ? 1 : 0,
        transform: setShowModal ? `translateY(0)` : `translateY(-200%)`,
    })
    return (
        <animated.div style={animation}>
            <ModalWrapper>
                <img src={Illustrations.SignUp} alt="Sign up for account" area-hidden="true"/>
                <SignUpHeader>Sign Up</SignUpHeader>
                <SignUpText>Sign up today to get access!</SignUpText>
                <PrimaryButton>Sign up </PrimaryButton>
                <CloseModalButton area-label="Close modal" >
                    <CloseIcon/>
                </CloseModalButton>
            </ModalWrapper>
        </animated.div>

    )
}