import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
function App() {
  const [dataArray, setDataArray] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mail, setMail] = useState("");
  const [buttonSwitch, setButtonSwitch] = useState(false);
  const [arrayIndex, setArrayIndex] = useState(0);

  function deleteRow(item) {
    let index = dataArray.indexOf(item);
    dataArray.splice(index, 1);
    setDataArray([...dataArray]);
  }
  function updateRow(item) {
    setFname(item.fname);
    setLname(item.lname);
    setMail(item.mail);
    let index = dataArray.indexOf(item);
    setButtonSwitch(true);
    setArrayIndex(index);
  }
  const onSubmit = (e) => {
    if (buttonSwitch) {
      dataArray[arrayIndex].fname = fname;
      dataArray[arrayIndex].lname = lname;
      dataArray[arrayIndex].mail = mail;
      setButtonSwitch(false);
      setFname("");
      setLname("");
      setMail("");
    } else {
      console.log("submit");
      setDataArray([...dataArray, { fname: fname, lname: lname, mail: mail }]);
      setFname("");
      setLname("");
      setMail("");

      console.log(dataArray);
    }
  };

  return (
    <div>
      <div className="container mt-4 ">
        <div className="row text-center">
          <h4>CRUD SYSTEM</h4>
        </div>
        <div className="row mt-4">
          <div className="col">
            <label htmlFor="exampleInputEmail1" className="form-label">
              First Name
            </label>
            <input
              value={fname}
              type="text"
              className="form-control"
              id="name"
              aria-describedby="name"
              onChange={(e) => {
                setFname(e.target.value);
                console.log(fname);
              }}
            />
          </div>
          <div className="col">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Last Name
            </label>
            <input
              value={lname}
              type="text"
              className="form-control"
              id="name"
              aria-describedby="name"
              onChange={(e) => {
                setLname(e.target.value);
                console.log(lname);
              }}
            />
          </div>
          <div className="col">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              value={mail}
              type="email"
              className="form-control"
              id="mail"
              aria-describedby="mail"
              onChange={(e) => {
                setMail(e.target.value);
                console.log(mail);
              }}
            />
          </div>
          <div className="col mt-4">
            <button
              value={buttonSwitch}
              type="button"
              className="btn btn-primary"
              onClick={(e) => onSubmit(e)}
            >
              {buttonSwitch ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Lame</th>
                <th scope="col">Mail</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataArray.map((item, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item.fname}</td> <td>{item.lname}</td>{" "}
                    <td>{item.mail}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-primary  "
                        onClick={() => updateRow(item)}
                      >
                        Update
                      </button>
                      <span></span>
                      <button
                        className="btn btn-sm  btn-danger"
                        onClick={() => deleteRow(item)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
