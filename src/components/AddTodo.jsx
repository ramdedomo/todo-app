export default function AddTodo(props) {
    const error = props.hideEmpty ? {class: 'border px-2 py-1 rounded-md border-gray-400 placeholder:text-gray-200', placeholder: 'ToDo'} : {class: 'border px-2 py-1 rounded-md border-red-400 placeholder:text-red-200 accent-red-400', placeholder: 'Empty ToDo, please add text.'}
  return (
    <div>
    <p hidden={props.hideEmpty} className="bg-red-50 py-1 px-2 rounded-md border border-red-200 text-center mb-2 text-red-400"><span className="text-xs">❗</span>Empty Todo</p>
      <form onSubmit={props.handleClick}>
        <div className="space-y-2">
          <div>
            <textarea
              onChange={props.handleChanges}
              value={props.value}
              name="todo"
              cols="50"
              rows="2"
              className={`${error.class}`}
              placeholder={error.placeholder}
            ></textarea>
          </div>
          <button
            className="bg-zinc-800 w-full rounded-md px-2 py-1 text-white hover:bg-zinc-700"
          >
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
}
