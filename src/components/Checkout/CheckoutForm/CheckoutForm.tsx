import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form/dist/types";
import styled from "styled-components";

// import components

import {
  BillingDetails,
  ShippingInfo,
  PaymentMethods,
} from "../../../components";

// interface

interface CheckoutFormProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  isSubmitting: boolean;
}

function CheckoutForm({ errors, isSubmitting, register }: CheckoutFormProps) {
  return (
    <Container>
      <CheckoutTitle>checkout</CheckoutTitle>
      {/* billing details component */}
      <BillingDetails
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
      />
      {/* shipping info component */}
      <ShippingInfo
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
      />
      {/* payment methods component */}
      <PaymentMethods
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
      />
    </Container>
  );
}

export default CheckoutForm;

const Container = styled.div`
  max-width: 730px;
  width: 100%;
  margin: auto;
  background-color: var(--white);
  padding: 24px 23px 31px 23px;
  border-radius: 8px;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    padding: 30px 27px;
  }
  @media screen and (min-width: 1110px) {
    padding: 54px 48px;
    margin-top: 0px;
  }
`;

const CheckoutTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--primary-black);
  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 36px;
  }
`;
