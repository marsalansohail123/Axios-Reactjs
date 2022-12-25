import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import SearchAppBar from '../components/Navbar';
import axios from 'axios';
import '../App.css';

export default function Data() {

    const [data, setData] = useState([]);

    let getData = () => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => setData(res.data))
            .catch((err) => {
                alert(err);
            })
    };
    // console.log(data);

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <SearchAppBar data={data} />
            {
                data.map((e, i) => {
                    return (
                        <div className='cards' key={i}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="200"
                                    image={e.image}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {e.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {e.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">{e.price} $</Button>
                                    <Button size="small">{e.category}</Button>
                                </CardActions>
                            </Card>
                        </div>
                    )
                })
            }
            {/* {
                data.map((e, i) => (
                    <h1 key={i}>{e.title}</h1>
                ))
            } */}
        </div>
    );
}
