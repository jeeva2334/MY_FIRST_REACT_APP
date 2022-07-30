import { useHistory } from "react-router-dom";
import { useState } from "react";

const Create = () => {

    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState("select one")
    const [isPending,setIsPending] = useState(false)
    const history = useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault()
        const blog = {title,body,author}
        setIsPending(true)
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log("blog added")
            alert("blog added")
            setIsPending(false)
            // history.go(-1)
            history.push('/')
        })
    }

    return ( <div className="create">
        <h2>Create a new blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input 
                type="text"
                required 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
            <label>Blog Body:</label>
            <textarea
                value={body}
                onChange={
                    (e)=>setBody(e.target.value)
                }
                required
            ></textarea>
            <label>Blog author:</label>
            <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
            >
                <option value="select one">Select one</option>
                <option value="mario">Mario</option>
                <option value="Jeeva">Jeeva</option>
            </select>
            {!isPending && <button>Add blog</button>}
            { isPending && <button disabled>Its Adding</button>}
        </form>
        {/* <p>{body}</p> */}
        </div>
     );
}
 
export default Create;