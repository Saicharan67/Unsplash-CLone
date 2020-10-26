import React from "react"
import { Link } from "react-router-dom"
import SearchPhotos from "../../components/Search/Photos"
import SearchCollections from "../../components/Search/Collections"
import SearchUsers from "../../components/Search/Users"
import {
  Container,
  SearchQuery,
  SearchQueryText,
  SearchNav,
  SearchNavLink,
  SearchNavType,
  SearchNavCount,
} from "./styles"

const Search = (props) => {
  
 
  const { type,query} = props.match.params
 
  const getPage = () => {
    switch (type) {
      case "photos":
        return <SearchPhotos query={query} />
      case "collections":
        return <SearchCollections query={query} />
      case "users":
        return <SearchUsers query={query} />
      default:
        return <div style={{ paddingTop: "100px" }}>Incorrect Data</div>
        
    }
  }

  return (
    <Container>
      {/* <SearchTags /> */}
      <SearchQuery>
        <SearchQueryText>{query.toUpperCase()}</SearchQueryText>
      </SearchQuery>
      <SearchNav>
        <Link to={`/search/photos/${query}`}>
          <SearchNavLink>
            
            <SearchNavType>Photos</SearchNavType>
          </SearchNavLink>
        </Link>
        <Link to={`/search/collections/${query}`}>
          <SearchNavLink>
            
            <SearchNavType>Collections</SearchNavType>
          </SearchNavLink>
        </Link>
        <Link to={`/search/users/${query}`}>
          <SearchNavLink>
            
            <SearchNavType>Users</SearchNavType>
          </SearchNavLink>
        </Link>
      </SearchNav>
      <div>{getPage()}</div>
    </Container>
  )
}

export default Search
