function Button1(props) {
  let sizeClasses = "";
  let typeClasses = "";

  if (props.size === "small") {
    sizeClasses = "text-sm py-[10px] px-[21px]";
  } else if (props.size === "medium") {
    sizeClasses = "text-md py-[10px] px-6";
  } else if (props.size === "large") {
    sizeClasses = "text-lg py-4 px-7";
  }
  if (props.typeClass === "secondary") {
    typeClasses = "border border-secondary text-primary bg-0";
  } else if (props.typeClass === "plain") {
    typeClasses = "bg-0 text-primary";
  }

  const buttonClasses = `bg-primary text-10 font-Epilogue font-semibold ${props.className} ${sizeClasses} ${typeClasses}`;

  return (
    <button className={buttonClasses} type={props.type}>
      {props.text}
    </button>
  );
}

export default Button1;
