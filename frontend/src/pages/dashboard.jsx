import {useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Dashboard() {
    const navigate = useNavigate();
    const [task,setTask] = useState("");
    const [tasks,setTasks] = useState([]);
    const userid = localStorage.getItem('userid');
    const fetchTasks=async()=>{
        const res = await axios.get(`http://localhost:8080/api/tasks/${userid}`);
        setTasks(res.data);
    };
    useEffect(()=>{
        if(!userid){
            navigate("/signin");
        }else{
            fetchTasks();
        }
    },[]);
    const addtask = async()=>{
        if(!task.trim()){
            alert("Enter task");
            return
        }
        await axios.post("http://localhost:8080/api/tasks/create",{
            title:task,
            userid
        });
        setTask("");
        fetchTasks();
    };
    const deletetask = async(id)=>{
        await axios.delete(`http://localhost:8080/api/tasks/delete/${id}`);
        fetchTasks();
    };
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <div className="d-flex justify-content-center mt-5 flex-grow-1">
                <div className="card p-4 shadow" style={{ width: "500px" }}>
  <h2 className="mb-3">Dashboard</h2>

  <div className="d-flex gap-2 mb-3">
            <input 
                value={task} 
                onChange={(e)=>setTask(e.target.value)} 
                className="form-control"
                placeholder='Enter a Task...'
                style={{ width: "100%", height: "50px", fontSize: "18px" }}
            />
            <button className="btn btn-success" onClick={addtask} style={{ height: "50px", width: "150px", fontSize: "16px" }}>Add Task</button>
            </div>
            <ul  className="list-group">
                {tasks.map((t)=>(
                    <li className="list-group-item d-flex justify-content-between"  key={t._id}>
                        {t.title}
                        <button className="btn btn-danger btn-sm" onClick={()=>deletetask(t._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
        </div>
        <footer 
  className="w-100 text-center py-3"
  style={{ backgroundColor: "#343a40", color: "white" }}
>
  © 2026 Task Manager <br/>
  <small>Developed by Thulaseswara Reddy</small>
</footer>
</div>
    );
}
export default Dashboard
            
         