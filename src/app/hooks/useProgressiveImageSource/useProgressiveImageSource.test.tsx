import { renderHook, waitFor } from '@testing-library/react';
import useProgressiveImageSource from '@/app/hooks/useProgressiveImageSource/useProgressiveImageSource';

describe('useProgressiveImageSource', () => {
    test('should forward source if placeholder not provided', () => {
        const { result } = renderHook(() => useProgressiveImageSource({ src: '#imageSource' }));
        expect(result.current).toEqual('#imageSource');
    });

    it('should return placeholder source because loading no mock.', () => {
        const { result } = renderHook(() =>
            useProgressiveImageSource({ src: '#imageSource', placeholder: '#placeholderSource' })
        );
        expect(result.current).toEqual('#placeholderSource');
    });

    it('should download logo and return logo source instead of placeholder', async () => {
        const { result } = renderHook(() =>
            useProgressiveImageSource({
                src: 'LOAD_SUCCESS_SRC',
                placeholder: '#placeholderSource',
            })
        );

        await waitFor(
            () => {
                expect(result.current).toEqual('LOAD_SUCCESS_SRC');
            },
            { timeout: 3000 }
        );
    });
});
