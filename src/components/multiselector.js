
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



export default function MultipleSelectCheckmarks(props) {

  
  const[name,setShowhide] = React.useState(false);

  const handleshowhide=(e) =>{
    setShowhide(current => !current);
  }


  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
   
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
      
    );
    

  };

  

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Engineering</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange} 
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {props.data.map((name) => (
            <MenuItem key={name} value={name} onChange={(e)=>{handleshowhide(e)}} >
              <Checkbox checked={personName.indexOf(name) > -1}  value={personName.indexOf(name)}  />
              
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>

        {
                name === true && (
                  <div >
                    <label for="country" class="block text-sm font-medium text-gray-700">Minimum Value</label>
                <input type="number" name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                <label for="country" class="block text-sm font-medium text-gray-700">Maximum Value</label>
                <input type="number" name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                  </div>
                )
              }
      </FormControl>
    </div>
  );
}