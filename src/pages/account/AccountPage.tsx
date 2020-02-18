import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Navigation from '../../components/navigation/Navigation';
import ME_QUERY from '../../graphql/GetUser';
import { MeQuery } from '../../types/MeQuery';

const GridItem: React.FC = ({ children }) => (
  <div className="w-full lg:w-1/2 xl:w-1/2 text-center">{children}</div>
);
const Grid: React.FC = ({ children }) => (
  <div className="flex content-center flex-wrap container mx-auto">{children}</div>
);
const AccountInfo: React.FC = () => {
  const { data, loading } = useQuery<MeQuery>(ME_QUERY);
  if (loading || !data) {
    return null;
  }
  return (
    <div className="mx-8 p-8 border border-gray-800 shadow-lg rounded-lg text-center ">
      <div className="h-16 w-16 bg-green-500 rounded-full mx-auto" />
      <div className="text-center">
        <h2 className="text-lg">{data.me?.name || null}</h2>
        <div className="text-green-500">Standard User</div>
        <div className="text-gray-600">{data.me?.email || null}</div>
      </div>
    </div>
  );
};
const AccountPage: React.FC = () => (
  <>
    <div className="container mx-auto lg:px-8">
      <Navigation />
    </div>

    <Grid>
      <GridItem>
        <AccountInfo />
      </GridItem>
      <GridItem>
        <div className="mx-8 p-8 border border-gray-800 shadow-lg rounded-lg">Hello</div>
      </GridItem>
    </Grid>
  </>
);

export default AccountPage;
