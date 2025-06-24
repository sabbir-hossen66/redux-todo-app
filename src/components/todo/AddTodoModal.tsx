import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { useState, type FormEvent } from "react";
import { CloudCog } from "lucide-react";


const AddTodoModal = () => {  
  const [tast, setTast] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
  console.log({tast, description});
  }

  return (
    <Dialog>
      
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit}>
          <div  className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="task">Task</Label>
              <Input onBlur={(e)=>setTast(e.target.value)} id="task" name="task" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">description</Label>
              <Input onBlur={(e)=>setDescription(e.target.value)} id="username-1" name="username"  />
            </div>
          </div>
          <div>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button  variant={"outline"} type="submit">Save changes</Button>
          </div>
      </form>
      </DialogContent>
      
    </Dialog>
  )
}
export default AddTodoModal;