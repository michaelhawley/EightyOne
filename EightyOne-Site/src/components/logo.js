
import React, { useState } from 'react'
import {Link } from 'gatsby'
import "../scss/navbar.scss"
import R from '../scss/navbar.module.scss';
import "../scss/logo.scss"
import "../scss/hamburgers/hamburgers.scss"
import styled from 'styled-components'



function Logo () {
    const [open, setOpen] = useState(false);

        return (
            <div>
                <BurgerContainer open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />



            </div>
        )
        }

export default Logo;

const BurgerContainer = ({ open, setOpen }) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div>testing</div>
            
        </StyledBurger>
    )
  }

const Menu = ({ open }) => {
    return (
        <div>
            menu
        </div>
    )
}

const StyledBurger = styled.button`
  div {
    background: ${({ open }) => open ? '#0D0C1D' : '#EFFFFA'};
  }
`






