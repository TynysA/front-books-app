import { isRejectedWithValue, PayloadAction } from '@reduxjs/toolkit';
import { assoc, path } from 'ramda';
import { toast } from 'react-toastify';

import i18n from '@/app/i18n/config';
import { IErrorPayloadData } from '@/app/middleware/types';
import { messageByCode } from '@/shared/utils';

export const errorHandler =
  () => (next: (action: unknown) => unknown) => (action: PayloadAction<IErrorPayloadData>) => {
    if (!isRejectedWithValue(action) && !action.payload?.errorCode) return next(action);
    else if (action.payload.status === 429) {
      toast.error((() => i18n.t('messages.too-many-requests'))(), {
        position: 'top-center',
        hideProgressBar: true,
        autoClose: 10000
      });
    } else if (action.payload.status >= 500) {
      toast.error((() => i18n.t('messages.server-error'))(), {
        position: 'top-center',
        hideProgressBar: true,
        autoClose: 10000
      });
    } else if (action.payload.status >= 400) {
      if (
        !(
          action.payload.status == 403 &&
          action.error.message == 'Rejected' &&
          action.type == 'api/executeQuery/rejected'
        )
      ) {
        toast.error((() => action.payload.data.message)(), {
          position: 'top-center',
          hideProgressBar: true,
          autoClose: 10000
        });
      }
    } else {
      if (!action?.meta?.arg?.endpointName == 'getpolicylistbyiinbin' && action.payload.errorCode == 1004) {
        toast.error((() => messageByCode(action.payload.errorCode))(), {
          position: 'top-center',
          hideProgressBar: true,
          autoClose: 10000
        });
      }
    }
    return next(assoc('payload', path(['payload', 'data', 'error'], action), action));
  };
