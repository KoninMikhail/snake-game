import { render, screen } from '@testing-library/react';
import { StartNotice } from '../StartNotice';

describe('Start Notice', () => {
  it('render with properties', () => {
    render(<StartNotice align={'right'} content={'Vasya'} />);

    expect(screen.getByText('Vasya')).toBeInTheDocument();
    expect(screen.getByText('Vasya').tagName.toLowerCase()).toEqual('span');
    expect(screen.getByTestId('text-align')).toHaveStyleRule('text-align', 'right');
  });

  it('render correctly', () => {
    const { container } = render(<StartNotice align={'left'} content={'Vasya'} />);
    expect(container).toMatchSnapshot();
  });
});
