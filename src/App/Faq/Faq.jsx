import { useState } from 'react';
import './styles.css';

export function Faq() {
  const QUESTIONS = [
    {
      question: 'Jak mogę się zapisać na szkolenie?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      question: 'W jaki sposób mogę rozwinąć swoje umiejętności?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      question: 'Jak mogę się zapisać na szkolenie?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      question: 'Jak mogę się zapisać na szkolenie?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      question: 'Jak mogę się zapisać na szkolenie?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ];
  return (
    <div>
      {QUESTIONS.map((el) => (
        <QuestionComponent question={el.question} answer={el.answer} />
      ))}
    </div>
  );
}

const QuestionComponent = ({ question, answer }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="faq">
      <div className="faq-2">
        <h1 className="faq-question" onClick={handleClick}>
          {question}
        </h1>
        <p className="faq-answer">{isVisible && answer}</p>
      </div>
    </div>
  );
};
