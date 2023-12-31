import "./field.css";
function field() {
  return (
    <>
      <div className="aligncenter">
        <label className="labelarea" for="Global">
          Global FSA:
        </label>

        <textarea
          className="noline"
          id="Global"
          name="Global"
          rows="4"
          cols="50"
        >
          14752 - SPIL RAIL TYPE - Safety Recall
        </textarea>
      </div>
      <div className="aligncenter">
        <label className="labelarea1" for="Local">
          Local FSA(s):
        </label>

        <textarea className="noline" id="Local" name="Local" rows="4" cols="50">
          Po33- spill Rail
        </textarea>
      </div>
      <div>
        <label>Hub:</label>
        <input className="noline" type="text" value={"LAND ROVER"} />

        <label>Country:</label>
        <input className="noline" type="text" value={"United Kingdom"} />

        <label>Population:</label>
        <input className="noline" type="text" value={"Original"} />
      </div>
    </>
  );
}

export default field;
