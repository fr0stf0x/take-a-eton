import React from 'react';
import styled from 'styled-components';

const Message = styled.h5`
  font-size: 1.5rem;
`;

const arrMsg = [
  'Hi! How are you?',
  'How is your day?',
  'Greeting!',
  'What are you doing?',
  'What are you up to?',
]

const Greeting = () => {
  const greetingMsg = arrMsg[Math.floor(Math.random() * arrMsg.length)];

  return (
    <Message>{greetingMsg}</Message>
  )
}

export default Greeting