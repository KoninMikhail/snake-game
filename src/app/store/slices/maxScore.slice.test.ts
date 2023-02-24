import maxScoreReducer, { initialState, updateMaxScore } from './maxScore.slice';

describe('sound slices', () => {
    it('should return the initial state', () => {
        expect(maxScoreReducer(undefined, { type: undefined })).toEqual(initialState);
    });

    it('should handle change sound state', () => {
        expect(maxScoreReducer(initialState, updateMaxScore(255))).toEqual(255);
    });
});
