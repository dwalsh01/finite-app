import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './apollo/apollo';
import AppRouter from './router/AppRouter';

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <div className="h-screen w-screen antialiased">
      <AppRouter />
    </div>
  </ApolloProvider>
);

export default App;
