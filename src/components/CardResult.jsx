export const CardResult = ({ datos }) => {
  const urlIcon = `https://openweathermap.org/img/w/${datos.icon}.png`;

  return (
    <div className="card border-black border-5 bg-Card text-light p-1 animate__animated animate__flipInX rounded-5">
      <img
        src={urlIcon}
        className="card-img-top p-5"
        alt={datos.description}
      ></img>
      <div className="card-body">
        <h4 className="card-title text-center mb-3">{datos.nameCity}</h4>
        <h6 className="card-text">{`Descripciòn:  ${datos.description}`}</h6>
        <h6 className="card-text">{`Temperatura: ${Math.round(
          datos.temperatura
        )} °C`}</h6>
        <h6 className="card-text">{`Humedad: ${datos.humidity}%`}</h6>
        <h6 className="card-text">{`Pais: ${datos.country}`}</h6>
      </div>
    </div>
  );
};
