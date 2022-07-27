// do we even need this? prob should not focus on implementing an edit club functionality...
/* DO NOT FOCUS ON IMPLEMENTING THIS UNTIL WE HAVE COMPLETED:
    1. Redesigning UI/UX
    2. Implementing a Coursicle Calendar
    3. Integrating Suggestion Algorithm
*/

import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, useTheme} from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

export default function EditClub() {
    const [value, setValue] = React.useState('Controlled');

    const theme = createTheme();

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

    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ];

    const currencies = [
        {
            value: '10',
            label: '5:00 pm',
        },
        {
            value: '10',
            label: '6:00 pm',
        },
        {
            value: '10',
            label: '7:00 pm',
        },
        {
            value: '10',
            label: '8:00 pm',
        },
        {
            value: '10',
            label: '9:00 pm',
        },
        
    ];
      
    function getStyles(name, personName, theme) {
        return {
            fontWeight:
            personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
        };
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

    const [currency, setCurrency] = React.useState('EUR');

    const handleChange2 = (event) => {
        setCurrency(event.target.value);
    };

  return (
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                Edit Club
                </Typography>
                <div>
                    <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-multiple-chip-label">Meeting Days</InputLabel>
                        <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput id="select-multiple-chip" label="Meeting Days" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}>
                        {days.map((name) => (
                            <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                            >
                            {name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    <TextField
                        id="outlined-select-currency-native"
                        select
                        label="Meeting Time"
                        value={currency}
                        onChange={handleChange2}
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Please select your club time"
                        >
                        {currencies.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                    </TextField>
                </div>

                <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '75ch' },
                }}
                noValidate
                autoComplete="off"
                className='box'
                >
                    <div>
                        <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={6}
                        defaultValue="Default Value"
                        />
                    </div>
                </Box>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Save Changes
                </Button>
            </Box>
        </Container>
    </ThemeProvider>
  );
}