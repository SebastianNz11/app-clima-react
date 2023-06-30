export const InputValue = ({ handleOnChange, handleOnSubmit, city }) => {
  return (
    <form onSubmit={handleOnSubmit}>
      <input
        className="form-control mb-sm-5 mb-5 animate__animated animate__zoomInUp"
        type="text"
        placeholder="Buscar Ciudad"
        required
        autoFocus
        onChange={(e) => handleOnChange(e)}
        value={city}
      />
    </form>
  );
};
