import "./dropdown.css";
// import { FormControl, Select, MenuItem } from "@mui/material";

function Drop() {
  return (
    <div>
      <label className="label0" for="Hub">
        Hub:
      </label>

      <select className="dropdown" name="Hub" id="Hub">
        <option value="Land Rover">Land Rover</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>

      <label className="label1" for="Country">
        Country:
      </label>

      <select className="dropdown1" name="Country" id="Country">
        <option value="United Kingdom">United Kingdom</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>

      <label className="label2" for="Population">
        Population:
      </label>

      <select className="dropdown2" name="Population" id="Population">
        <option value="Original">Original</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
}
export default Drop;
