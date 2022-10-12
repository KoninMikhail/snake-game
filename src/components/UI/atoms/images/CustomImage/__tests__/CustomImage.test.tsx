import { render, screen } from '@testing-library/react';
import { CustomImage } from '../CustomImage';

describe('Custom Image', () => {
  const imageUrl = '#imageurl';
  const imageTestId = 'custom-image';

  it('should create a image with only require attrs', () => {
    render(<CustomImage src={imageUrl} width={'62vw'} data-testid={imageTestId} />);
    const customImageElement = screen.getByTestId(imageTestId);

    expect(customImageElement).toHaveAttribute('src', '#imageurl');
    expect(customImageElement).toHaveAttribute('width', '62vw');
  });

  it('should render the image with all attrs', () => {
    render(
      <CustomImage
        src={imageUrl}
        width={'76vw'}
        height={'22vh'}
        alt={'alt'}
        data-testid={imageTestId}
      />
    );
    const customImageElement = screen.getByTestId(imageTestId);

    expect(customImageElement).toHaveAttribute('src', '#imageurl');
    expect(customImageElement).toHaveAttribute('width', '76vw');
    expect(customImageElement).toHaveAttribute('height', '22vh');
    expect(customImageElement).toHaveAttribute('alt', 'alt');
  });

  it('render correctly', () => {
    render(
      <CustomImage
        src={imageUrl}
        width={'76vw'}
        height={'22vh'}
        alt={'alt'}
        data-testid={imageTestId}
      />
    );

    expect(screen.getByTestId(imageTestId)).toMatchSnapshot();
  });
});
