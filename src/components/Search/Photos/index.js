
import SearchService from '../../../services/search'
import React, { useState } from "react"
import { Spinner } from "../../../components/Icons"

import PhotoFeed from "../../../components/PhotoFeed"
const SearchPhotos = (props) => {

  const initialHomeState = {
    data: { photos: [] },
    page: 1,
    query: props.query,
    loading: true,
    hasMore: true,
  }

  const [state, setState] = useState(initialHomeState)

  const loadPhotos = async () => {
    const { page } = state
    
    await SearchService.search( state.query,page)
      .then(({ data }) => {
        setState({
          data: { photos: state.data.photos.concat(data.results) },
          page: page + 1,
          loading: false,
          hasMore: true,
        })
        console.log("home-data",data)
      })
      .catch((err) => alert(err))
  }

  return (
    <PhotoFeed
      loadMore={loadPhotos}
      hasMore={state.hasMore}
      loader={<Spinner size="2x" key={0} />}
      threshold={1000}
      photos={state.data.photos}
      classname="main"
    />
  )
}
  


export default SearchPhotos
