
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

  // useEffect(() => {
  //   setTimeLeft(duration);
  // }, [duration]);

  const Test =() =>{
    setTimeLeft(duration);
  }
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

  const radius = 40; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle

  // Calculate the stroke dashoffset based on time left
  const strokeDashoffset = () => {
    const totalTime = duration; // Total time in seconds
    const percentageLeft = timeLeft / totalTime;
    return circumference * (1 - percentageLeft);
  };
  return (
    <div className="typing-container">
    
    <div className="w-24 h-24 flex items-center justify-center">
        <svg width="96" height="96" viewBox="0 0 96 96">
          <circle
            cx="48"
            cy="48"
            r={radius}
            fill="none"
            stroke="#000dff"
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset()}
            transform="rotate(-90 48 48)" // Rotate to start from the top
          />
          <text x="50%" y="50%" dy=".3em" textAnchor="middle" className="text-2xl font-bold text-gray-700">
            {formatTime(timeLeft)}
          </text>
        </svg>
      </div>
      <div className="text-display">
        {words.map((word, index) => (
          <span 
            key={index} 
            className={`${index === currentWordIndex ? 'current-word' : ''} ${incorrectWords.has(index) ? 'incorrect-word' : ''} text-lg tracking-widest word-spacing-widest font-normal  text-gray-600 `}
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
        onClick={Test}
      />
    </div>
  );
};

export default TypingPractice;
