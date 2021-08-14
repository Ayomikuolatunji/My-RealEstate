import React from 'react'
import { NavListStyle } from '../../Styled'

export default function NavbarItems({navProps, ShowToggler}) {
    return (
        <NavListStyle to={navProps.path} onClick={ShowToggler}>
            {navProps.title}
        </NavListStyle>
    )
}
