import React from 'react'
import Slide from 'react-reveal/Slide';
import LogoEstela from '../assets/images/logoEstela.png'
import { NavBar } from '../components/NavBar'
import cohete from '../assets/images/logoCompleto.png'
import { Icon } from 'semantic-ui-react'


export const Landing = () => {
    return (
        <div className='landingContainer'>
            <NavBar/>

            <Slide bottom>
                <div className='coheteContainer'>
                    <img className="coheteImg" src={cohete}/> 

                    <div className='letrasContainer'>
                        <h1 className='ideaLetras'> Idea </h1>
                        <h1 className='creativoLetras'> Creativo </h1>
                        <h1 className='appsLetras'> Apps </h1>
                        <h1 className='disenoLetras'> Diseño </h1>
                        <h1 className='arteDigitalLetras'> Arte digital </h1>
                    </div> 
                </div>
            </Slide>


            <div className='footerLanding'>
                <div className='row col-sm-12 linksFooterContainer'>
                    <a className='col-sm-3'><Icon name='facebook' /></a>
                    <a className='col-sm-3'><Icon name='instagram' /></a>
                    <a className='col-sm-3'><Icon name='twitter' /></a>
                    <a className='col-sm-3'><Icon name='youtube' /></a>
                </div>
            </div>
        </div>
    )
}
