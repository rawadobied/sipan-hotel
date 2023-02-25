import React, {useState} from 'react';
import { Select , MenuItem ,FormControl,InputLabel,Button} from '@material-ui/core';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";
import './style.scss'

const Booking = (props) => {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const addDays=(date, days)=>{
        let result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }
    return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div className={'booking-container'}>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Arrival Date"
                    inputVariant={'outlined'}
                    disablePast
                    value={new Date()}
                    // onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Departure Date"
                    inputVariant={'outlined'}
                    disablePast
                    value={addDays(new Date(),1)}
                    // onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                <FormControl>
                    <InputLabel>Children</InputLabel>
                    <Select style={{minWidth:'200px'}} defaultValue={'select'} value={''} displayEmpty>
                        <MenuItem disabled value={''}>Children</MenuItem>
                        <MenuItem value={'1'}>1</MenuItem>
                        <MenuItem value={'2'}>2</MenuItem>
                        <MenuItem value={'3'}>3</MenuItem>
                    </Select>
            </FormControl>
                <FormControl>
                    <InputLabel>Adults</InputLabel>
                    <Select style={{minWidth:'200px'}} defaultValue={'select'} value={''} displayEmpty>
                        <MenuItem disabled value={''}>Adults</MenuItem>
                        <MenuItem value={'1'}>1</MenuItem>
                        <MenuItem value={'2'}>2</MenuItem>
                        <MenuItem value={'3'}>3</MenuItem>
                    </Select>
            </FormControl>
                    <Button variant="contained"  color={'primary'} onClick={()=>window.open('https://www.booking.com/hotel/iq/sipan.html?label=gen173nr-1DCAEoggI46AdIM1gEaG6IAQGYATG4ARjIAQzYAQPoAQH4AQKIAgGoAgS4AsORkYMGwAIB0gIkOTM2ZjBiOTgtYjVhYS00NDdmLWE5ZDAtNDA5NmRmYmNlZDZl2AIE4AIB;sid=b3434b7e16e3ade057c7918d32f412a8;dest_id=-3106433;dest_type=city;dist=0;group_adults=1;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=1;req_children=0;room1=A;sb_price_type=total;sr_order=popularity;srepoch=1617184970;srpvid=d31746a524700143;type=total;ucfs=1&#hotelTmpl') }>Check Price !</Button>
                </div>
            // </MuiPickersUtilsProvider>
        )
    }

;

export default Booking;
