import { screen, render } from '@testing-library/react';
import { BackgroundImage } from '../BackgroundImage';
import { Text } from '../../../body/Text/Text';

describe('BackgroundImage Image', () => {
  const backgroundImageSrc = '#bgImage.png';
  const backgroundImagePosition = 'center bottom';
  const backgroundImageSize = 'cover';
  const childrenContent = <Text>{'blah'}</Text>;
  const testId = 'background-element';

  it('should be valid css styles', () => {
    render(
      <BackgroundImage
        src={backgroundImageSrc}
        position={backgroundImagePosition}
        size={backgroundImageSize}
        data-testid={testId}
      >
        {childrenContent}
      </BackgroundImage>
    );

    const backgroundElement = screen.getByTestId(testId);

    expect(backgroundElement).toHaveStyleRule('background-image', `url(${backgroundImageSrc})`);
    expect(backgroundElement).toHaveStyleRule('background-position', backgroundImagePosition);
    expect(backgroundElement).toHaveStyleRule('background-size', backgroundImageSize);
  });

  it('should be equal snapshot', () => {
    render(
      <BackgroundImage
        src={backgroundImageSrc}
        position={backgroundImagePosition}
        size={backgroundImageSize}
        data-testid={testId}
      >
        {childrenContent}
      </BackgroundImage>
    );

    expect(screen.getByTestId(testId)).toMatchSnapshot();
  });
});
