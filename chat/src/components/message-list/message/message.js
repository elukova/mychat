export const Message = ({ message }) => {
  return (
    <div className="toDo">
      <div>{message.text}</div>
      <div>{message.author}</div>
      <div>12:03</div>
      <hr />
    </div>
  );
};
