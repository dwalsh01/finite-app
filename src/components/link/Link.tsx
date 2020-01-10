import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { NavLink, NavLinkProps, useLocation } from 'react-router-dom';

interface TLinkProps extends NavLinkProps {
  pathname: string;
}
const TLink = styled(NavLink)<TLinkProps>`
  ${tw`block py-3 px-6 hover:text-green-500`}
  ${props => {
    const { pathname, to } = props;
    return pathname === to ? tw`text-green-400 font-semibold` : tw`text-gray-800`;
  }}
`;

export const SLink: React.FC<NavLinkProps> = ({ children, ...props }) => {
  const { pathname } = useLocation();

  return (
    <TLink pathname={pathname} {...props}>
      {children}
    </TLink>
  );
};
export default SLink;
