import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

test('renders the navbar component snapshot', () => {
  const { asFragment } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
