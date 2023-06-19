import Input from "../atoms/input";
import SearchIcon from "../../assets/vektor/search-icon.svg";
import LocationIcon from "../../assets/vektor/location-icon.svg";
// import ButtonPrimary from "../atoms/button";

function SearchBar() {
  return (
    <form action="" className=" gap-5 bg-white p-4 md:flex">
      <Input
        htmlFor=""
        Icon={SearchIcon}
        type="text"
        placeholder="Job title or keyword"
        className="md:grow"
      />
      <Input
        htmlFor=""
        Icon={LocationIcon}
        list="location"
        placeholder="Select Location"
        className="md:grow"
      />
      <datalist id="location">
        <option value="Lampung" />
        <option value="makasar" />
        <option value="Jambi" />
        <option value="Indonesia" />
      </datalist>
      {/* <ButtonPrimary
        text="Search my job"
        type="submmit"
        className="w-full md:w-auto"
      /> */}
    </form>
  );
}

export default SearchBar;
