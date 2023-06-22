import { render, screen } from '@testing-library/react';
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

test('renders Rocket in navigation', async () => {
  render(
    <Navbar />,
  );
  const linkElement = screen.getByText(/Rocket/i);
  expect(linkElement).toBeInTheDocument();
});
