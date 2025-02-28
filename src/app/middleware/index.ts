import { Middleware } from '@reduxjs/toolkit';

import { api } from '@/app/api';
import { errorHandler } from '@/app/middleware/api/error-handler';

export const middlewares: Middleware[] = [api.middleware, errorHandler];
