import { render, screen } from '@testing-library/react';
import { Grid } from '../Grid';
import { GridItem } from '../../GridItem/GridItem';

describe('Grid', () => {
  const gridProps = {
    justify: 'center',
    align: 'center',
    columns: 'auto 1fr auto',
    rows: 'auto 55px',
    gap: '15px',
  };
  const gridTestId = 'gridParentElementTest';

  it('correctly render grid', () => {
    render(
      <Grid {...gridProps} data-testid={gridTestId}>
        <GridItem>{'item'}</GridItem>
      </Grid>
    );

    const gridElement = screen.getByTestId(gridTestId);

    expect(gridElement).toHaveStyleRule('display', 'grid');
    expect(gridElement).toHaveStyleRule('grid-template-columns', 'auto 1fr auto');
    expect(gridElement).toHaveStyleRule('grid-template-rows', 'auto 55px');
    expect(gridElement).toHaveStyleRule('grid-gap', '15px');
    expect(gridElement).toHaveStyleRule('justify-content', 'center');
    expect(gridElement).toHaveStyleRule('align-items', 'center');
  });
  it('equal snapshot', () => {
    render(
      <Grid {...gridProps} data-testid={gridTestId}>
        <GridItem>{'item'}</GridItem>
      </Grid>
    );

    const gridElement = screen.getByTestId(gridTestId);

    expect(gridElement).toMatchSnapshot();
  });
});
