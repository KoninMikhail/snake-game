import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  it('should render correctly', () => {
    render(<Button onClick={() => console.log('nothing')}>Im rendered</Button>);

    expect(screen.getByText('Im rendered')).toBeInTheDocument();
  });

  it('should execute onClick handler', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me!</Button>);

    fireEvent.click(screen.getByText(/Click Me!/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
