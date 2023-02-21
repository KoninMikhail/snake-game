import sendErrorCode from '@utils/sendErrorCode/sendErrorCode';

describe('sendErrorCode', () => {
    it('should send throw', () => {
        const t = () => sendErrorCode('UNKNOWN ERROR');
        expect(t).toThrow(Error);
        expect(t).toThrow('UNKNOWN ERROR');
    });
});
