import Button from './Button';
const ShowAddTask = ({ showAdd, onAdd }) => {
  return (
    <div className='text-center'>
      <Button
        color={showAdd ? 'red' : 'blue'}
        text={showAdd ? 'Close' : 'Add Task'}
        onClick={onAdd}
      />
    </div>
  );
};

export default ShowAddTask;
