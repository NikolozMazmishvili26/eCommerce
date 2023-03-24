import styled from "styled-components";

import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form/dist/types";
import { useState } from "react";

interface PaymentMethodsProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  isSubmitting: boolean;
}

// import component

import { Input } from "../../../components";

function PaymentMethods({
  errors,
  register,
  isSubmitting,
}: PaymentMethodsProps) {
  //
  const [showEmoney, setShowEmoney] = useState(false);

  return (
    <Container>
      <PaymentDetails>payment details</PaymentDetails>
      <PaymentMethod>Payment Method</PaymentMethod>
      <Wrapper>
        <RadioBox error={errors}>
          <RadioInput
            type="radio"
            {...register("paymentMethod", { required: true })}
            onClick={() => setShowEmoney(true)}
          />
          <Title>e-Money</Title>
        </RadioBox>

        <RadioBox error={errors}>
          <RadioInput
            type="radio"
            {...register("paymentMethod", { required: true })}
            onClick={() => setShowEmoney(false)}
          />
          <Title>Cash on Delivery</Title>
        </RadioBox>
      </Wrapper>
      <PaymentWrapper>
        {showEmoney && (
          <>
            <Input
              register={register}
              errors={errors}
              isSubmitting={isSubmitting}
              inputType="text"
              labelName="e-Money Number"
              placeholder="238521993"
              regex={/^[A-Z]{2}[0-9]{2}[A-Z0-9]{4}[0-9]{7}[A-Z0-9]{1,14}$/}
              registerValue="eMoney"
            />
            <Input
              register={register}
              errors={errors}
              isSubmitting={isSubmitting}
              inputType="text"
              labelName="e-Money PIN"
              placeholder="238521993"
              regex={/^[0-9]{4,8}$/}
              registerValue="eMoneyPin"
            />
          </>
        )}
      </PaymentWrapper>
    </Container>
  );
}

export default PaymentMethods;

const Container = styled.div`
  margin-top: 32px;
  @media screen and (min-width: 768px) {
    margin-top: 61px;
  }
`;

const PaymentDetails = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 0.928571px;
  text-transform: uppercase;
  color: var(--primary-orange);
  margin-bottom: 16px;
`;

const PaymentMethod = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.214286px;
  color: var(--primary-black);
  margin-bottom: 17px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const RadioBox = styled.div<{
  error: FieldErrors<FieldValues>;
}>`
  width: 100%;
  border: ${(props) =>
    props.error.paymentMethod ? "1px solid red" : "1px solid #cfcfcf"};
  height: 56px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  column-gap: 21px;
  cursor: pointer;
`;

const RadioInput = styled.input`
  width: 20px;
  height: 20px;
`;

const Title = styled.h2`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.25px;
  color: var(--primary-black);
`;

//

const PaymentWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
