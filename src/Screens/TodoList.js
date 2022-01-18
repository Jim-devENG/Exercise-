import React, { useEffect, useState } from 'react'
import { Button, NavItem } from 'react-bootstrap';
import { toast } from 'react-toastify';
import data from '../data'
import swal from 'sweetalert';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export const TodoList = () => {



    const [todos, setTodos] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : data);


    // const [todos, setTodos] = useState([]);

    // const MyName = localStorage.setItem("name");
    // const [myname, setMyname] = useState(localStorage.getItem("MyName"));

    // const [watch, setWatch] = useState(false);

    const saveTodo = () => {
        let updatedTodos = [];
        todos.map((todos, index) => {
            let copy = { ...todos, id: index + 1 }
            updatedTodos.push(copy);
        })

        saveTodo(updatedTodos)
        localStorage.setItem("todos", JSON.stringify(data));

    }

    useEffect(() => {
        // saveTodo();
    }, []);

    const [todo, setTodo] = useState({
        id: "",
        title: "",
        description: "",
        completion: false,
        tag: ""
    })

    const [watch, setWatch] = useState(false)

    const showForm = () => {
        setWatch(true)
    }

    const hideForm = () => {
        setWatch(false)
    }

    const handleEdit = () => {

    }



    // let updatedTodos = numbers.filter((number) => {

    //         return number > 5

    //     // if (i != index) {
    //     //     return todo
    //     // }
    // })


    const handleDelete = (index) => {
        let copy = [...todos];
        let updatedTodos = copy.filter((todo, i) => {
            if (i != index) {
                return todo
            }
            // if (i != index) {
            //     return todo
            // }
        })
        setTodos(updatedTodos)
        localStorage.setItem('todo', JSON.stringify(updatedTodos))
    }


    const handleChange = (e) => {
        // console.log("Ffsd", e.target.value)
        setTodo({ ...todo, [e.target.name]: e.target.value, id: todo.length + 1 })
        // setTodo({ ...todo, id: todo.length + 1 })
    }

    const handleSubmit = () => {
        let updatedTodo = [...todos, todo];
        setTodos(updatedTodo);
        localStorage.setItem("todos", JSON.stringify(updatedTodo));
        // console.log("new todo", todo)
        swal("Todo successfully saved")

    }


    return (
        <div>

            {
                todos.length > 0 ? (
                    <div><table className="table table-bordered align-mid">
                        <thead>
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            {
                                todos.map((todo, index) => {
                                    return (

                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{todo.title}</td>
                                            <td>{todo.description}</td>
                                            <td><span className="btn btn-primary" onClick={handleEdit}>Edit</span>
                                                <span className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</span>
                                            </td>
                                        </tr>
                                        // <li>{todo.title}</li>
                                        // {/* <li>{todo.description}</li> */}
                                    )
                                })
                            }
                        </tbody>

                    </table>
                        <button className="btn btn-secondary" onClick={showForm}>Add Todo</button>
                        {/* <Button onClick={() => setWatch(!watch)}>Add Todo</Button> */}
                    </div>

                ) : (
                    <>
                        {/* <p>There's no data</p> */}
                        {/* <Button onClick={() => setWatch(!watch)}>Add Todo</Button> */}
                        <button className="btn btn-secondary" onClick={showForm}>Add Todo</button>
                    </>
                )

            }

            {
                watch ?
                    <div className='container todo-form'>
                        <div className="form-group">
                            <input type="text" name="title" placeholder='Name' className='form-control' onChange={handleChange} />
                        </div><br />
                        <div className="form-group">
                            <input type="text" name="description" placeholder='Description' className='form-control' onChange={handleChange} />
                        </div><br />
                        <div className="">
                            {/* <button className='btn btn-block btn-dark' onClick={handleSubmit}>Save Todo</button> */}
                            {/* <button className='btn btn-block btn-dark' onClick={() => setWatch(!watch)}>Cancel</button> */}
                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Save Todo</button>

                            <button type="submit" className="btn btn-primary" onClick={hideForm}>Cancel</button>
                        </div>
                    </div>
                    :
                    ("")
            }

        </div>

    )
}

export default TodoList
