/* customowe typy - mozna pisac type lub interfejs ale jesli typ to trzeba dac =*/
interface CourseGoalProps {
  title: string;
  description: string;
}

export default function CourseGoal({ title, description }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>delete</button>
    </article>
  );
}
