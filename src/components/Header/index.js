import React, { useState } from "react"
import { Link } from "react-router-dom"
import { setSearchUrlFriendly, onlyAlphanumericAndSpace } from "../Utils"
import { Logo } from "../Logo"
import { Bell } from "../Icons"
import {
  HeaderContainer,
  HeaderLogoWrap,
  HeaderSearchForm,
  HeaderSearchInput,
  HeaderNav,
  HeaderUserInfo,
  HeaderAvatar,
} from "./styles"

const Header = () => {
  const INITIAL_STATE = {
    query: "",
  }

  const [state, setState] = useState(INITIAL_STATE)

  const onChangeInput = (e) => {
    const query = onlyAlphanumericAndSpace(e.target.value)
    setState({ query })
  }

  const onSubmitSearchForm = (e) => {
    e.preventDefault()
    const { query } = state
    window.location.href = `/search/photos/${setSearchUrlFriendly(query)}`
  }

  return (
    <HeaderContainer className="shadowed">
      <HeaderLogoWrap>
        <Logo />
      </HeaderLogoWrap>
      <HeaderSearchForm onSubmit={onSubmitSearchForm}>
        <HeaderSearchInput type="text" placeholder="Search photos..." onChange={onChangeInput} value={state.query} />
      </HeaderSearchForm>
      <HeaderNav>
        <Link to="/">Home</Link>
        <Link to="/collections">Collections</Link>
      </HeaderNav>
      <HeaderUserInfo>
        <Bell customClass="icon__1-5" />
        <HeaderAvatar
          alt="avatar"
          src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
        />
      </HeaderUserInfo>
    </HeaderContainer>
  )
}

export default Header
