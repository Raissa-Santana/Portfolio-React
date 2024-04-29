import { useState, useEffect } from 'react';

const AutoTypingHeader = ({ phrase }) => {
  const [headerText, setHeaderText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 150; // Velocidade de digitação em milissegundos
  const deletingSpeed = 80; // Velocidade de exclusão em milissegundos
  const delayBeforeDeleting = 2000; // Tempo de espera antes de iniciar a exclusão em milissegundos

  useEffect(() => {
    const type = () => {
      setHeaderText(prevText => {
        let newText = '';

        if (isDeleting) {
          newText = prevText.substring(0, prevText.length - 1);
          if (newText === '') {
            setIsDeleting(false);
            setIndex(0);
          }
        } else {
          newText = phrase.substring(0, index + 1);
          if (newText === phrase) {
            setTimeout(() => setIsDeleting(true), delayBeforeDeleting);
          }
          setIndex(prevIndex => prevIndex + 1);
        }

        return newText;
      });
    };

    const timer = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [headerText, index, isDeleting, phrase, delayBeforeDeleting]);

  return <h1>{headerText}</h1>;
};

export default AutoTypingHeader;
