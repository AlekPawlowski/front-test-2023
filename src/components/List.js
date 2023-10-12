import React, { useEffect, useState } from "react";
import { fetchPhotos } from "../api";
import { ListElement } from "./ListElement";
import { Grid, Text } from "@chakra-ui/react"
import { gridConfig } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { addData, updatePages } from "../reducers/app";

const List = () => {
    // redux
    const listStore = useSelector(state => state.app.list);
    const pageStore = useSelector(state => state.app.page);
    const dispatch = useDispatch();
    const [lockLoad, setLockLoad] = useState(false);

    const getPhotos = async () => {
        // lock push for next data if current ist imported
        setLockLoad(true);

        const data = await fetchPhotos({
            perPage: 30,
            page: pageStore
        });
        const images = data.images;

        // update reducer
        dispatch(updatePages(pageStore + 1));
        dispatch(addData(images));

        // free loading next data
        setLockLoad(false);
    }

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
        if (pageStore === 1) {
            getPhotos();
        }else{
            window.addEventListener('scroll', handleScroll, { passive: true });
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [pageStore])

    if(listStore.length == 0 ) return <Text>Loading data</Text>
    
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
            listStore.map(photo => {
                return <ListElement key={photo.slug} photo={photo} />
            })
        }
    </Grid>
};

export default List;
