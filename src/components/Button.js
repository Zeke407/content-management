const Button = ({ onClick, text, color, task }) => {
  return (
    <button onClick={onClick} className='btn btn-primary'>
      {text}
    </button>
  );
};

export default Button;
