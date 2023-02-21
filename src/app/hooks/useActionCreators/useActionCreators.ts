import { ActionCreatorsMapObject } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import bindActionCreators from 'react-redux/es/utils/bindActionCreators';

const useActionCreators = (actions: ActionCreatorsMapObject) => {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(actions, dispatch), [actions, dispatch]);
};

export default useActionCreators;
