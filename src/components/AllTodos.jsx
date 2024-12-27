import { AiOutlineDelete } from "react-icons/ai"
import { useDispatch,useSelector } from "react-redux"
import { Delete,Mark,Edit } from "../features/addSlice"
import { CiCircleCheck, CiEdit } from "react-icons/ci"
import { FaCircleCheck } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import '../assets/Glass.css'
import { useEffect, useState } from "react"
function AllTodos() {
    const [currentDate, setCurrentDate] = useState('')
    let selector = useSelector(state=>state.AddTodo.tasks)
    let dispatch = useDispatch()
    let navigate = useNavigate()

    const handleDelete = (i)=>{
      toast.error('To Do is Delete')
      dispatch(Delete(i)) 
    }
    const handleMark = (i)=>{
      toast.success('To Do is Done')
      dispatch(Mark(i))
    }
    const handleEdit = (i)=>{
      dispatch(Edit(i))
      navigate('/')
      toast.success('Now you can Edit your To Do')
    }
    useEffect(()=>{
      let day = new Date()
      setCurrentDate(day.toLocaleDateString())
    },[])
  return (
    <div>
      <div className="flex flex-col gap-y-3 mt-10 md:px-28 px-3">
        <p className="text-white text-2xl font-semibold text-end drop-shadow-xl">{currentDate}</p>
        {selector.length >0 ? selector.map((e,i)=>{
            return(
                <div key={i} className={`flex justify-between px-6 rounded-md py-2 ${e.isMraked ? 'bg-gray-500 text-white line-through':'glass'}`}>
                    {e.todo.length > 20 ? <p>{e.todo.slice(0,10) + '....'}</p>:<p>{e.todo}</p>}
                    <div className="flex gap-x-3 items-center">
                    <p >{e.reminder}</p>
                    <button className="relative group cursor-pointer">{e.isMraked ?                       
                      <FaCircleCheck className="text-green-500" fontSize={20}/> 
                      :
                      <div>
                        <CiCircleCheck onClick={()=>{handleMark(i)}} fontSize={22} />
                        <div className="absolute  bottom-7 bg-green-500  hidden group-hover:block px-2 py-1 text-white rounded-md text-sm">
                        Mark to Compleate
                      </div>
                      </div>
                      }
                    </button>

                    {!e.isMraked ?
                    <div className="relative group">
                      <div className="absolute  bottom-7 bg-green-500  hidden group-hover:block px-2 py-1 text-white rounded-md text-sm">
                        Edit
                      </div>
                      <CiEdit fontSize={22} onClick={()=>{handleEdit(i)}}/>
                    </div>
                    :''
                    }
                    <button className="relative group cursor-pointer" onClick={()=>{handleDelete(i)}}>
                      <div className="absolute  bottom-7 bg-green-500  hidden group-hover:block px-2 py-1 text-white rounded-md text-sm">
                        Delete To-Do
                      </div>
                      <AiOutlineDelete fontSize={22} />
                    </button>
                  </div>
                </div>
            )
        }):<p className="text-center text-blue-500 text-3xl">Add Todo</p>}
      </div>
    </div>
  )
}

export default AllTodos
