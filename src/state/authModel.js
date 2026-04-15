export const initialAuthState = {
  isAuthenticated: false,
  user: null,
  roles: [],
  token: null
};

export const ActionTypes = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
  UPDATE_ROLES: 'UPDATE_ROLES'
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true, user: action.payload.user, roles: action.payload.roles, token: action.payload.token };
    case ActionTypes.LOGOUT:
      return { ...initialAuthState };
    case ActionTypes.UPDATE_ROLES:
      return { ...state, roles: action.payload.roles };
    default:
      return state;
  }
};