import styled from "styled-components";

function ErrorMessage() {
  return (
    <Container>
      <Error>The cart is empty and you cannot go to checkout</Error>
    </Container>
  );
}

export default ErrorMessage;

const Container = styled.div`
  margin-top: 31px;
`;

const Error = styled.p`
  font-size: 17px;
  text-align: center;
  line-height: 25px;
  color: red;
  font-weight: bold;
`;
