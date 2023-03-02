import React from 'react';
import './task.css';

const task = () => {
    return (
        <div className='task_cont'>
            <h1 className='task_head'>
                Tasks:-
            </h1>
            <div className='task_container'>
            <table className='tab'>
              <tr>
                 <th>Task Name:</th>
                   <th>Total Working Hours</th>
                   <th>Total Work Done</th>
                  </tr>
            </table>
            <h1 className='head_h2'>
                    Project Program:-
                </h1>
               
                 <progress className="progress" id="file"  max="100"> 50% </progress>
                 <div className='bottom_cont'>
                    <h1 className='head_task'>Report Work Done</h1>
                    <input type="text"/>
                    <button className='btn'>
                        Submit
                    </button>
                 </div>
            </div>

            <div className='task_container'>
            <table className='tab'>
              <tr>
                 <th>Task Name:</th>
                   <th>Total Working Hours</th>
                   <th>Total Work Done</th>
                  </tr>
            </table>
            <h1 className='head_h2'>
                    Project Program:-
                </h1>
               
                 <progress className="progress" id="file"  max="100"> 50% </progress>
                 <div className='bottom_cont'>
                    <h1 className='head_task'>Report Work Done</h1>
                    <input type="text"/>
                    <button className='btn'>
                        Submit
                    </button>
                 </div>
            </div>

            <div className='task_container'>
            <table className='tab'>
              <tr>
                 <th>Task Name:</th>
                   <th>Total Working Hours</th>
                   <th>Total Work Done</th>
                  </tr>
            </table>
            <h1 className='head_h2'>
                    Project Program:-
                </h1>
               
                 <progress className="progress" id="file"  max="100"> 50% </progress>
                 <div className='bottom_cont'>
                    <h1 className='head_task'>Report Work Done</h1>
                    <input type="text"/>
                    <button className='btn'>
                        Submit
                    </button>
                 </div>
            </div>
        </div>
    );
};

export default task;