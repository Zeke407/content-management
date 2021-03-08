import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  };

  const [days, setDays] = useState([
    {
      id: 123,
      text: 'Monday',
      date: 1,
    },
    {
      id: 342,
      text: 'Tuesday',
      date: 2,
    },
    {
      id: 543,
      text: 'Wednesday',
      date: 3,
    },
    {
      id: 546,
      text: 'Thursday',
      date: 4,
    },
    {
      id: 657,
      text: 'Friday',
      date: 5,
    },
    {
      id: 768,
      text: 'Saturday',
      date: 6,
    },
    {
      id: 879,
      text: 'Sunday',
      date: 7,
    },
  ]);
  const [tasks, setTasks] = useState([]);

  //add task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  //delete
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const deleteTaskAll = async (index) => {
    for (let i = 0; i <= tasks.length; ++i) {
      await fetch(`http://localhost:5000/tasks/${index}`, {
        method: 'DELETE',
      });
    }

    //setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleD = (id) => {
    console.log(id);
  };

  return (
    <div className='container'>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks
        tasks={tasks}
        days={days}
        onDelete={deleteTask}
        onToggle={toggleD}
      />
    </div>
  );
}

export default App;
