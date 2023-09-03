import "./Header.css";
import Drop from "../Dropdown/dropdown";
import Field from "../SelectedFields/field";
import Cards from "../Cards/cards";
function Header() {
  return (
    <>
      <h2 className="heading">Summary Statistics</h2>
      <div className="borderline">
        <div className="outline">
          <div className="space">
            <label id="get">Get</label>
            <input className="global" type="radio" id="global" value="Global" />
            <label for="global">Global</label>
            <input className="local" type="radio" id="local" value="Local" />
            <label for="local">Local</label>
            <label className="global" for="search">
              FSA Number:
            </label>
            <input type="text" class="search-input" placeholder="Search..." />
            <button className="search-button">Search</button>
          </div>
          <div>
            <Drop />
          </div>
        </div>
        <Field />

        <Cards />
      </div>
    </>
  );
}

export default Header;
