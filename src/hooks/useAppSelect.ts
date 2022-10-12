import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
