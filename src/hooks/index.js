import * as api from '../api';
import { useQuery, useMutation, queryCache } from 'react-query';
import history from 'helpers/history';

const useRegister = ({ onSuccess }) => {
  return useMutation(api.register, {
    onSuccess: () => {
      queryCache.refetchQueries('users');
      onSuccess();
    },
  });
};

const useLogin = () => {
  return useMutation(api.login, {
    onSuccess: ({ token }) => {
      localStorage.setItem('token', token);
      history.push('/users')
    },
  });
};

const useUsers = (page) => {
  return useQuery(['users', page], api.getUsers, {
    refetchOnWindowFocus: false
  });
  
};

const useUser = (id) => {
  return useQuery(['user', id], api.getSingleUser, {
    refetchOnWindowFocus: false
  });
};

const useCreateUser = (page) => {
  return useMutation(api.createUser, {
    onSuccess: (_, { id, ...variables }) => {
      const users = queryCache.getQueryData(['users', page]);
      const userList = users?.data;
      const data = userList?.push(variables);
      queryCache.setQueryData(['users', page], {...users, data});
      history.push('/users');
    },
    onError: (error) => {
      alert(error)
    }
  });
};

const useDeleteUser = (page) => {
  return useMutation(api.deleteUser, {
    onSuccess: (_, id) => {
      const users = queryCache.getQueryData(['users', page]);
      const userList = users?.data;
      const data = userList?.filter((item) => item.id !== id);
      queryCache.setQueryData(['users', page], {...users, data});
    },
    onError: (error) => {
      alert(error);
    },
  });
};

const useUpdateUser = (page) => {
  return useMutation(api.editUser, {
    refetchOnWindowFocus: false,
    onSuccess: (_, { id, ...variables }) => {
      queryCache.refetchQueries(['users', page]);
      queryCache.refetchQueries(['user', id]);
      history.push('/users');
    },
    onError: (error) => {
      alert(error)
    }
  });
};

const useResources = (page) => {
  return useQuery(['resources', page], api.getResources);
};

const useResource = (id) => {
  return useQuery(['resource', id], api.getSingleResource);
};

export { useRegister, useLogin, useUsers, useResource, useResources, useDeleteUser, useCreateUser, useUpdateUser, useUser };
