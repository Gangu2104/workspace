import React, { useEffect, useState } from 'react';
import { fetchChapterDetails } from '../services/api';

const MangaViewer = ({ chapterId }) => {
  const [pages, setPages] = useState([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [lesson, setlesson] = useState(chapterId); 
  const [start,setstart]=useState(false);
  const [last,setlast]=useState(false);

  
  useEffect(() => {
    // Update lesson whenever chapterId changes
    setlesson(chapterId);
  }, [chapterId])

  useEffect(() => {
    const getPages = async () => {
      if (lesson) {
        const data = await fetchChapterDetails(lesson);
        setPages(data.pages);
        if(!start && last){
          setCurrentPageIndex(data.pages.length-1);
          setlast(false);

        }
        else{setCurrentPageIndex(0);}
         // Reset to the first page when a new chapter is selected
      }
    };
    getPages();
  }, [lesson]);

  
  const nextPage = () => {
    if (currentPageIndex < pages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
    else{
        setlesson((prevId) => prevId + 1); 
    }
  };

  // const previousPage = () => {
  //   if (currentPageIndex > 0) {
  //     setCurrentPageIndex(currentPageIndex - 1);
  //   }
  //   else{
  //       setlesson((prevId) => prevId - 1); 
  //       setCurrentPageIndex(pages.length-1); 
  //   }
  // };

  const previousPage = async () => {
    if (currentPageIndex > 0 && lesson>0) {
      setCurrentPageIndex(currentPageIndex - 1);
    } else if (lesson > 1) {
      // Move to the previous chapter and set to the last page of the previous chapter
      const previousLesson = lesson - 1;
      const data = await fetchChapterDetails(previousLesson); // Fetch the previous chapter
      setPages(data.pages);
      setlast(true);
      setstart(false);
      setlesson(previousLesson);
      setCurrentPageIndex(data.pages.length - 1); // Set to the last page of the previous chapter
    }
  };

  
  return (
    <div>
    <div style={{ position: 'relative', width: '100%', height: '100%',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {/* Display the current image */}
    {pages.length > 0 && pages[currentPageIndex] ? (
          <img 
            src={pages[currentPageIndex].image.file} 
            alt={`Page ${currentPageIndex + 1}`} 
            style={{ width: '20%', height: 'auto' }} 
          />
        ) : (
          <p>Loading...</p> // Optional loading state
        )}
    {/* Left click area */}
    <div 
      onClick={previousPage} 
      style={{ 
        position: 'absolute', 
        left: 0, 
        top: 0, 
        width: '50%', 
        height: '100%', 
        cursor: 'pointer' 
      }} 
    />

    {/* Right click area */}
    <div 
      onClick={nextPage} 
      style={{ 
        position: 'absolute', 
        right: 0, 
        top: 0, 
        width: '50%', 
        height: '100%', 
        cursor: 'pointer' 
      }} 
    />
  </div>
  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <p>{`lesson ${lesson}`} </p>
  <br></br>
  <p>{`Page ${currentPageIndex + 1}/${pages.length}`} </p>

  </div>
  </div>
  );
};

export default MangaViewer;
