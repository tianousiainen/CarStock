import { DialogContent } from "@mui/material";
import {TextField} from "@mui/material";
import type { CarData } from "../type";
import type React from "react";

type CarformProps = {
    car: CarData
    setCar: React.Dispatch<React.SetStateAction<CarData>>
}

function CarForm({car, setCar}: CarformProps){
    return(
   <DialogContent>
            <TextField
                required
                margin="dense"
                label="Brand"
                value={car.brand}
                onChange={e => setCar({...car, brand: e.target.value})}
                fullWidth
                variant="standard"
            />

            <TextField
            required
            margin="dense"
            label="Model"
            value={car.model}
            onChange={e => setCar({...car, model: e.target.value})}
            fullWidth
            variant="standard"
            />

            <TextField
            required
            margin="dense"
            label="Color"
            value={car.color}
            onChange={e => setCar({...car, color: e.target.value})}
            fullWidth
            variant="standard"
            />

            <TextField
            required
            margin="dense"
            label="Fuel"
            value={car.fuel}
            onChange={e => setCar({...car, fuel: e.target.value})}
            fullWidth
            variant="standard"
            />

            <TextField
            required
            margin="dense"
            label="Model year"
            value={car.modelYear}
            type='number'
            onChange={e => setCar({...car, modelYear: parseInt(e.target.value)})}
            fullWidth
            variant="standard"
            />

            <TextField
            required
            margin="dense"
            label="Price"
            value={car.price}
            type='number'
            onChange={e => setCar({...car, price: parseFloat(e.target.value)})}
            fullWidth
            variant="standard"
            />
        </DialogContent>
    )
}

export default CarForm;