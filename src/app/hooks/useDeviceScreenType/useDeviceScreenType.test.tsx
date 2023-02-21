import { act, renderHook, waitFor } from '@testing-library/react';
import useDeviceScreenType from './useDeviceScreenType';
import { mockViewport } from 'jsdom-testing-mocks';

describe('useDeviceScreenType', () => {
    it('should detect devices with breakpoints', async () => {
        const viewport = mockViewport({ width: '320px', height: '568px' });
        const { result } = renderHook(() => useDeviceScreenType());

        // Mobile
        await waitFor(() => expect(result.current.isMobile).toBe(true));
        await waitFor(() => expect(result.current.type).toBe('mobile'));

        // IsTabletScreen
        act(() => {
            viewport.set({ width: '885px', height: '768px' });
        });
        await waitFor(() => expect(result.current.isTablet).toBe(true));
        await waitFor(() => expect(result.current.type).toBe('tablet'));

        // Desktop
        act(() => {
            viewport.set({ width: '1366px', height: '768px' });
        });
        await waitFor(() => expect(result.current.isDesktop).toBe(true));
        await waitFor(() => expect(result.current.type).toBe('desktop'));
    });
});
