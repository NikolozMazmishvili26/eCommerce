import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form/dist/types";
import styled from "styled-components";

interface InputProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  isSubmitting: boolean;
  //
  labelName: string;
  inputType: string;
  registerValue: string;
  placeholder: string;
  regex: RegExp;
}

function Input({
  register,
  errors,
  isSubmitting,
  inputType,
  labelName,
  placeholder,
  regex,
  registerValue,
}: InputProps) {
  return (
    <div>
      <Label htmlFor="firstName">{labelName}</Label>
      <CheckoutInput
        type={inputType}
        id={registerValue}
        placeholder={placeholder}
        {...register(registerValue, {
          required: true,
          pattern: regex,
        })}
        errors={errors}
        isSubmitting={isSubmitting}
        registerValue={registerValue}
      />
    </div>
  );
}

export default Input;

const Label = styled.label`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.214286px;
  color: var(--primary-black);
`;

const CheckoutInput = styled.input<{
  errors: FieldErrors<FieldValues>;
  isSubmitting: boolean;
  registerValue: string;
}>`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.25px;
  color: var(--primary-black);
  mix-blend-mode: normal;
  opacity: 0.4;
  width: 100%;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  padding-left: 24px;
  height: 56px;
  margin-top: 9px;
  outline: none;
  border: ${(props) =>
    props.errors[props.registerValue]
      ? "1px solid red"
      : props.isSubmitting
      ? "1px solid var(--primary-orange)"
      : ""};
`;
