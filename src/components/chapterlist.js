import React, { useEffect, useState } from 'react';
import { fetchBookDetails } from '../services/api';

const ChapterList = ({ bookId, onChapterSelect }) => {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const getChapters = async () => {
      if (bookId) {
        const data = await fetchBookDetails(bookId);
        console.log(data.chapter_ids);
        setChapters(data.chapter_ids);
      }
    };
    getChapters();
  }, [bookId]);

  return (
    <div>
      {chapters.map((chapter,index) => (
        <button key={index} onClick={() => onChapterSelect(chapter)}>
          {chapter}
        </button>
      ))}
    </div>
  );
};

export default ChapterList;
