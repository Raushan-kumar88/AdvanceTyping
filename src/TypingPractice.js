// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import "./TypingPractice.css"

// const TypingPractice = () => {
//   const practiceText = "Hello world. Practice typing here."; // Example text
//   const words = practiceText.split(' ');
//   const [userInput, setUserInput] = useState('');
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [lastWordCorrect, setLastWordCorrect] = useState(true);

//   const [timeLeft, setTimeLeft] = useState(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Extract and set the duration from URL query params
//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const duration = Number(searchParams.get('duration')) * 60; // Convert minutes to seconds
//     setTimeLeft(duration);
//   }, [location]);

//   // Timer logic
//   useEffect(() => {
//     let timerId;
//     if (timeLeft > 0) {
//       timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//     } else if (timeLeft === 0) {
//       // Calculate statistics here (placeholder for now)
//       const statistics = {
//         grossWPM: 0,
//         accuracy: 0,
//         netWPM: 0
//       };

//       navigate('/results', { state: statistics });
//     }

//     return () => clearTimeout(timerId);
//   }, [timeLeft, navigate]);

//   const handleInputChange = (event) => {
//     const input = event.target.value;
//     setUserInput(input);

//     if (input.endsWith(' ') || currentWordIndex === words.length - 1) {
//       const currentWord = words[currentWordIndex];
//       const typedWord = input.trim();
//       setLastWordCorrect(currentWord === typedWord);

//       setCurrentWordIndex((currentWordIndex + 1) % words.length);
//       setUserInput('');
//     }
//   };

//   // Helper function to format time in mm:ss format
//   const formatTime = (seconds) => {
//     if (seconds === null) return '00:00';
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
//   };

//   return (
//     <div>
//       <p>Time Left: {formatTime(timeLeft)}</p>
//       <div>
//         {words.map((word, index) => (
//           <span 
//             key={index} 
//             className={`${
//               index === currentWordIndex ? 'current-word' : '' 
//             } ${
//               index === currentWordIndex - 1 && !lastWordCorrect ? 'incorrect-word' : ''
//             }`}
//           >
//             {word}{' '}
//           </span>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={userInput}
//         onChange={handleInputChange}
//         placeholder="Start typing..."
//       />
//     </div>
//   );
// };

// export default TypingPractice;


// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import './TypingPractice.css'; // Make sure to include the CSS file

// const TypingPractice = () => {
//   const practiceText = "Hello world. Practice typing here.";
//   const words = practiceText.split(' ');
//   const [userInput, setUserInput] = useState('');
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [correctWords, setCorrectWords] = useState(0);
//   const [totalWords, setTotalWords] = useState(0);

//   const [timeLeft, setTimeLeft] = useState(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const duration = Number(searchParams.get('duration')) * 60;
//     setTimeLeft(duration);
//   }, [location]);

//   useEffect(() => {
//     let timerId;
//     if (timeLeft > 0) {
//       timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//     } else if (timeLeft === 0) {
//       const grossWPM = totalWords / (Number(searchParams.get('duration')));
//       const accuracy = (correctWords / totalWords) * 100;
//       const netWPM = correctWords / (Number(searchParams.get('duration')));

//       navigate('/results', { state: { grossWPM, accuracy, netWPM } });
//     }

//     return () => clearTimeout(timerId);
//   }, [timeLeft, navigate, totalWords, correctWords]);

//   const handleInputChange = (event) => {
//     const input = event.target.value;
//     setUserInput(input);

//     if (input.endsWith(' ') || (currentWordIndex === words.length - 1 && input.trim() === words[words.length - 1])) {
//       const currentWord = words[currentWordIndex];
//       const typedWord = input.trim();
//       setTotalWords(totalWords + 1);

//       if (currentWord === typedWord) {
//         setCorrectWords(correctWords + 1);
//       }

//       setCurrentWordIndex((currentWordIndex + 1) % words.length);
//       setUserInput('');
//     }
//   };

//   const formatTime = (seconds) => {
//     if (seconds === null) return '00:00';
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
//   };

//   return (
//     <div>
//       <p>Time Left: {formatTime(timeLeft)}</p>
//       <div className="text-display">
//         {words.map((word, index) => (
//           <span 
//             key={index} 
//             className={index === currentWordIndex ? 'current-word' : ''}
//           >
//             {word}{' '}
//           </span>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={userInput}
//         onChange={handleInputChange}
//         placeholder="Start typing..."
//         className="typing-input"
//       />
//     </div>
//   );
// };

// export default TypingPractice;


// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import './TypingPractice.css'; // Make sure to include the CSS file

// const TypingPractice = () => {
//   const practiceText = "Hello world. Practice typing here.";
//   const words = practiceText.split(' ');
//   const [userInput, setUserInput] = useState('');
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [correctWords, setCorrectWords] = useState(0);
//   const [totalWords, setTotalWords] = useState(0);

//   const [timeLeft, setTimeLeft] = useState(null);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const duration = Number(searchParams.get('duration')) * 60; // Convert minutes to seconds

//   useEffect(() => {
//     setTimeLeft(duration);
//   }, [duration]);

//   useEffect(() => {
//     let timerId;
//     if (timeLeft > 0) {
//       timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//     } else if (timeLeft === 0) {
//       const grossWPM = totalWords / (duration / 60);
//       const accuracy = (correctWords / totalWords) * 100;
//       const netWPM = correctWords / (duration / 60);

//       navigate('/results', { state: { grossWPM, accuracy, netWPM } });
//     }

//     return () => clearTimeout(timerId);
//   }, [timeLeft, navigate, totalWords, correctWords, duration]);

//   const handleInputChange = (event) => {
//     const input = event.target.value;
//     setUserInput(input);

//     if (input.endsWith(' ') || (currentWordIndex === words.length - 1 && input.trim() === words[words.length - 1])) {
//       const currentWord = words[currentWordIndex];
//       const typedWord = input.trim();
//       setTotalWords(totalWords + 1);

//       if (currentWord === typedWord) {
//         setCorrectWords(correctWords + 1);
//       }

//       setCurrentWordIndex((currentWordIndex + 1) % words.length);
//       setUserInput('');
//     }
//   };

//   const formatTime = (seconds) => {
//     if (seconds === null) return '00:00';
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
//   };

//   return (
//     <div>
//       <p>Time Left: {formatTime(timeLeft)}</p>
//       <div className="text-display">
//         {words.map((word, index) => (
//           <span 
//             key={index} 
//             className={index === currentWordIndex ? 'current-word' : ''}
//           >
//             {word}{' '}
//           </span>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={userInput}
//         onChange={handleInputChange}
//         placeholder="Start typing..."
//         className="typing-input"
//       />
//     </div>
//   );
// };

// export default TypingPractice;


import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './TypingPractice.css'; // Make sure to include the CSS file

const TypingPractice = () => {
  const practiceText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  const words = practiceText.split(' ');
  const [userInput, setUserInput] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);
  const [totalWords, setTotalWords] = useState(0);
  const [incorrectWords, setIncorrectWords] = useState(new Set());

  const [timeLeft, setTimeLeft] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const duration = Number(searchParams.get('duration')) * 60; // Convert minutes to seconds

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  useEffect(() => {
    let timerId;
    if (timeLeft > 0) {
      timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      const grossWPM = totalWords / (duration / 60);
      const accuracy = (correctWords / totalWords) * 100;
      const netWPM = correctWords / (duration / 60);

      navigate('/results', { state: { grossWPM, accuracy, netWPM } });
    }

    return () => clearTimeout(timerId);
  }, [timeLeft, navigate, totalWords, correctWords, duration]);

  const handleInputChange = (event) => {
    const input = event.target.value;
    setUserInput(input);
  
    if (input.endsWith(' ') || (currentWordIndex === words.length - 1 && input.trim() === words[words.length - 1])) {
      const currentWord = words[currentWordIndex];
      const typedWord = input.trim();
      setTotalWords(totalWords + 1);
  
      if (currentWord === typedWord) {
        setCorrectWords(correctWords + 1);
      } else {
        setIncorrectWords(new Set(incorrectWords).add(currentWordIndex));
      }
  
      // Resetting incorrect words and moving to the next word
      if (currentWordIndex === words.length - 1) {
        setIncorrectWords(new Set()); // Clear incorrect words when text is completed
      }
  
      setCurrentWordIndex((currentWordIndex + 1) % words.length);
      setUserInput('');
    }
  };
  
  const formatTime = (seconds) => {
    if (seconds === null) return '00:00';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="typing-container">
      <p>Time Left: {formatTime(timeLeft)}</p>
      <div className="text-display">
        {words.map((word, index) => (
          <span 
            key={index} 
            className={`${index === currentWordIndex ? 'current-word' : ''} ${incorrectWords.has(index) ? 'incorrect-word' : ''}`}
          >
            {word}{' '}
          </span>
        ))}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder={currentWordIndex === 0 && userInput === '' ? "Start typing..." : ''}
        className="typing-input"
      />
    </div>
  );
};

export default TypingPractice;
