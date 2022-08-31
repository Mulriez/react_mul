import Button from "./Button";
export default function Card({ title, body, avd, createdAt, id, handleDelete, ...props }) {
  return (
    <div className="border p-5 h-72 w-full shadow-lg rounded-lg space-y-2">
      <div className="h-1/5">
        <h5 className="text-xl uppercase">{title}</h5>
        <p className="text-xs italic">{createdAt}</p>
      </div>
      <div className="text-justify h-3/5">{body}</div>
      <div className="text-justify h-3/5">{avd}</div>

      <div className="grid grid-cols-2 gap-5">
        <Button {...props} onClick={handleDelete} value={id} type="button" title={"delete"} bg="red" />
        <Button value={id} title="arsipkan" bg="blue" />
      </div>
    </div>
  );
}
