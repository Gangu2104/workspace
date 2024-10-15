// import axios from 'axios';

// const API_URL = 'http://52.195.171.228:8080/';

// export const fetchBooks = async () => {
//   const response = await axios.get(`${API_URL}books/`);
//   return response.data;
// };

// export const fetchBookDetails = async (bookId) => {
//   const response = await axios.get(`${API_URL}books/${bookId}/`);
//   return response.data;
// };

// export const fetchChapterDetails = async (chapterId) => {
//   const response = await axios.get(`${API_URL}chapters/${chapterId}/`);
//   return response.data;
// };

import axios from 'axios';

// const API_URL = 'http://52.195.171.228:8080/';

export const fetchBooks = async () => {
    const response = await axios.get('http://52.195.171.228:8080/books/');
    console.log(response.data);
    return response.data;
};

export const fetchBookDetails = async (bookId) => {
    const response = await axios.get(`http://52.195.171.228:8080/books/${bookId}/`); // Use backticks
    return response.data;
};

export const fetchChapterDetails = async (chapterId) => {
    const response = await axios.get(`http://52.195.171.228:8080/chapters/${chapterId}/`); // Use backticks
    return response.data;
};
