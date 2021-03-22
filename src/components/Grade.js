import { FaTimes } from 'react-icons/fa';

const Grade = ({ grades, grade, onDelete }) => {
  return (
    <div className='container border my-2'>
      <h5 className='text-center mb-0'>{grades.title}</h5>
      <p className='text-center'>{grades.grade}%</p>
      <div className='text-center '>
        <FaTimes
          onClick={() => onDelete(grades.id)}
          style={{ color: 'red', cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

export default Grade;
