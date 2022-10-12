import { render, screen } from '@testing-library/react';
import { Text } from '../Text';
import { font_color, font_family_body, font_size_body } from '../../../../../../styles/variables';

describe('Text', () => {
  it('render a text element', () => {
    render(<Text>Awesome text</Text>);
    expect(screen.getByText(/Awesome text/i)).toBeInTheDocument();
  });

  it('have correctly styles', () => {
    render(<Text>Awesome text</Text>);

    expect(screen.getByText(/Awesome text/i)).toHaveStyleRule('font-size', font_size_body);
    expect(screen.getByText(/Awesome text/i)).toHaveStyleRule('font-family', font_family_body);
    expect(screen.getByText(/Awesome text/i)).toHaveStyleRule('color', font_color);
  });

  it('can be render with another tag-name', () => {
    render(<Text as="span">Awesome text</Text>);

    expect(screen.getByText(/Awesome text/i).tagName.toLowerCase()).toEqual('span');
  });

  it('equal snapshot', () => {
    const { container } = render(<Text>Awesome text</Text>);
    expect(container).toMatchSnapshot();
  });
});
