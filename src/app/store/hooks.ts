import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '@/app/store/config';

export const useTypedDispatch = useDispatch.withTypes<AppDispatch>();
export const useTypedSelector = useSelector.withTypes<RootState>();
