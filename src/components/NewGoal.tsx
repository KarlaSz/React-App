import { useRef, type FormEvent } from "react";

export default function NewGoal() {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);
  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your task</label>
        <input id="goal" type="text" ref={goal} />
      </p>

      <p>
        <label htmlFor="summary">
          Short <summary></summary>
        </label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <button>Add Task</button>
    </form>
  );
}