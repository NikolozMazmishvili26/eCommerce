import styled from "styled-components";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form/dist/types";

// import component

import { Input } from "../../../components";

interface ShippingInfProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  isSubmitting: boolean;
}

function ShippingInfo({ errors, isSubmitting, register }: ShippingInfProps) {
  return (
    <Container>
      <Title>shipping info</Title>
      <Wrapper>
        <Top>
          {/* your address input */}
          <Input
            register={register}
            errors={errors}
            isSubmitting={isSubmitting}
            inputType="text"
            labelName="Your Address"
            placeholder="1137 Williams Avenue"
            regex={/^[a-zA-Z0-9\s\.,-]+$/}
            registerValue="userAddress"
          />
        </Top>

        <Middle>
          {/* zip code input */}
          <Input
            register={register}
            errors={errors}
            isSubmitting={isSubmitting}
            inputType="text"
            labelName="ZIP Code"
            placeholder="10001"
            regex={/^\d{5}(?:[-\s]?\d{4})?$/}
            registerValue="zipCode"
          />
          {/* city input */}
          <Input
            register={register}
            errors={errors}
            isSubmitting={isSubmitting}
            inputType="text"
            labelName="City"
            placeholder="New York"
            regex={/^[a-zA-Z\s-']{2,}$/}
            registerValue="city"
          />
        </Middle>

        <Bottom>
          {/* country input */}
          <Input
            register={register}
            errors={errors}
            isSubmitting={isSubmitting}
            inputType="text"
            labelName="Country"
            placeholder="United States"
            regex={/^[a-zA-Z\s-']{2,}$/}
            registerValue="country"
          />
        </Bottom>
      </Wrapper>
    </Container>
  );
}

export default ShippingInfo;

const Container = styled.div`
  margin-top: 32px;
  @media screen and (min-width: 768px) {
    margin-top: 53px;
  }
`;

const Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 0.928571px;
  text-transform: uppercase;
  color: var(--primary-orange);
  margin-bottom: 16px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 26px;
`;

const Top = styled.div`
  @media screen and (min-width: 768px) {
    width: 634px;
  }
`;

const Middle = styled.div`
  display: grid;
  row-gap: 24px;
  @media screen and (min-width: 768px) {
    width: 634px;
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
    row-gap: 0px;
  }
`;

const Bottom = styled.div`
  @media screen and (min-width: 768px) {
    width: 309px;
  }
`;
