import React, { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => {
  return (
    <StyledButton type="button" {...rest}>
      {loading ? "Carregando..." : children}
    </StyledButton>
  );
};

export default Button;
