import Button from './Button';
const ShowAddGrade = ({ showAdd, onAdd }) => {
  return (
    <div className='text-center'>
      <Button
        color={showAdd ? 'red' : 'blue'}
        text={showAdd ? 'Close' : 'Add Grade'}
        onClick={onAdd}
      />
    </div>
  );
};

export default ShowAddGrade;
