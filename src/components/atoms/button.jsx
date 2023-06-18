function ButtonPrimary(props) {
  return (
    <>
      <button
        className={`bg-indigo-600 text-white font-Epilogue font-semibold py-3 px-6 ${props.className}`}
        type={props.type}
      >
        {props.text}
      </button>
    </>
  );
}

export default ButtonPrimary;
