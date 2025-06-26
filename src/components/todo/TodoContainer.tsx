import { useAppSelector } from "@/redux/feature/hook"
import { Button } from "../ui/button"
import AddTodoModal from "./AddTodoModal"
import TodoCards from "./TodoCards"
import TodoFilter from "./TodoFilter"

export const TodoContainer = () => {
    const {todos}=useAppSelector((state)=>state.todos)
  return (
    <div>
      <h3>hello todo redux</h3> 
      <div className="flex justify-between items-center mb-5">
        <Button className="bg-primary text-xl font-semibold">Add todo</Button>
        <AddTodoModal />
        <TodoFilter/>
        <Button className="text-black">FILTER</Button>
      </div>
      <div className="bg-red-500 w-full h-full rounded-xl space-y-5 p-[4px]">
        {/* <div className="bg-white p-5 text-2xl font-bold flex justify-center items-center rounded-md"><p>There is no task pending</p></div> {''} */}
        <div className="bg-secondary p-5 h-full rounded-lg">
          {
            todos.map((todo) => (
              <TodoCards {...todo} />
            ))
       }
        </div>
        
      </div>
    </div>
  )
}