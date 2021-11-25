export const Message = ({ message }) => {
  return (
    <div className="toDo">
      <div>{message.text}</div>
      <div>{message.author}</div>
      <div>{message.id.getMinutes()}</div>
      <hr />
    </div>
  );
};
