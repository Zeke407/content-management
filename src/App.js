import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import GradeQ from './components/GradeQ';
import Grades from './components/Grades';
import ShowAddGrade from './components/ShowAddGrade';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [showAddGrade, setShowAddGrade] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  useEffect(() => {
    const getGrades = async () => {
      const gradesFromServer = await fetchGrades();
      setGrades(gradesFromServer);
    };

    getGrades();
  }, []);

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  };
  const fetchGrades = async () => {
    const res = await fetch('http://localhost:5000/grades');
    const data = await res.json();

    return data;
  };

  const [grades, setGrades] = useState([]);
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

  const addGrades = async (grade) => {
    const res = await fetch('http://localhost:5000/grades', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(grade),
    });

    const data = await res.json();

    setGrades([...grades, data]);
  };
  const deleteGrade = async (id) => {
    await fetch(`http://localhost:5000/grades/${id}`, {
      method: 'DELETE',
    });

    setGrades(grades.filter((grade) => grade.id !== id));
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
    <div className='container-fluid '>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      <p className=''>
        <div className='text-center'>
          <a
            class='btn btn-primary mx-1 mt-2 '
            data-bs-toggle='collapse'
            href='#multiCollapseExample1'
            role='button'
            aria-expanded='false'
            aria-controls='multiCollapseExample1'
          >
            Schedule
          </a>
          <button
            class='btn btn-primary mx-1 mt-2'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#multiCollapseExample2'
            aria-expanded='false'
            aria-controls='multiCollapseExample2'
          >
            Classes
          </button>
          <button
            class='btn btn-primary mx-1 mt-2'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='.multi-collapse'
            aria-expanded='false'
            aria-controls='multiCollapseExample1 multiCollapseExample2'
          >
            Both
          </button>
        </div>
      </p>
      <div class='row'>
        <div class='col-9'>
          <div class='collapse multi-collapse' id='multiCollapseExample1'>
            <div class='card card-body'>
              {showAddTask && (
                <AddTask tasks={tasks} grades={grades} onAdd={addTask} />
              )}
              <Tasks
                tasks={tasks}
                days={days}
                onDelete={deleteTask}
                onToggle={toggleD}
              />
            </div>
          </div>
        </div>
        <div class='col-3'>
          <div class='collapse multi-collapse' id='multiCollapseExample2'>
            <div class='card card-body'>
              <GradeQ
                grades={grades}
                onAdd={() => setShowAddTask(!showAddTask)}
                showAdd={showAddTask}
                onAddG={addGrades}
              />
              <Grades grades={grades} onDelete={deleteGrade} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
