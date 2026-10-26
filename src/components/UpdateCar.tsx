import {useState} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import  IconButton  from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DialogTitle from '@mui/material/DialogTitle';
import type { CarData } from '../type';
import CarForm from './CarForm';

type UpdateCarprops = {
    fetchCars: () => void;
    carData: CarData;
}

export default function UpdateCar(props: UpdateCarprops) {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState<CarData>({} as CarData);

  const handleClickOpen = () => {
    setOpen(true);

    setCar({
        brand: props.carData.brand,
        model: props.carData.model,
        color: props.carData.color,
        fuel: props.carData.fuel,
        price: props.carData.price,
        modelYear: props.carData.modelYear
    })
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    fetch(props.carData._links?.self.href || "", {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(car)
    })
    .then(response =>{
        if(!response.ok)
            throw new Error("Error whem adding a new car")
            return response.json()
    })
    .then(() => props.fetchCars())
    .catch((err) => console.log(err))
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <EditIcon/>
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Car</DialogTitle>
        <DialogTitle>
            Update
        </DialogTitle>
            <CarForm car={car} setCar={setCar}/>
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
