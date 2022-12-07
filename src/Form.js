export default function Form() {
  return (
    <form>
      <div className="row searchform">
        <div className="col-9">
          <input
            type="text"
            placeholder="Enter a city"
            className="form-control searchbox"
            id="search-input"
            autocomplete="off"
          />
        </div>
        <div className="col-3 col-button">
          <input
            type="submit"
            className="btn btn-primary w-100 searchbutton"
            value="Search"
          />
        </div>
      </div>
    </form>
  );
}
