import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';




export default function CheckboxesGroup() {

  const [state, setState] = React.useState({
    Engineering: false,
    Architecture: false,
    Constructions: false,
  });

  

  const [stateConstructions, setConstructions] = React.useState({
    piplinefixing: false,
    BathroomFittings: false,
    
  });

  const [stateArchitecture, setStateArchitecture] = React.useState({
    LandscapeDesignPlan: false,
    RestorationArchitecture: false,
    
  });

  const [stateEngineering, setStateEngineering] = React.useState({
    civilEnginnnering: false,
    StructuralEngineering: false,
    antoine2: false,
  });
 
  const handleChange = (event) => {

    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChangeforEngineering = (event) => {
    setStateEngineering({
      ...stateEngineering,
      [event.target.name]: event.target.checked,
    });

    setState({
        ...state,
        ['Engineering']:event.target.checked,
      });
  };


  const handleChangeforArchitecture = (event) => {
    setStateArchitecture({
      ...setStateArchitecture,
      [event.target.name]: event.target.checked,
    });

    setState({
        ...state,
        ['Architecture']: event.target.checked,
      });
  };

  const handleChangeforConstructions = (event) => {
    setConstructions({
      ...setStateArchitecture,
      [event.target.name]: event.target.checked,
    });

    setState({
        ...state, 
        ['Constructions']: event.target.checked,
      });
  };


  const { Engineering, Architecture,Constructions } = state;
  const { civilEnginnnering,StructuralEngineering} = stateEngineering;
  const { LandscapeDesignPlan, RestorationArchitecture} = stateArchitecture;
  const {piplinefixing} = stateConstructions;
  const error = [Engineering, Architecture, Constructions].filter((v) => v).length !== 1;

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Assign Category</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={Engineering} onChange={handleChange} name="Engineering" />
            }
            label="Engineering"
          />
          <FormControlLabel
            control={
              <Checkbox checked={Architecture} onChange={handleChange} name="Architecture" />
            }
            label="Architecture"
          />
          <FormControlLabel
            control={
              <Checkbox checked={Constructions} onChange={handleChange} name="Constructions" />
            }
            label="Constructions"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
      <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
        <FormLabel component="legend">Pick subcategory</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={civilEnginnnering} onChange={handleChangeforEngineering}  name ="civilEnginnnering"/>
            }
            label="Civi Engineering"
          />
          <FormControlLabel
            control={
              <Checkbox checked={StructuralEngineering} onChange={handleChangeforEngineering} name="StructuralEngineering" />
            }
            label="Structural Engineering"
          />
          <FormControlLabel
            control={
              <Checkbox checked={RestorationArchitecture} onChange={handleChangeforArchitecture} name="RestorationArchitecture" />
            }
            label="Restoration Architecture"
          />
          <FormControlLabel
            control={
              <Checkbox checked={LandscapeDesignPlan} onChange={handleChangeforArchitecture} name="LandscapeDesignPlan" />
            }
            label="Landscape Design Plan"
          />
           <FormControlLabel
            control={
              <Checkbox checked={piplinefixing} onChange={handleChangeforConstructions} name="Piplinefixing" />
            }
            label="Pipline Fixing"
          />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl>
    </Box>
  );
}