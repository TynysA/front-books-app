export interface IAuthState {
  isAuth: boolean;
  tokens: {
    access: string | null;
    refresh: string | null;
    apiGatewayAccess: string | null;
    apiGatewayRefresh: string | null;
  };
  user: object;
}
