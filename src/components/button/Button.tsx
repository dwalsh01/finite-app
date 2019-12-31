import React, { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface BtnLinkProps extends NavLinkProps {
  primary?: boolean;
}

const PButtonLink = styled(NavLink)<NavLinkProps>`
  ${tw`sm:ml-5 rounded-full uppercase text-green-700 py-3 px-6 bg-green-200 hover:bg-green-300`}
`;

const NPButtonLink = styled(NavLink)<NavLinkProps>`
  ${tw`sm:ml-5 rounded-full uppercase text-orange-700 py-3 px-6 bg-orange-300 hover:bg-orange-400`}
`;

const PButton = styled.button<BProps>`
  ${tw`ml-5 rounded-full uppercase text-green-700 py-3 px-6`}
  ${tw`bg-green-200 hover:bg-green-300`}
`;

const NButton = styled.button<BProps>`
  ${tw`ml-5 rounded-full uppercase text-orange-700 py-3 px-6 bg-orange-300 hover:bg-orange-400`}
`;

interface BProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  to?: string;
}
export const Button: React.FC<BProps> = ({ to, children, primary = false, ...rest }) => {
  if (to) {
    return (
      <>
        {primary ? (
          <PButtonLink to={to}>{children}</PButtonLink>
        ) : (
          <NPButtonLink to={to}>{children}</NPButtonLink>
        )}
      </>
    );
  }
  return (
    <>
      {primary ? (
        <PButton {...rest} type="button">
          {children}
        </PButton>
      ) : (
        <NButton {...rest} type="button">
          {children}
        </NButton>
      )}
    </>
  );
};
export default Button;
