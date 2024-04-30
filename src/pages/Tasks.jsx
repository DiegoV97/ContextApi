import { useEffect, useState } from 'react';
import { useUserContext } from '../app/providers/UserProvider';
import { createTask, deleteTask, getItems } from '../app/api';

const UserInfo = () => {
    const [user] = useUserContext()
    const [task, setTask] = useState()
    const [tasks, setTasks] = useState([])
    const consultar = () => {
        getItems(user).then(res => setTasks(res))
    }
    const borrar = () => {
        deleteTask()
    }

    useEffect(() => {
        consultar()
    }, [])
    return (
        <div>

            <h1>Tasks</h1><br />
            {tasks.map(t => <div key={t.id}> <p>{t.task}</p> <br />
                <button onClick={() => borrar()}>borrar</button>
                <button>actualizar</button> </div>)}

            <textarea name="" id="" cols="30" rows="10" onChange={e => setTask(e.target.value)}></textarea><br />
            <button onClick={() => { createTask({ task }, user), consultar() }}>Añadir Tarea</button>
        </div>
    );
}

export default UserInfo;