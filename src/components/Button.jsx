import { BsTrashFill } from 'react-icons/bs'

export const Button = () => {
  const handleOnClic = () => {
    location.reload();
  };
  return (
    <button className="btn btn-warning mt-5 mt-sm-1 animate__animated animate__flip" onClick={handleOnClic}>
      Limpiar
      <BsTrashFill/>
    </button>
  );
};
