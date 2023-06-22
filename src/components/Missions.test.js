import { render, fireEvent } from '@testing-library/react';
import Missions from './Missions';

describe('Test Join Mission Button interaction', () => {
  it('When the user click the Join button the Active Member flag should appear', () => {
    const { getByText } = render(<Missions />);
    fireEvent.click(getByText('Join Mission'));
    expect(getByText('Active Member')).toBeInTheDocument();
  });

  it('When the user click the Join button the Leave mission button should appear', () => {
    const { getByText } = render(<Missions />);
    fireEvent.click(getByText('Join Mission'));
    expect(getByText('Leav Mission')).toBeInTheDocument();
  });
});
