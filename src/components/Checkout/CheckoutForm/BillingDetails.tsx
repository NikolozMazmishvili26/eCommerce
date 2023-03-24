import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form/dist/types";
import styled from "styled-components";

// import component

import { Input } from "../../../components";

interface BillingDetailsProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  isSubmitting: boolean;
}

function BillingDetails({
  register,
  errors,
  isSubmitting,
}: BillingDetailsProps) {
  return (
    <Container>
      <Title>billing details</Title>
      <Wrapper>
        <Top>
          {/* firstName input */}
          <Input
            register={register}
            errors={errors}
            isSubmitting={isSubmitting}
            inputType="text"
            labelName="Name"
            placeholder="Alexei Ward"
            regex={/^[a-zA-Z\s]+$/}
            registerValue="firstName"
          />
          {/* email input */}
          <Input
            register={register}
            errors={errors}
            isSubmitting={isSubmitting}
            inputType="email"
            labelName="Email Address"
            placeholder="alexei@mail.com"
            regex={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
            registerValue="userEmail"
          />
        </Top>

        <Bottom>
          {/* phone number inpit */}
          <Input
            register={register}
            errors={errors}
            isSubmitting={isSubmitting}
            inputType="text"
            labelName="Phone Number"
            placeholder="+995-593-20-99-77"
            regex={/^(\+995|0)5\d{8}$/}
            registerValue="phoneNumber"
          />
        </Bottom>
      </Wrapper>
    </Container>
  );
}

export default BillingDetails;

const Container = styled.div`
  margin-top: 32px;
  @media screen and (min-width: 768px) {
    margin-top: 41px;
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
  }
`;

const Bottom = styled.div`
  @media screen and (min-width: 768px) {
    width: 309px;
  }
`;
