import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";
import '../style/nosotros.css';
import {SectionsContainer, Section} from 'react-fullpage';
import {Responsive,Segment } from 'semantic-ui-react'


export const Proceso=()=>{

  const options = {
   sectionClassName:     'section',
   anchors:              ['Analisis', 'Prototipado', 'Desarrollo','Testing','Produccion','Integracion'],
   scrollBar:            false,
   navigation:           true,
   verticalAlign:        false,
   sectionPaddingTop:    '0',
   sectionPaddingBottom: '0',
   arrowNavigation:      true
 };

  return(
    <>
    <SectionsContainer className="containerSection" {...options}>
        <Section className="custom-section"  verticalAlign="true" color="#69D2E7"
           id='analisis' >
          <div className='imagenesCirculo'>
              <img src='./imagenes/work/analisis.svg' id='analisis-img' style={{width:'100%',marginTop:'15vh'}}/>
                <h1 className='encabezados'>Analisis</h1>
                <h2 className='descripciones'>Trabajamos de la mano contigo para definir y planear la
                ejecución del proyecto.</h2>
          </div>


        </Section>

        <Section className="custom-section"  verticalAlign="true" color="#69D2E7"
           id='prototipado' >
          <div className='imagenesCirculo'>
            <img src='./imagenes/circulo-1.svg' style={{width:'100%'}}/>
            <img src='./imagenes/work/prototipado.svg' className='imagenes-bajar'/>
            <h1 className='encabezados'>Prototipado</h1>
            <h2 className='descripciones'>El proyecto toma forma de wireframing para validar el futuro
            resultado final.</h2>
          </div>

        </Section>

        <Section className="custom-section"  verticalAlign="true" color="#69D2E7"
           id='desarrollo' >
          <div className='imagenesCirculo'>
            <img src='./imagenes/work/desarrollo.svg'/>
            <h1 className='encabezados' style={{backgroundColor:'rgba(234, 97, 0, 0.8)',color:'#ffffff'}}>Desarrollo</h1>
            <h2 className='descripciones' style={{backgroundColor:'rgba(0, 0, 0, 0.4)',color:'#ffffff'}}>Es tiempo que el código haga su magia, en Kódika trabajamos para superar
            las expectativas.</h2>
          </div>
        </Section>

        <Section className="custom-section"  verticalAlign="true" color="#69D2E7"
           id='testing' >
          <div className='imagenesCirculo'>
            <img src='./imagenes/circulo-1.svg' style={{width:'100%'}}/>
            <img src='./imagenes/work/testing.svg'/>
            <h1 className='encabezados'>Testing</h1>
            <h2 className='descripciones'>Nos aseguramos que el proyecto no tenga fallos, mediante pruebas
            exhaustivas.</h2>
          </div>
        </Section>

        <Section className="custom-section"  verticalAlign="true" color="#69D2E7"
           id='deploy' >
          <div className='imagenesCirculo'>
            <img src='./imagenes/circulo-1.svg' style={{width:'100%'}}/>
            <img src='./imagenes/work/deploy.svg' />
            <h1 className='encabezados' style={{backgroundColor:'rgb(255, 79, 59,.8)',color:'#ffffff'}}>Puesta en producción</h1>
            <h2 className='descripciones' style={{color:'#ffffff'}}>Ponemos tu proyecto al alcance de quien quieras, es tiempo que el mundo
            conozca tu idea. </h2>
          </div>
        </Section>

        <Section className="custom-section"  verticalAlign="true" color="#69D2E7"
           id='integracion' >
          <div className='imagenesCirculo'>
            <img src='./imagenes/circulo-1.svg' style={{width:'100%',}}/>
            <img src='./imagenes/work/integracion.svg' className='imagenes-bajar'/>
            <h1 className='encabezados'  style={{backgroundColor:'rgb(255, 66, 126,.8)',color:'#ffffff'}}>Desarrollo iterativo</h1>
            <h2 className='descripciones'>Sabemos que las ideas no paran y las necesidades aumentan, por eso nos preparamos
            para crecer tu proyecto.</h2>
          </div>
        </Section>
      </SectionsContainer>
    </>
  );
}

