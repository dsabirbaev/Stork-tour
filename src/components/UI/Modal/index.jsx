
import {Close} from "../../Icons"

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
 
const index = ( {open, setOpen} ) => {

  
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      
      <Dialog open={open} handler={handleOpen}>
        <div className="flex items-center justify-center relative">
          <DialogHeader className="text-[#0154A7] font-['MontserratSemiBold'] text-[24px]">Связаться с нами</DialogHeader>
          
          <div  onClick={handleOpen} className="cursor-pointer absolute right-2 top-2">
            <Close />
          </div>
          
      
        </div>

        <DialogBody divider>
          <div className="grid gap-6">
            <Input label="Имя" />
            <Input label="Номер телефона" />
            <Textarea label="Сообщение" />
          </div>
        </DialogBody>

        <DialogFooter className="flex items-center justify-center">
         
          <Button variant="gradient" color="blue" onClick={handleOpen} className="w-[400px]">
            Отправка
          </Button>
        </DialogFooter>

      </Dialog>
    </>
  );
}


export default index;