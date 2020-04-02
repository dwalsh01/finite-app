import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
// import LoginForm from '../pages/login/LoginForm';
import '@testing-library/jest-dom/extend-expect';
import LoginForm from '../pages/login/LoginForm';

describe('<LoginForm />', () => {
  test('should display black login form', async () => {
    const { asFragment } = render(<LoginForm />);
  });
});
