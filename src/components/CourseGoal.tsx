import { type ReactNode } from "react";

/* customowe typy - mozna pisac type lub interfejs ale jesli typ to trzeba dac =*/
interface CourseGoalProps {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
}

/* inny sposob deklaracji komponentow, nowoczesna skladnia z funkcja strzalkowa i jesli bym to chciala to musze dodac tylko type FC do importu*/
// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{children}</p>
//       </div>
//       <button>delete</button>
//     </article>
//   );
// };

// export default CourseGoal;

/* klasyczne definiowanie komponentow w kluzuli function*/
export default function CourseGoal({
  title,
  children,
  id,
  onDelete,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(id)}>delete</button>
    </article>
  );
}
