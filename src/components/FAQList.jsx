import { useState } from "react";
import FAQCard from "./FAQCard";

const FAQList = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  
  const faqItems = [
    {
      number: "01",
      question: "O treino é individualizado?",
      answer: "Sim, o treino é completamente individualizado para atender às necessidades específicas de cada aluno. Levamos em consideração o seu objetivo, nível de condicionamento físico, histórico de treinos e até mesmo lesões ou limitações que possam impactar seu desempenho. Cada plano é elaborado com foco no que você deseja alcançar, seja ganhar massa muscular, perder gordura ou melhorar a saúde geral."
    },
    {
      number: "02",
      question: "Com que frequência devo treinar?",
      answer: "A frequência ideal de treino pode variar bastante dependendo dos seus objetivos, disponibilidade e condicionamento atual. Para a maioria dos nossos alunos, recomendamos entre 3 a 5 sessões semanais. Essa frequência é suficiente para promover progressos consistentes, seja para emagrecimento, ganho de força ou hipertrofia muscular. A qualidade do treino, juntamente com o descanso adequado, é fundamental para o sucesso do seu programa."
    },
    {
      number: "03",
      question: "Quanto tempo leva para ver resultados?",
      answer: "Os primeiros resultados podem aparecer entre 4 a 6 semanas de treinamento consistente. No entanto, os resultados podem variar dependendo de fatores como genética, comprometimento com a rotina de treinos e alimentação. Embora mudanças visíveis, como aumento de massa muscular ou perda de gordura, comecem a se tornar perceptíveis após algumas semanas, o fortalecimento do corpo e melhorias no condicionamento físico podem ser observados ainda mais rapidamente."
    },
    {
      number: "04",
      question: "Vocês oferecem orientação nutricional?",
      answer: "Sim, oferecemos orientação nutricional básica como parte do nosso programa de treino. Nossa abordagem é garantir que você tenha uma alimentação que complemente seus objetivos. Para planos nutricionais detalhados e específicos, trabalhamos em parceria com nutricionistas especializados, que podem elaborar uma dieta completamente personalizada, levando em conta suas necessidades calóricas, preferências alimentares e qualquer condição médica que precise de atenção."
    },
    {
      number: "05",
      question: "Quais tipos de treino vocês oferecem?",
      answer: "Oferecemos uma ampla gama de tipos de treino para atender às diferentes necessidades e objetivos dos nossos alunos. Isso inclui treinos focados em hipertrofia (aumento de massa muscular), emagrecimento (queima de gordura), condicionamento físico geral (melhora da resistência e saúde cardiovascular), além de programas específicos para preparação esportiva, onde trabalhamos a força, agilidade e resistência de atletas de diferentes modalidades. Todos os treinos são personalizáveis e podem ser ajustados conforme o seu progresso."
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
    <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
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