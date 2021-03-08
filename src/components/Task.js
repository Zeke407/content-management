import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className='bg-light mb-2' onDoubleClick={() => onToggle(task.id)}>
      <h3 className='text-center mb-0'>{task.text}</h3>
      <p className='text-center'>{task.description}</p>
      <div className='text-center '>
        <FaTimes
          onClick={() => onDelete(task.id)}
          style={{ color: 'red', cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

export default Task;
