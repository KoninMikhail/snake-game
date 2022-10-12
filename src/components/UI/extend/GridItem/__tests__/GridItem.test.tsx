import { render, screen } from '@testing-library/react';
import { GridItem } from '../GridItem';

describe('GridItem', () => {
  const gridItemProps = {
    justify: 'center',
    align: 'center',
    gridColumn: 'main-start',
    gridRow: 'span 3',
  };
  const childrenContent = 'childrenContent';
  const gridItemTestId = 'gridItemTestId';

  it('should be render with props', () => {
    render(
      <GridItem data-testid={gridItemTestId} {...gridItemProps}>
        {childrenContent}
      </GridItem>
    );

    const itemContainer = screen.getByTestId(gridItemTestId);

    expect(itemContainer).toHaveStyleRule('display', 'block');
    expect(itemContainer).toHaveStyleRule('grid-column', 'main-start');
    expect(itemContainer).toHaveStyleRule('grid-row', 'span 3');
    expect(itemContainer).toHaveStyleRule('justify-self', 'center');
    expect(itemContainer).toHaveStyleRule('align-self', 'center');
  });

  it('should be render without props', () => {
    render(<GridItem data-testid={gridItemTestId}>{childrenContent}</GridItem>);

    const itemContainer = screen.getByTestId(gridItemTestId);

    expect(itemContainer).toHaveStyleRule('display', 'block');
    expect(itemContainer).toHaveStyleRule('grid-column', 'auto');
    expect(itemContainer).toHaveStyleRule('grid-row', 'auto');
    expect(itemContainer).toHaveStyleRule('justify-self', 'auto');
    expect(itemContainer).toHaveStyleRule('align-self', 'auto');
  });

  it('equal snapshot', () => {
    render(<GridItem data-testid={gridItemTestId}>{childrenContent}</GridItem>);
    expect(screen.getByTestId(gridItemTestId)).toMatchSnapshot();
  });
});
