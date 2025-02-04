import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Header from "./Header";

// Generating Order Data
function createData(id, address) {
    return { id, address };
}

const addresses = [
    createData(0, '0xb794f5ea0ba39494ce839613fffba74279579268'),
    createData(1, '0xbe0eb53f46cd790cd13851d5eff43d12404d33e8'),
    createData(2, '0xda9dfa130df4de4673b89022ee50ff26f6ea73cf'),
];

export default function Addresses() {
    const [selected, setSelected] = React.useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        const addr = event.target.value;
        setSelected(addr);
        if (addr) {
            navigate(`/transfer/${addr}`);
        }
    };

    return (
        <React.Fragment>
            <Header>Blockchain Node Addresses</Header>
            <FormControl variant="outlined" fullWidth>
                <InputLabel id="address-select-label">Select Address to Transfer</InputLabel>
                <Select
                    labelId="address-select-label"
                    id="address-select"
                    value={selected}
                    onChange={handleChange}
                    label="Select Address to Transfer"
                >
                    <MenuItem value="" disabled>
                        <em>Select an Address</em>
                    </MenuItem>
                    {addresses.map((addr) => (
                        <MenuItem key={addr.id} value={addr.address}>
                            {addr.address}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </React.Fragment>
    );
}
