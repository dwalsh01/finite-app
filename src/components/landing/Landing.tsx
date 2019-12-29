import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import theme from '../../styles/tailwind-theme';

const { colors } = theme;
const Landing = styled.div`
  ${tw`h-screen w-screen`}
  @media (min-width: 650px) {
    background: linear-gradient(to left, ${colors.white} 50%, ${colors.green[500]} 50%);
  }
`;

export default Landing;
