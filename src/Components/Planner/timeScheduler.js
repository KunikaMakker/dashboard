import React from 'react';
import { Table, TableRow, TableCell, TableBody } from '@material-ui/core';

const TimeScheduler = () => {
    const time = ["00.00","01.00","02.00","03.00","04.00","05.00"]
    return(
        <Table>
            <TableBody>
                {time.map(value =>(
                    <TableRow key={value}>
                        <TableCell>{value}</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                ))}
                
            </TableBody>
        </Table>
    );
}
export default TimeScheduler;