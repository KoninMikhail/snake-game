import { render, screen } from '@testing-library/react';
import { Scores } from '../Scores';

describe('Scores', () => {
  it('render element with props', () => {
    render(<Scores align={'center'} score={2222} maxScore={15520} />);

    expect(screen.getByText(/002222/i)).toBeInTheDocument();
    expect(screen.getByText(/15520/i)).toBeInTheDocument();
  });

  it('render correctly', () => {
    render(<Scores align={'center'} score={2222} maxScore={15520} />);
    expect(screen.getByText(/002222/i)).toMatchSnapshot();
  });
});
