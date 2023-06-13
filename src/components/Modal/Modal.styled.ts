import styled, { keyframes } from 'styled-components';

type ModalProps = {
  $isAction?: boolean;
};

export const ModalWrapper = styled.div<ModalProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: rgba(221, 216, 216, 0.95);
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  width: 400px;
  height: 600px;

  @media (max-width: 768px) {
    width: 300px;
    height: 632px;
  }
`;

type ModalPropsS = {
  close?: string;
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 450px;
  width: 300px;
  padding: 20px;
  margin: 10px;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 768px) {
    width: 250px;
    height: 520px;
    margin: 0;

`;

export const Input = styled.input`
  width: 90%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  outline: none;
  transition: border 0.3s ease;

  &:focus {
    border: 1px solid #7159c1;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  outline: none;
  resize: none;
  min-height: 100px;
  transition: border 0.3s ease;

  &:focus {
    border: 1px solid #7159c1;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 130px;
  width: 90%;
  margin: 10px;

  &:last-of-type {
    height: 220px;
  }
`;

export const Button = styled.button<ModalPropsS>`
  padding: 0.8rem 1.5rem;
  background: ${(props) => (props.close ? '#ff3333' : '#7159c1')};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
  margin: 23px;

  @media (max-width: 768px) {
    margin: ${(props) => (props.close ? '11px' : '23px')};
  }

  &:hover {
    background: ${(props) => (props.close ? '#e60000' : '#5a48a3')};
  }
`;

export const FormLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin: 10px;
`;

const softDisplay = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const ModalErrorField = styled.div`
  position: absolute;
  bottom: -30px;
  color: red;
  font-size: 15px;
  margin: 1rem;
  text-align: center;
  animation: ${softDisplay} 1s ease-in-out;
  height: 20px;
  width: 90%;
`;
