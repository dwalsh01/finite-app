import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Overview = styled.div`
  ${tw`flex-grow mx-auto px-4 sm:px-0`}
`;
const Border = styled.div`
  ${tw`bg-white border-t border-b sm:border-l sm:border-r sm:rounded shadow mb-6 mx-`};
`;
const BorderBottom = styled.div`
  ${tw`border-b px-6`}
`;
const Heading = styled.div`
  ${tw`flex justify-between -mb-px`}
`;
const HeadingText = styled.div`
  ${tw`text-gray-700 py-4 text-xl`}
`;
const KPISection = styled.div`
  ${tw`block sm:flex`}
`;
interface DisplayOverview {
  heading: string;
}
const DisplayOverview: React.FC<DisplayOverview> = ({ heading, children }) => {
  return (
    <div className="overflow-hidden flex items-center justify-center">
      <Overview className="container">
        <Border>
          <BorderBottom>
            <Heading>
              <HeadingText>{heading}</HeadingText>
            </Heading>
          </BorderBottom>
          {children}
        </Border>
      </Overview>
    </div>
  );
};
export const Display = {
  Container: DisplayOverview,
  KPISection,
};

export default DisplayOverview;
