// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import BookList from './components/booklist';
import ChapterList from './components/chapterlist';
import MangaViewer from './components/mangaviewer';

const App = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);

  return (
    <div>
      <h1>Manga Viewer</h1>
      <br></br>
      <BookList onBookSelect={setSelectedBook} />
      <br></br>
      {selectedBook && <ChapterList bookId={selectedBook} onChapterSelect={setSelectedChapter} />}
      <br></br>
      <br></br>
      {selectedChapter && <MangaViewer chapterId={selectedChapter} />}
    </div>
  );
};

export default App;


