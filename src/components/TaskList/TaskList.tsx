const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div>
          {task.title} {task.description}
          <checkbox />
          <div>....</div>
          <div>....</div>
          <div>....</div>
          <div>....</div>
        </div>
      ))}
    </div>
  );
};
