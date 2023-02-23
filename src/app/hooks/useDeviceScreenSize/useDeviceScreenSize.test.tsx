import { act, renderHook, waitFor } from '@testing-library/react';
import useDeviceScreenSize from './useDeviceScreenSize';
import { mockViewport } from 'jsdom-testing-mocks';

describe('useDeviceScreenSize', () => {
    it('should detect devices with breakpoints', async () => {
        const viewport = mockViewport({ width: '320px', height: '568px' });
        const { result } = renderHook(() => useDeviceScreenSize());

        // Mobile
        await waitFor(() => expect(result.current.isSmall).toBe(true));
        await waitFor(() => expect(result.current.size).toBe('small'));

        // Is middle screen
        act(() => {
            viewport.set({ width: '885px', height: '768px' });
        });
        await waitFor(() => expect(result.current.isMiddle).toBe(true));
        await waitFor(() => expect(result.current.size).toBe('middle'));

        // is large screen
        act(() => {
            viewport.set({ width: '1366px', height: '768px' });
        });
        await waitFor(() => expect(result.current.isLarge).toBe(true));
        await waitFor(() => expect(result.current.size).toBe('large'));
    });
});
