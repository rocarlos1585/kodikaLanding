import React from 'react'

import Logo from '../assets/images/logoAlternativoKodika.png'

export const NavBar = () => {
    return (
        <div className='row col-12 navBarContainer '>
            <div className='col-sm-8 logoNavBarContainer'>
                <img src={Logo} />
            </div>

            <div className='row col-sm-4 linksNavBarContainer'>
                <a className='col-sm-3'>Nosotros</a>
                <a className='col-sm-3'>Proceso</a>
                <a className='col-sm-3'>Proyectos</a>
                <a className='col-sm-3'>Contacto</a>
            </div>
        </div>
    )
}
