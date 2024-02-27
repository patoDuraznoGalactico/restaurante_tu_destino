
const loadFooter =document.querySelector('.loadFooter')
loadFooter.innerHTML=`
<footer id="footer">
<div class="frame-footer">
    <div class="frame-heigher">
        <div class="frame-left">
            <div class="log">
                <img src="../../Gallery/lgo-removebg-preview.png" alt="Logo de Tu Destino">
                <h2>Tu Destino</h2>
            </div>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><p class="l">/</p></li>
                <li><a href="#">Galleria</a></li>
            </ul>
        </div>
        <div class="frame-right">
            <div class="right-low">
                <button id="loginEnd"><a href="#">Cerrar Sesión</a></button>
                <div class="red">
                   <a href="#"><img class="f" src="../../Gallery/facebook.png" alt=""></a>
                    <a href="#"><img class="w" src="../../Gallery/whatsapp.png" alt=""></a>
                    <a href="#"><img class="i" src="../../Gallery/instagram.png" alt=""></a>
                    <a href="#"><img src="../../Gallery/lgo-removebg-preview.png" alt=""></a>
                </div>
            </div>
        </div>
    </div>
    <div class="frame-lower">
        <p> © 2024 Tu Destino S.A.S Todos los derechos reservados</p>
        <p class="l">/</p>
        <a href="#">Terminos y Condiciones</a>
        <p class="l">/</p>
        <a href="#">Terminos de Web</a>
    </div>
</div>
</footer>
`

const nave =document.querySelector('nav');
nave.innerHTML=`
<div id="logo">
<a href="#">
  <img src="../Modulos/Nav/Burguer-removebg-preview.png" alt="logo"/> 
</a>
</div>

<section id="frame-nav">
<div id="nav">
  <a href="#">Inicio</a>
  <a href="#">Nuestra Galeria</a>
  <a href="#">Login</a>
</div>
</section>
<div id="menuH">
<a id="menuH-img" onclick="openNav()" href="#"><img src="menu.png" alt=""> </a>
<a id="menuX-img" onclick="closeNav()" href="#"><img src="x.png" alt=""> </a>
</div>

<div id="hidden-nav"> 
<a href="#">inicio</a>
<a href="#">Nuestra Galeria</a>
<a href="#">Login</a>
</div>
`