import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="display-flex">
        <div className="row">
          <div className="mb-3 col md-7">
            <input
              type="text"
              className="form-control"
              placeholder="Enter new category"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="col md-3">
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CategoryForm;
