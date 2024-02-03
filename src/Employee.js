import React from "react";

function Employee() {
  return (
    <form>
        <h2>Employee details</h2>
      <label>
        Name:
        <input type="text" name="Name" />
      </label><br></br>
      <label>
        Role:
        <input type="Role" name="Role" />
      </label><br></br>
      <label>
      Salary:
      <input type="Salary" />
      </label><br></br>
      <input type="submit" />
    </form>
  );
}
export default Employee