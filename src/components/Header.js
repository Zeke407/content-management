import Button from './Button';

const Headers = ({ days, setDays, onAdd, showAdd, deleteTask }) => {
  return (
    <header>
      <h1 className='text-center m-3'>Content Management</h1>
      <div className='text-center'>
        {' '}
        <Button
          color={showAdd ? 'red' : 'blue'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      </div>
    </header>
  );
};

export default Headers;
