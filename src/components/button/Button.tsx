import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface BtnLinkProps extends NavLinkProps {
  primary?: boolean;
}

const PButtonLink = styled(NavLink)<BtnLinkProps>`
  ${tw`rounded-full uppercase text-green-700 py-3 px-6 bg-green-200 hover:bg-green-300`}
`;

const NPButtonLink = styled(NavLink)<BtnLinkProps>`
  ${tw`rounded-full uppercase text-orange-700 py-3 px-6 bg-orange-300 hover:bg-orange-400`}
`;

const PButton = styled.button`
  ${tw`rounded-full uppercase text-green-700 py-3 px-6`}
  ${tw`bg-green-200 hover:bg-green-300`}
`;

const NButton = styled.button`
  ${tw`rounded-full uppercase text-orange-700 py-3 px-6 bg-orange-300 hover:bg-orange-400`}
`;

export const Button: React.FC<BtnLinkProps> = ({ to, children, primary = false }) => {
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
  return <>{primary ? <PButton>{children}</PButton> : <NButton>{children}</NButton>}</>;
};
export default Button;
