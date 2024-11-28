export interface Interview {
  id: string;
  job: string;
  responded: boolean;
  questions: Question[];
}

export interface Question {
  id: string;
  question: string;
  limit: number;
  audioAnswer?: Blob[];
  hasAnswer?: boolean;
}

export default function getInterviews() {
  const interviews: Interview[] = [
    {
      id: "questionID",
      job: "Frontend Developer",
      responded: false,
      questions: [
        {
          id: "p-um",
          question: "Como você aborda a resolução de um problema complexo no desenvolvimento de software?",
          limit: 180,
        },
        {
          id: "p-dois",
          question: "Pode descrever um projeto no qual você usou tecnologias como React, Node.js ou outras que você domina? Quais foram os maiores desafios e como você os superou?",
          limit: 180,
        },
        {
          id: "p-tres",
          question: "Qual sua experiência com testes automatizados? Pode explicar como implementaria testes em um projeto React/Node.js?",
          limit: 180,
        },
        {
          id: "p-quatro",
          question: "Como você gerencia a performance de uma aplicação web de grande escala?",
          limit: 180,
        },
        {
          id: "p-cinco",
          question: "Quais são os melhores padrões de arquitetura que você utilizaria para desenvolver uma aplicação escalável e de fácil manutenção?",
          limit: 180,
        },
        {
          id: "p-seis",
          question: "Conte sobre um momento em que você teve que aprender uma nova tecnologia ou ferramenta rapidamente. Como você lidou com isso?",
          limit: 180,
        },
        {
          id: "p-sete",
          question: "Como você lida com feedbacks negativos em relação ao seu código ou abordagem em um projeto?",
          limit: 180,
        },
        {
          id: "p-oito",
          question: "Descreva uma situação onde você precisou trabalhar com uma equipe remota. Como foi a comunicação e o gerenciamento do trabalho?",
          limit: 180,
        },
        {
          id: "p-nove",
          question: "Como você equilibra as prioridades entre escrever código de alta qualidade e atender aos prazos de entrega?",
          limit: 180,
        },
        {
          id: "p-dez",
          question: "Já teve que trabalhar em um projeto com prazos apertados? Como garantiu que a entrega fosse bem-sucedida?",
          limit: 180,
        },
        {
          id: "p-onze",
          question: "O que você faz para se manter atualizado sobre as novidades da tecnologia?",
          limit: 180,
        },
        {
          id: "p-doze",
          question: "Pode nos contar sobre um momento em que você teve que resolver um conflito dentro da equipe?",
          limit: 180,
        },
        {
          id: "p-treze",
          question: "Como você organiza seu tempo para equilibrar múltiplas tarefas e prazos?",
          limit: 180,
        },
        {
          id: "p-quatorze",
          question: "Qual foi a decisão mais difícil que você teve que tomar em um projeto? O que aprendeu com essa experiência?",
          limit: 180,
        },
        {
          id: "p-quinze",
          question: "Você tem alguma experiência implementando novas tecnologias em projetos? Como avaliaria se uma tecnologia é adequada para um projeto?",
          limit: 180,
        },
      ],
    },
  ];

  return interviews;
}
