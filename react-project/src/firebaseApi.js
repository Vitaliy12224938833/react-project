import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:3000', // базовый URL вашего прокси-сервера
});

const readFromFirestore = async (userId) => {
  const response = await instance.post('/firestore/read', { userId });
  return response.data;
};

const removeFromList = async ({ userId, id, category, mediaType }) => {
  const response = await instance.post('/firestore/remove-from-list', {
    userId,
    id,
    category,
    mediaType,
  });
  return response.data;
};

const removeFromGlobalList = async ({ userId, id, mediaType }) => {
  const response = await instance.post('/firestore/remove-from-global-list', {
    userId,
    id,
    mediaType,
  });
  return response.data;
};

const saveInList = async ({ id, userId, category, mediaType }) => {
  const response = await instance.post('/firestore/save-in-list', {
    id,
    userId,
    category,
    mediaType,
  });
  return response.data;
};

const saveInGlobalList = async ({ userId, id, mediaType }) => {
  const response = await instance.post('/firestore/save-in-global-list', {
    userId,
    id,
    mediaType,
  });
  return response.data;
};

const setFirestoreData = async ({ userId, personData }) => {
  const response = await instance.post('/firestore/set', {
    userId,
    personData,
  });
  return response.data;
};

const updateFirestoreData = async ({ userId, personData }) => {
  const response = await instance.post('/firestore/update', {
    userId,
    personData,
  });
  return response.data;
};

const saveImageToStorage = async ({ userId, file }) => {
  const response = await instance.post('/storage/save-img', { userId, file });
  return response.data;
};

const signIn = async ({ email, password }) => {
  const response = await instance.post('/sign-in', { email, password });
  return response.data;
};

const signOut = async () => {
  const response = await instance.get('/sign-out');
  return response.data;
};

const signUp = async ({ email, password }) => {
  const response = await instance.post('/sign-up', { email, password });
  return response.data;
};

const authOn = async () => {
  const response = await instance.get('/auth-on');
  return response.data;
};

export {
  readFromFirestore,
  removeFromList,
  removeFromGlobalList,
  saveInList,
  saveInGlobalList,
  setFirestoreData,
  updateFirestoreData,
  saveImageToStorage,
  signIn,
  signOut,
  signUp,
  authOn,
};
