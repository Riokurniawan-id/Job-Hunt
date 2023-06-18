function Input(props) {
  return (
    <>
      <div className="flex">
        <label htmlFor={props.htmlFor} className="py-3 pl-4">
          <img src={props.Icon} alt="" />
        </label>
        <input
          type={props.type}
          placeholder={props.placeholder}
          list={props.list}
          className={`border-b-2 border-slate-200 w-full py-3 pl-4 ${props.className}`}
        />
      </div>
    </>
  );
}

export default Input;
