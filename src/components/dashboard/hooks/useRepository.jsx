import { useState } from 'react';

import auth from '../../../utils/auth';

const useRepository = () => {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);

  const actions = {

    getListCourse: () => {
      setLoading(true);
      setTimeout(() => {
        setCourses([
          {
            id: 1,
            cover: '',
            title: 'Web Development',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, blanditiis laboriosam. Eum dolor rem commodi. Nam, voluptate error? Nesciunt nemo ullam eius maxime incidunt odio? Reprehenderit tempora voluptas id facilis?'
          },
          {
            id: 2,
            cover: '',
            title: 'Web Development',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, blanditiis laboriosam. Eum dolor rem commodi. Nam, voluptate error? Nesciunt nemo ullam eius maxime incidunt odio? Reprehenderit tempora voluptas id facilis?'
          },
          {
            id: 3,
            cover: '',
            title: 'Web Development',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, blanditiis laboriosam. Eum dolor rem commodi. Nam, voluptate error? Nesciunt nemo ullam eius maxime incidunt odio? Reprehenderit tempora voluptas id facilis?'
          },
          {
            id: 4,
            cover: '',
            title: 'Web Development',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, blanditiis laboriosam. Eum dolor rem commodi. Nam, voluptate error? Nesciunt nemo ullam eius maxime incidunt odio? Reprehenderit tempora voluptas id facilis?'
          }
        ]);
        setLoading(false);
      }, 5000);
    },

    signout: (cb) => {
      setLoading(true);
      setTimeout(() => {
        auth.logout();
        setLoading(false);
        cb();
      }, 1000);
    }
  };
  return {
    actions,
    loading,
    courses
  }
}

export default useRepository;