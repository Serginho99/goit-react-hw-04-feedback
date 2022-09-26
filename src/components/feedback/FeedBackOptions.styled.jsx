import styled from 'styled-components';

export const TitleBtn = styled.h1`
  margin-bottom: 20px;
  font-size: 32px;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* margin: -10px; */
`;

export const Button = styled.button`
  min-width: 100px;
  padding: 10px 20px;
  border: none;
  border: 2px solid #fff;
  font-size: 20px;
  color: #fff;
  background-color: lightcoral;
  text-align: center;
  transition: all 200ms linear;
  cursor: pointer;
  :hover {
    border: 2px solid lightcoral;
    color: lightcoral;
    background-color: #fff;
  }
`;
