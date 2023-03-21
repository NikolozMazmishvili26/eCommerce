import styled from "styled-components";

interface ButtonProps {
  title: string;
  backgroundColor: string;
  border: string;
  hoverColor: string;
  color: string;
}

function Button({
  title,
  backgroundColor,
  border,
  hoverColor,
  color,
}: ButtonProps) {
  return (
    <GlobalButton
      backgroundColor={backgroundColor}
      border={border}
      hoverColor={hoverColor}
      color={color}
    >
      {title}
    </GlobalButton>
  );
}

export default Button;

const GlobalButton = styled.button<{
  backgroundColor: string;
  border: string;
  hoverColor: string;
}>`
  z-index: 999;
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  width: 160px;
  height: 48px;
  color: ${(props) => props.color};
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    background-color: ${(props) => props.hoverColor};
    color: var(--white);
  }
`;
