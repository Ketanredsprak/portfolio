import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, speed = 100, deleteSpeed = 50, delay = 1500 }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const word = words[currentWordIndex];
        let timer;

        if (isDeleting) {
            timer = setTimeout(() => {
                setCurrentText(word.substring(0, currentText.length - 1));
            }, deleteSpeed);
        } else {
            timer = setTimeout(() => {
                setCurrentText(word.substring(0, currentText.length + 1));
            }, speed);
        }

        if (!isDeleting && currentText === word) {
            setTimeout(() => setIsDeleting(true), delay);
        } else if (isDeleting && currentText === '') {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, words, speed, deleteSpeed, delay]);

    return <span className="highlight">{currentText}|</span>;
};

export default Typewriter;
