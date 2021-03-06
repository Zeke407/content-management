import { useState } from 'react';

const Grades = ({ onAddG, showAdd }) => {
  const [title, setTitle] = useState('');
  const [grade, setGrade] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert('Please add a Class');
      return;
    }
    //Check Day is set
    if (!grade) {
      alert('Please add a Grade');
      return;
    }
    //add the title and grade to the object in db.json
    onAddG({ title, grade });
    //set the title and grade back to '' nothing
    setTitle('');
    setGrade('');
  };
  return (
    <div>
      {showAdd && (
        <div className='container'>
          <div className='row'>
            <div className='col col-sm'>
              <form onSubmit={onSubmit}>
                <div className='form-row mb-2'>
                  <label>New Class</label>
                  <input
                    className='form-control mb-2'
                    type='text'
                    placeholder='Add Class'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />

                  <label>Grade</label>
                  <input
                    className='form-control mb-2'
                    type='number'
                    placeholder='Add Grade'
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                  />
                </div>
                <input
                  className='btn btn-primary'
                  type='submit'
                  value='Save Class'
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Grades;
