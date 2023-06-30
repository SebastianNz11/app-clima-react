import { CardResult } from "./components/CardResult";
import { getData } from "./helpers/getData";
import { InputValue } from "./components/InputValue";
import { Button } from "./components/Button";
import { useState } from "react";

export const App = () => {
  const [City, setCity] = useState("");
  const [dato, setDato] = useState("");
  const [showDiv, setShowDiv] = useState(false);

  const info = async () => {
    const datos = await getData(City);
    setDato(datos);
  };

  const handleOnChange = (e) => {
    setCity(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    info();
    setShowDiv(true);
    setCity("");
  };

  return (
    <div className="container-fluid bg-body">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-8 col-sm-3">
          <h2 className="display-4 mb-sm-5 mb-5 text-center animate__animated animate__zoomInDown text-light mt-5">
            AppClima
          </h2>
          <InputValue
            handleOnChange={(e) => handleOnChange(e)}
            handleOnSubmit={handleOnSubmit}
            city={City}
          />
          {showDiv === true ? <CardResult datos={dato} /> : null}
        </div>
      </div>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-12 mt-sm-3">{showDiv === true ? <Button /> : null}</div>
        </div>
      </div>
    </div>
  );
};
