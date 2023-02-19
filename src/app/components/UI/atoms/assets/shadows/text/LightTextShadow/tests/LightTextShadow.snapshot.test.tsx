import { render } from '@testing-library/react';
import { LightTextShadow } from '@ui/atoms/assets/shadows/text/LightTextShadow/LightTextShadow';

describe('LightTextShadow', () => {
    it('equal snapshot', () => {
        const { container } = render(
            <LightTextShadow>
                <div>{'Test ITextProps'}</div>
            </LightTextShadow>
        );

        expect(container).toMatchSnapshot();
    });
});
