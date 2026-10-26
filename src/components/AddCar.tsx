import {useState} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import type { CarData } from '../type';
import { addCar } from '../carapi';
import CarForm from './CarForm';



type Addcarprops = {
    fetchCars: () => void;
}

export default function AddCar(props: Addcarprops) {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState<CarData>({} as CarData);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    addCar(car)
    .then(() => props.fetchCars())
    .catch((err) => console.log(err))
    handleClose();
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
       Add Car
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Car</DialogTitle>
        <DialogTitle>
          <CarForm car={car} setCar={setCar}/>
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
