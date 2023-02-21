import { fireEvent, renderHook, waitFor } from '@testing-library/react';
import useKeyPress from '@/app/hooks/useKeyPress/useKeyPress';

describe('useKeyPress', () => {
    it('should detect key press', async () => {
        const jestFn = jest.fn();
        renderHook(() => useKeyPress(['Tab', 'Enter'], jestFn));

        fireEvent.keyDown(document, { key: 'Tab' });
        fireEvent.keyDown(document, { key: 'Enter' });

        await waitFor(() => {
            expect(jestFn.mock.calls.length).toBe(2);
        });
    });

    it('should not detect last key press', async () => {
        const jestFn = jest.fn();
        renderHook(() => useKeyPress(['Tab', 'Enter'], jestFn));

        fireEvent.keyDown(document, { key: 'Tab' });
        fireEvent.keyDown(document, { key: 'Enter' });
        fireEvent.keyDown(document, { key: 'A' });

        await waitFor(() => {
            expect(jestFn.mock.calls.length).toBe(2);
        });
    });
});
