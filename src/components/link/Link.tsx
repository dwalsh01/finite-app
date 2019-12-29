import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { NavLink } from 'react-router-dom';

const SLink = styled(NavLink)`
  ${tw`block text-gray-800 hover:text-green-300 py-3 px-6`}
`;

export default SLink;
