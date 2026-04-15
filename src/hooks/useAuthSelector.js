import { useContext, useMemo } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const useAuthSelector = (selector) => {
  const { state } = useContext(AuthContext);
  return useMemo(() => selector(state), [state, selector]);
};

export default useAuthSelector;