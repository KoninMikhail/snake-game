import { render } from '@testing-library/react';
import { ExtraShadow } from '@ui/atoms/assets/shadows/blocks/ExtraShadow/ExtraShadow';

describe('ExtraShadow', () => {
    it('equal snapshot', () => {
        const { container } = render(
            <ExtraShadow>
                <div>{'Test ITextProps'}</div>
            </ExtraShadow>
        );

        expect(container).toMatchSnapshot();
    });
});
