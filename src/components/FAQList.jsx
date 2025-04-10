import { useState } from "react";
import FAQCard from "./FAQCard";

const FAQList = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  
  const faqItems = [
    {
      number: "01",
      question: "O treino é individualizado?",
      answer: "Sim. O treino é individualizado para cada aluno, levando em consideração seus objetivos, condição física atual e histórico de treinamento."
    },
    {
      number: "02",
      question: "Com que frequência devo treinar?",
      answer: "A frequência ideal varia de acordo com seus objetivos e disponibilidade. Geralmente recomendamos de 3 a 5 sessões semanais para obter resultados consistentes."
    },
    {
      number: "03",
      question: "Quanto tempo leva para ver resultados?",
      answer: "Os primeiros resultados podem ser percebidos entre 4 a 6 semanas de treinamento consistente, embora isso varie de acordo com seus objetivos, genética e comprometimento com o programa."
    },
    {
      number: "04",
      question: "Vocês oferecem orientação nutricional?",
      answer: "Sim, oferecemos orientação nutricional básica como parte do programa. Para planos nutricionais detalhados, trabalhamos em parceria com nutricionistas especializados."
    }
  ];
  
  const handleCardClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null); 
    } else {
      setSelectedIndex(index); 
    }
  };
  
  return (
    <div className="flex flex-col gap-6">
      {faqItems.map((item, index) => (
        <FAQCard 
          key={index}
          number={item.number}
          question={item.question}
          answer={item.answer}
          isSelected={selectedIndex === index}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
};

export default FAQList;