import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle, color }) => {
  return (
    <div className={`bg-${color} mb-2`} onDoubleClick={() => onToggle(task.id)}>
      <h3 className='text-center mb-0'>{task.text}</h3>
      <p className='text-center'>{task.description}</p>
      <h6 className='text-center'>{task.grade}</h6>
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
