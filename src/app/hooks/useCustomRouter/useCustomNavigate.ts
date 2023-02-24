import { NavigateOptions, To, useNavigate } from 'react-router-dom';
import { PAGE_TRANSITION_DURATION } from '@constants/APP';
import { delay } from '@utils/delay/delay';
import { requestNewRoute } from '@store/actions/requestNewRoute';
import useAppDispatch from '@hooks/useAppDispatch/useAppDispatch';

/**
 * @name useCustomNavigate
 *
 * It's a wrapper around the `useNavigate` hook that dispatches
 * an action to the Redux store beforenavigating
 *
 * @returns A function that takes two arguments, to and options, and returns a promise.
 */
export const useCustomNavigate = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    return async (to: To, options?: NavigateOptions) => {
        dispatch(requestNewRoute);
        await delay(PAGE_TRANSITION_DURATION / 2);
        navigate(to, options);
    };
};
