import { renderHook } from '@testing-library/react';
import useWindowOrientation from '@/app/hooks/useWindowOrientation/useWindowOrientation';
import { mockViewport } from 'jsdom-testing-mocks';

describe('useWindowOrientation', () => {
    describe('landscape', () => {
        it('should detect values for window orientation', async () => {
            Object.defineProperty(window.screen, 'orientation', {
                value: { type: 'landscape-primary' },
            });

            mockViewport({ width: '1920px', height: '1080px' });
            const { result } = renderHook(() => useWindowOrientation());

            expect(result.current.orientation).toEqual('landscape');
            expect(result.current.isLandscapeOrientation).toEqual(true);
        });
    });
});
