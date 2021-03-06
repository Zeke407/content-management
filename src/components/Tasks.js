import Task from './Task';

const Tasks = ({ days, tasks, onDelete, onToggle }) => {
  return (
    <div className='schedule'>
      <div className='row no-gutters '>
        {/* loop through days and post them*/}
        {days.map((day) => (
          <div key={day.id} className='col m-1 Task'>
            <h4 className='text-center'>{day.text}</h4>
            {/* for each day loop through tasks and post them if them have the same day as the day*/}
            {tasks.map((task, index) => (
              <>
                {task.date === day.text && (
                  <Task
                    key={index}
                    task={task}
                    //check if the task is linked to a class/grade
                    color={task.grade !== '' ? 'hasGrade' : 'normal'}
                    onDelete={onDelete}
                    onToggle={onToggle}
                  />
                )}
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
