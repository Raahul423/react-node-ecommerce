import { useEffect, useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Collapse } from 'react-collapse';
import { TiArrowSortedDown } from "react-icons/ti";
import Button from '@mui/material/Button';
import { FaCaretUp } from "react-icons/fa";
import api from '../../../../Utils/api';


const Category = ({ isopen, collapseisopen }) => {
    const [tick, setTick] = useState(null);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const category = async () => {
            try {
                const res = await api.get('/categories/category/root');
                setCategory(res?.data?.rootcategory);
            } catch (error) {
                console.error(error?.message);
            }
        }
        category();
    }, [])


    const handlechange = (idx) => {
        setTick((prev) => prev === idx ? null : idx)
    }


    return (
        <section>
            <div className='flex justify-between items-center py-3'>
                <h2 className='text-xl'>Shop By Category</h2>
                <Button onClick={isopen} className='!rounded-full !w-5 !h-5 !text-primary'>
                    {collapseisopen === true ? <FaCaretUp className='text-2xl text-gray-900/80' /> : <TiArrowSortedDown className='text-2xl text-gray-900/80' />}
                </Button>
            </div>

            <Collapse isOpened={collapseisopen}>
                <div className='scroll inset-shadow-xs px-4'>
                    {category.map((items, idx) => (
                        <FormGroup key={idx}>
                            <FormControlLabel className='text-gray-900/90' control={
                                <Checkbox
                                    checked={tick == idx}
                                    onChange={() => handlechange(idx)}
                                    size='small' sx={{
                                        color: '#101828/90',
                                        '&.Mui-checked': {
                                            color: '#ff5252',
                                        },
                                    }} />}
                                label={items?.name} />
                        </FormGroup>
                    ))}
                </div>
            </Collapse>
        </section>
    )
}

export default Category
