import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  text-align: center;
  font-family: "system-ui";
  background-color: #ffffff;
  border-bottom: 1px solid #d2d2d2;
  padding: 20px 10px 12px;
  box-sizing: border-box;
  width: 50%;

  h1 {
    margin: 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 50px;
    position: fixed;
    opacity: 0.95;
    z-index: 5;

    h1 {
      font-size: 16px;
    }
  }
`;
