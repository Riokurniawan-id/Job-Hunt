import Colors from "../../atoms/colors";
import Button1 from "../../atoms/button/button1";

function DesignSystem() {
  return (
    <>
      <Colors />
      <div className="button1 mt-2">
        <h1 className="my-auto">Button1</h1>
        <Button1
          className=""
          typeClass="primary"
          type=""
          text="Caption"
          size="small"
        />
        <Button1
          className=""
          typeClass="secondary"
          type=""
          text="Caption"
          size="medium"
        />
        <Button1
          className=""
          typeClass="plain"
          type=""
          text="Caption"
          size="large"
        />
      </div>
    </>
  );
}

export default DesignSystem;
