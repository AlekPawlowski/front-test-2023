import React, { useEffect, useState } from "react";
import { fetchPhotos } from "../api";
import { ListElement } from "./ListElement";
import { Grid } from "@chakra-ui/react"
import { gridConfig } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../reducers/app";

const List = () => {
    // redux
    const store = useSelector(state => state.app.list);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [lockLoad, setLockLoad] = useState(false);
    // set initial state
    const getPhotos = async () => {
        setLockLoad(true);
        console.log("current page", page);
        const data = await fetchPhotos({
            perPage: 30,
            page: page
        });
        const images = data.images;

        setPage(prev => prev + 1);
        // push to reducer
        console.log("page", page);
        dispatch(addData(images));
        setLockLoad(false);

    }
    useEffect(() => {
        if (page === 1) {
            getPhotos();
        }
    }, [page])

    const handleScroll = () => {
        const position = window.pageYOffset;
        const windowHeight = document.body.scrollHeight - window.innerHeight;

        const getNewDataPoint = windowHeight - 200;
        if(getNewDataPoint < position){
            if(!lockLoad){
                getPhotos();
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <Grid
        style={{
            minHeight: "90vh",
            width: "100%",
            padding: "50px"
        }}
        templateColumns='repeat(4, 1fr)'
        gap={gridConfig.gridGap}
        rowGap={gridConfig.gridGap}
        columnGap={gridConfig.gridGap}
    >
        {
            store.map(photo => {
                return <ListElement key={photo.slug} photo={photo} />
            })
        }
    </Grid>
};

export default List;
