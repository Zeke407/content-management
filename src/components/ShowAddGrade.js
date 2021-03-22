import Button from './Button';
const ShowAddGrade = ({ showAdd, onAdd }) => {
  return (
    <div>
      <Button
        color={showAdd ? 'red' : 'blue'}
        text={showAdd ? 'Close Grade' : 'Add Grade'}
        onClick={onAdd}
      />
    </div>
  );
};

export default ShowAddGrade;
