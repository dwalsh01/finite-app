import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import RegisterForm from '../pages/register/RegisterForm';

describe('<RegisterForm />', () => {
  test('should display a blank login form', async () => {
    const { container } = render(
      <MemoryRouter>
        <RegisterForm />
      </MemoryRouter>,
    );
    console.log(container);
  });
});
