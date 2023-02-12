import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

test('render App component', async () => {
  render(<App />);

  const button = screen.getByRole('button');

  await userEvent.click(button);
  expect(button).toHaveTextContent('count is 1');
});
