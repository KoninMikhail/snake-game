import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

const useActionCreators = (actions: ActionCreatorsMapObject) => {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(actions, dispatch), [actions, dispatch]);
};

export default useActionCreators;
