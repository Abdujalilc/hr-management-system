import RenderEmpDetail from "./RenderEmpDetail";
import "../styles/App.scss";

const RenderListEmployee = (props) => {
    return (
        <section className="database">
            <h3>Employee database</h3>
            <div>
                <button className="form__showBtn btn" onClick={props.getEmployees}>
                    Show employees list
                </button>
            </div>
            {props.employeeList.map((val, key) => {
                return (
                    <div className="allEmployee">
                        <ul className="allEmployee__list">
                            <li key={key} className="allEmployee__details">
                                <p>
                                    Id employee:
                                    <span className="allEmployee__details--value">{key + 1}</span>
                                </p>

                                <RenderEmpDetail val={val} />
                            </li>
                        </ul>

                        <div className="allEmployee__updatedList">
                            <label htmlFor="wage" className="allEmployee__updatedList--label"> Wage (EUR/year) </label>
                            <input
                                className="allEmployee__updatedList--input"
                                type="text"
                                name="wageUpdate"
                                id="wageUpdate"
                                placeholder="update salary"
                                onChange={props.handleValueUpdate}
                            />

                            <button
                                className="allEmployee__updatedList--updateBtn btn"
                                onClick={() => props.updateEmployee(val.id)}
                            >
                                Update
                            </button>

                            <button
                                className="allEmployee__updatedList--updateBtn btn"
                                onClick={() => props.deleteEmployee(val.id)}
                            >
                                Delete employee
                            </button>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default RenderListEmployee;
