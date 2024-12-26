
import "../styles/App.scss";
import { useEffect, useState } from "react";
import Form from "./Form";
import Header from "./Header";
import RenderListEmployee from "./RenderListEmployee";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {
  useEffect(() => {
    document.cookie = `_vercel_jwt=${process.env.REACT_APP_VERCEL_JWT}; path=/; SameSite=None; Secure`;
  }, []);


  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);
  const [newWage, setNewWage] = useState(0);
  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = (ev) => {
    ev.preventDefault();
    const bodyParams = { name, age, country, position, wage };
    fetch(`${BASE_URL}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyParams),
      credentials: "include",
    })
      .then((response) => response.json())
      .then(() => {
        setEmployeeList((prevList) => [
          ...prevList,
          { name, age, country, position, wage },
        ]);
      })
      .catch((err) => console.error("Error adding employee:", err));
  };

  const getEmployees = (ev) => {
    ev.preventDefault();
    fetch(`${BASE_URL}/employees`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Ensures cookies are sent with the request
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("Error fetching employees:", err));
  };

  const updateEmployee = (id) => {
    const bodyParams = { wage: newWage, id };
    fetch(`${BASE_URL}/update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyParams),
      credentials: "include",
    })
      .then((response) => response.json())
      .then(() => {
        setEmployeeList((prevList) =>
          prevList.map((val) =>
            val.id === id
              ? { ...val, wage: newWage }
              : val
          )
        );
      })
      .catch((err) => console.error("Error updating employee:", err));
  };

  const deleteEmployee = (id) => {

    fetch(`${BASE_URL}/employee/delete/${id}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then(() => {
        setEmployeeList((prevList) =>
          prevList.filter((val) => val.id !== id)
        );
      })
      .catch((err) => console.error("Error deleting employee:", err));
  };

  const handleValueInput = (value, id) => {
    const handlers = {
      name: setName,
      age: setAge,
      country: setCountry,
      position: setPosition,
      wage: setWage,
    };
    if (id in handlers) handlers[id](value);
  };

  const handleValueUpdate = (ev) => setNewWage(ev.currentTarget.value);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Footer />
            </>
          }
        />
        <Route
          path="/employee-database"
          element={
            <main>
              <Form
                handleValueInput={handleValueInput}
                addEmployee={addEmployee}
              />
              <RenderListEmployee
                employeeList={employeeList}
                getEmployees={getEmployees}
                handleValueUpdate={handleValueUpdate}
                updateEmployee={updateEmployee}
                deleteEmployee={deleteEmployee}
              />
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
