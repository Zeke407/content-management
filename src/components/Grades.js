import Grade from './Grade';

const Grades = ({ grades, onDelete }) => {
  return (
    <div className='container'>
      {grades.map((grade, index) => (
        <Grade grades={grade} key={index} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Grades;
