import Button from "../Button/Button";

const Task = ({ taskName, description }) => {
  return (
    <div>
      <Title>{taskName}</Title>
      <Description>{description}</Description>
      <Button>Click...</Button>
    </div>
  );
};
