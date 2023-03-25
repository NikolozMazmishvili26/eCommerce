import { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

// import interface
import { cartItemsProps } from "../../App";

// import components

import { CheckoutForm, Summary, SuccessOrder } from "../../components";

function Checkout({ cartItems }: { cartItems: cartItemsProps[] }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  //
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = (data: any) => {
    setSuccess(true);
    setIsSubmitting(true);
    setTimeout(() => {
      console.log(data); // Log the form data when the form is submitted
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <Container>
      <GoBackButtonContainer>
        <GoBackButton>Go Back</GoBackButton>
      </GoBackButtonContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* checkout form component */}
        <CheckoutForm
          register={register}
          errors={errors}
          isSubmitting={isSubmitting}
        />
        {/* summary component */}
        <Summary cartItems={cartItems} />
      </Form>
      {/*  */}
      {success && <SuccessOrder cartItems={cartItems} />}
    </Container>
  );
}

export default Checkout;

const Container = styled.div`
  background-color: var(--grayish-white);
  padding: 16px 24px 97px 24px;
  @media screen and (min-width: 768px) {
    padding: 48px 40px 116px 40px;
  }
  @media screen and (min-width: 1110px) {
    padding: 79px 0px 141px 0px;
  }
`;

const GoBackButtonContainer = styled.div`
  max-width: 730px;
  width: 100%;
  margin: auto;
  @media screen and (min-width: 1110px) {
    max-width: 1110px;
  }
`;

const GoBackButton = styled.button`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: var(--primary-black);
  mix-blend-mode: normal;
  opacity: 0.5;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: var(--primary-orange);
  }
`;

const Form = styled.form`
  max-width: 1110px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  @media screen and (min-width: 1110px) {
    flex-direction: row;
    align-items: flex-start;
    margin-top: 38px;
    column-gap: 30px;
  }
`;
