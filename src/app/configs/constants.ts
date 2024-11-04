export const isDev = import.meta.env.MODE === 'development';

export const baseHttp = isDev ? import.meta.env.VAR_HTTP_D : import.meta.env.VAR_HTTP_P;
