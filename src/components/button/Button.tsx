import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface ButtonProps {
  primary?: boolean;
}

interface BtnLinkProps extends NavLinkProps {
  primary?: boolean;
}

export const ButtonLink = styled(NavLink)<BtnLinkProps>`
  ${tw`rounded-full uppercase text-green-700 py-3 px-6`}
  ${props =>
    props.primary ? tw`bg-green-200 hover:bg-green-300` : tw`bg-green-300 hover:bg-green-400`}
`;

const SButton = styled.button<ButtonProps>`
  ${tw`rounded-full uppercase text-green-700 py-3 px-6`}
  ${props =>
    props.primary ? tw`bg-green-200 hover:bg-green-300` : tw`bg-green-300 hover:bg-green-400`}
`;

export const Button: React.FC<BtnLinkProps> = ({ to, children, className, primary }) => {
  if (to) {
    return (
      <ButtonLink to={to} className={className} primary={primary}>
        {children}
      </ButtonLink>
    );
  }
  return (
    <SButton className={className} primary={primary}>
      {children}
    </SButton>
  );
};
export default Button;
