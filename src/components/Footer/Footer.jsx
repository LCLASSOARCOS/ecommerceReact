import classes from './Footer.module.css'
import { useState } from 'react'
import FooterSection from '../FooterSection/FooterSection';

const Footer = () => {
   return (
     <footer>
       <div className={classes.categoriasFooter}>
         <FooterSection title="AYUDA" items={['Estado de mi pedido', 'Preguntas frecuentes', 'Cómo devolver', 'Trámite devolución', 'Envíos']} />
         <FooterSection title="EMPRESA" items={['Quiénes somos', 'Localizador de tiendas', 'Franquicias', 'Trabaja con nosotros']} />
         <FooterSection title="CONTACTANOS" items={['+57 (3147990489)', 'Localizador de tiendas', 'Franquicias', 'Trabaja con nosotros']} />
         <FooterSection title="Descarga la APP" items={['Metodo de pago']} />
       </div>
       <div className={classes.dir}>
         <p>ANDIMODAS.A.S 900.468.085-1, Bodega Guadalete Vereda Fusca Autopista Norte Kilómetro 21 Chía, Cundinamarca</p>
       </div>
     </footer>
   );
 };
 
 export default Footer;
 