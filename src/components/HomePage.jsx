import {useForm} from 'react-hook-form'
import { useSelector,useDispatch } from 'react-redux'
import { Add,Update } from '../features/addSlice'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import '../assets/Glass.css'
function HomePage() {
    const {register,reset,handleSubmit,setValue,formState:{errors}} = useForm()
    let dispatch = useDispatch()
    let Editable = useSelector(state=>state.AddTodo.isEditAble)
    let EditableData = useSelector(state=>state.AddTodo.editData)
    let navigate = useNavigate()
    if (Editable) {
        setValue('todo',EditableData.todo)
        setValue('reminder',EditableData.reminder)
    }
    const submitTodo = (data)=>{
            if (!Editable) {
                dispatch(Add(data))
                toast.success('To Do added successfully')
              }else{
                dispatch(Update(data))
                toast.success('To Do update successfully')
                reset()
            }
            navigate('/all-todos')
    }

  return (
        <div className="mt-10 w-full max-w-xs mx-auto">
          <form className="glass shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(submitTodo)}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Todo">
                To Do
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Todo" type="text" placeholder="Username"
              {...register('todo',{required:{value:true,message:'Title is required'},minLength:{value:3,message:'Please enter atlist 5 characters'}})}
              />
              {errors.todo && <p className='text-red-600 text-sm ps-1'>{errors.todo.message}</p>}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                Reminder
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date"
              {...register('reminder',{required:{value:true,message:'date is required'}})}
               />
                {errors.reminder && <p className='text-red-600 text-sm ps-1'>{errors.reminder.message}</p>}
            </div>
            <div className="flex items-center justify-center">
             <input type='submit' value={`${Editable ? 'Update':'Add'}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
             </input>
      
            </div>
          </form>
        </div>
  )
}

export default HomePage
