import { NavLink } from 'react-router-dom'
import '../assets/Glass.css'
function DeshBord() {
  return (
    <div>
        <nav className='glass p-3 flex justify-between'>
           <div className="flex gap-x-5 md:px-24">
             <NavLink  className={({ isActive }) => isActive ? "underline text-xl" : "text-xl"} to={'/'}>Add Todo</NavLink>
             <NavLink className={({ isActive }) => isActive ? "underline text-xl" : "text-xl"} to={'/all-todos'}>All Todos</NavLink>
           </div>
        </nav>
    </div>
  )
}

export default DeshBord
