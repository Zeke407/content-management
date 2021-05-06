import Grade from './Grade';

const Grades = ({ grades, onDelete }) => {
  return (
    <div className='container'>
      {grades.length === 0 && (
        <h5 className='text-center m-0'>Click Add To Add A Class</h5>
      )}
      {grades.map((grade, index) => (
        <Grade grades={grade} key={index} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Grades;
