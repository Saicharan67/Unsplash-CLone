import React, { useState } from "react"
import { Spinner } from "../../components/Icons"
import PhotoFeed from '../../components/PhotoFeed'

const Collections = () => {
  

  
  
    
     fetch('https://api.unsplash.com/collections/139386/photos?client_id=59tEubl8DvHLU9Z2pZ_KNPj2bzXc7_jtpNcZ-eBBHI0&per_page=30&page=1')
      .then(({ data }) => {
        // setState({
        //   data: { photos: state.data.photos.concat(data) },
        //   page: page + 1,
        //   loading: false,
        //   hasMore: true,
        // })
        console.log("collection-data",data)
      })
      .catch((err) => alert(err))
    
  return(
    <div/>
  )
  
};

export default Collections;

//https://api.unsplash.com/collections/139386/photos?client_id=59tEubl8DvHLU9Z2pZ_KNPj2bzXc7_jtpNcZ-eBBHI0&per_page=30&page=1