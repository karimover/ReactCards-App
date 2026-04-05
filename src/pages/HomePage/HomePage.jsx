import { QuestionCard } from "../../components/QuestionCard/QuestionCard";
// import cls from "./HomePage.module.css";

const cards = [
    {
        id: "6",
        question: "Что такое состояние (state) в React?",
        answer: "State — это внутренние данные компонента, которые могут изменяться.",
        description:
            "Состояние управляется внутри компонента и изменяется через `setState` в классовых компонентах или `useState` в функциональных. Изменение состояния инициирует повторный рендер компонента.",
        resources: ["https://react.dev/learn/state-a-components-memory"],
        level: 2,
        completed: true,
    },
    {
        id: "7",
        question: "Как работает useState в React?",
        answer: "useState — это хук для управления состоянием в функциональных компонентах.",
        description:
            "`useState` возвращает массив из двух элементов: текущего значения состояния и функции для его обновления. Используется для хранения и изменения данных в компонентах.",
        resources: ["https://react.dev/reference/react/useState"],
        level: 2,
        completed: true,
    },
    {
        id: "8",
        question: "Что такое useEffect?",
        answer: "useEffect — это хук для управления побочными эффектами.",
        description:
            "Хук `useEffect` позволяет выполнять побочные эффекты, такие как запросы к API, подписки и манипуляции с DOM. Он вызывается после рендеринга и может зависеть от определенных значений.",
        resources: ["https://react.dev/reference/react/useEffect"],
        level: 2,
        completed: true,
    },
];

export const HomePage = () => {
    return (
        <>
            {cards.map((card, index) => {
                return <QuestionCard card={card} key={index} />;
            })}
        </>
    );
};
