import classes from './Footer.module.css'

const Footer = () => {
    return (
        <footer>
        <div className={classes.categoriasFooter}>
           <div className={classes.ayudaFooter}>
              <h4> AYUDA</h4>
              <p>  Estado de mi pedido</p>
              <p> Preguntas frecuentes</p>
              <p> Cómo devolver</p>
              <p> Tramite devolución </p>
              <p> Envios </p>
           </div>
           <div className={classes.ayudaFooter}>
              <h4> EMPRESA</h4>
              <p> Quienes somos</p>
              <p> Loquizador de tiendas</p>
              <p> Franquicias</p>
              <p> Trabaja con nosotros</p>
           </div>
           <div className={classes.ayudaFooter}>
              <h4> CONTACTANOS</h4>
              <a className={classes.contactoWpp} target="_blank"
                 href="https://wa.me/573147990489?text=Hola iLASS, QUIERO INFORMACION DE TU ROPA">
                 <p className={classes.numeroFooter}> +57 (3147990489)</p>
              </a>
              <p className={classes.parrafoFooter}> Loquizador de tiendas</p>
              <p className={classes.parrafoFooter}> Franquicias</p>
              <p className={classes.parrafoFooter}> Trabaja con nosotros</p>
           </div>
           <div className={classes.ayudaFooter}>
              <h4>Descarga la APP</h4>
              <div className={classes.mediosDePago}>
                 <img className={classes.appStore} src="data:image/png;base64,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" alt="imagen appstore" />
                 <img className={classes.appStore} src="https://imagen-radio.com/wp-content/uploads/google-play-store-botton.png" alt="imagen google play"/>
              </div>
              <h4>Metodo de pago</h4>
              <div className={classes.ayudaFooter}>
  
                 <div className={classes.mediosDePago}>
                    <img className={classes.tarjetas} src="https://infonegocios.info/content/images/2022/07/22/324342/conversions/premios_LA_tarjetasdecredito-medium-size.jpg" alt="imagen tarjetas de pago" />
                 </div>
              </div>
           </div>
        </div>
        <div className={classes.dir}>
           <p>ANDIMODAS.A.S 900.468.085-1, Bodega Guadalete Vereda Fusca Autopista Norte Kilómetro 21 Chía, Cundinamarca
           </p>
        </div>
     </footer>
    )
}

export default Footer