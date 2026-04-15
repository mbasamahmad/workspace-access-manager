export const login = async (credentials) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (credentials.username === 'admin' && credentials.password === 'admin') {
        resolve({
          user: 'admin',
          roles: ['admin'],
          token: 'fake-jwt-token'
        });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};

export const logout = () => {
  return Promise.resolve();
};

export const refreshToken = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('new-fake-jwt-token');
    }, 1000);
  });
};