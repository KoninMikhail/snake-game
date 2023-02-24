import soundReducer, { initialState, soundActions } from '@store/slices/sound.slice';

describe('sound slices', () => {
    it('should return the initial state', () => {
        expect(soundReducer(undefined, { type: undefined })).toEqual(initialState);
    });

    it('should handle change sound state', () => {
        expect(
            soundReducer(
                initialState,
                soundActions.setSound({ isEnabled: !initialState.isEnabled })
            )
        ).toEqual({ ...initialState, isEnabled: !initialState.isEnabled });
    });
});
