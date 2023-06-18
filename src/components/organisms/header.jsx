import Coretan from "../../assets/vektor/Coretan.svg";
import SearchBar from "../molecules/search-box";
import HiroImg from "../../assets/img/hiro-img.png";

function Header(props) {
  return (
    <>
      <header className="pt-[76px] h-screen">
        <div className="">
          <div>
            <h1 className="font-RHD font-semibold text-6xl leading-none">
              {props.header} <br />
              <span className="text-sky-500">{props.headerSpan}</span>
            </h1>
            <img src={Coretan} alt="Coretan" className="mt-3" />
            <p className="text-lg font-normal text-slate-600 mt-8">
              {props.description}
            </p>
          </div>
          <div className="mt-6">
            <SearchBar />
          </div>
          <p>
            Popular : <br />
            UI Designer, UX Researcher, Android, Admin
          </p>
        </div>

        <div className="hidden">
          <img src={HiroImg} alt="" />
        </div>
      </header>
    </>
  );
}

export default Header;
