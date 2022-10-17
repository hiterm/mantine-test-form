import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from './Form';

test('type', async () => {
  const { getByLabelText } = render(<Form />);
  const user = userEvent.setup();
  await user.type(getByLabelText('Email'), 'a@example.com');
});
