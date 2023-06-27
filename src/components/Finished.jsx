export default function Finished(props) {
  return (
    <div className="bg-gray-50 py-1 px-2 rounded-md border border-gray-200">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <input className="accent-emerald-100" checked onChange={()=>props.toggle(props.id)} type="checkbox" name={`checkbox${props.id}`} id={props.id} />
          <label htmlFor={props.id}>{props.todo}</label>
        </div>
        <button onClick={()=>props.delete(props.id)} className="hover:scale-[90%] transition-transform ease-in-out text-xs bg-gray-200 p-1 rounded-full hover:bg-gray-300">
          ❌
        </button>
      </div>

    </div>
  );
}
