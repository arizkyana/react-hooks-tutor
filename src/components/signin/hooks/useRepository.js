import { useState } from 'react';

import auth from '../../../utils/auth';

const useRepository = () => {
  const [loading, setLoading] = useState(false);

  const actions = {
    signin: (payload, cb) => {

      setLoading(true);
      setTimeout(() => {
        auth.setToken('user-token-here');
        setLoading(false);
        cb();
      }, 1000);
    }
  };
  return {
    actions,
    loading
  }
}

export default useRepository;