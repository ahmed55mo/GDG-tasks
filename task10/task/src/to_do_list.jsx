import { useEffect , useReducer , useRef , useState } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "add":
            return[...state , {text: action.text, completed: false }];
        case "toggle":
            return state.map((task, i) => {
                if (i === action.index) {
                    return { ...task, completed: !task.completed };
                }
                return task;
            });
        case "delete":
            return state.filter((_, i) => i !== action.index);
        default:
            return state;
    }
}

export default function ToDoList() {
    const [tasks , dispatch] = useReducer(reducer, [] ,() => {
        return JSON.parse(localStorage.getItem("tasks")) || [];
    });

    const [input , setInput] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        dispatch({ type: "add", text: input });
        setInput("");
        inputRef.current.focus();
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" , height: "85vh" , justifyContent: "center" , backgroundColor: "white" }}>
            <div style={{backgroundColor:"white" , padding:"20px", borderRadius:"15px" , boxShadow:"0px 0px 15px 0px black" , width:"400px"}}>
                <h1 style={{ textAlign: "center" , color: "blue" }}>To Do List</h1>
                <div style={{ display: "flex", marginBottom: "10px" }}>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        style={{ flex: 1, padding: "10px", borderRadius: "5px", border: "1px solid #ccc" , marginRight: "10px" }}
                        placeholder="Add a task"
                    />
                    <button
                        onClick={addTask}
                        style={{ marginLeft: "10px", padding: "10px 15px", borderRadius: "5px", backgroundColor: "green", color: "white", border: "none" }}
                    >
                        Add Task
                    </button>
                </div>
                <ul
                style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    maxHeight: "200px",
                    overflowY: "auto"
                }}>
                    {tasks.map((task, index) => (
                        <li
                            key={index}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "10px",
                                backgroundColor: task.completed ? "lightgreen" : "darkgray",
                                borderRadius: "5px",
                                marginBottom: "10px",
                                color:"white",
                                fontSize:"20px"
                            }}
                        >
                            <span>{task.text}</span>
                            <div>
                                <button
                                    onClick={() => dispatch({ type: "toggle", index })}
                                    style={{ marginLeft: "5px", padding: "5px 10px", borderRadius: "5px", backgroundColor: "orange", color: "white", border: "none" , cursor: "pointer" }}
                                >
                                    {task.completed?"undo":"do"}
                                </button>
                                <button
                                    onClick={() => dispatch({ type: "delete", index })}
                                    style={{ marginLeft: "5px", padding: "5px 10px", borderRadius: "5px", backgroundColor: "red", color: "white", border: "none" , cursor: "pointer" }}
                                >
                                    delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}