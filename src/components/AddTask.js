import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  //Form submit handler
  const onSubmit = (e) => {
    e.preventDefault();

    //Check Text is set
    if (!text) {
      alert('Please add a Task');
      return;
    }
    //Check Day is set
    if (date === '') {
      alert('Please add a Date');
      return;
    }

    onAdd({ text, date, description });
    setText('');
    //setDate('');
    setDescription('');
  };

  return (
    <div className='container  mt-2 d-flex justify-content-center w-25 bg-light'>
      <form onSubmit={onSubmit}>
        <div className='form-row mb-2 '>
          <div className='col'>
            <label>New Event</label>
            <input
              className='form-control mb-2'
              type='text'
              placeholder='Add Event'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className='col'>
            <label>Description</label>
            <input
              className='form-control mb-2'
              type='text'
              placeholder='Add Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className='col'>
            <label>Day</label>
            <br />
            <select
              className='form-control mb-2'
              onChange={(e) => setDate(e.target.value)}
            >
              <option value='Monday'>Monday</option>
              <option value='Tuesday'>Tuesday</option>
              <option value='Wednesday'>Wednesday</option>
              <option value='Thursday'>Thursday</option>
              <option value='Friday'>Friday</option>
              <option value='Saturday'>Saturday</option>
              <option value='Sunday'>Sunday</option>
            </select>
          </div>
          <input className='btn btn-primary' type='submit' value='Save Event' />
        </div>
      </form>
    </div>
  );
};

export default AddTask;
