// jQuery = non conflict mode
// $ = conflict mode
// inicializacion
// jQuery(document)
$(document).ready( () => {

  // alert("ALERTAAAAA!! VAMOS A MORIRRR")

  // alert(suma(10,10))
  // alert(suma(10,10) + mul(10,10))
  // alert(mul(suma(10,10),10))

// imprime(mul(3,9))
// regresa()
// fondo('lime')
// ancho()


// aqui cambie el 250 por 25 para que valla rapido o lento como en arduino
imgLiquid()
slider_inicio()
//colores_fondo(2500,["#3465fa","purple","black","yellow","lime","orange"])
colores_fondo(2500,["#00f6ff","75f4f9","c0fdff"])

} )


// funciones estaticas
function suma(valor1=1,valor2=1) {
  // console.log( 100 + 200)
  return valor1 + valor2
}

function mul(valor1,valor2=10) {

  return valor1*valor2
}

function imprime(parametro) {

  return $('.participantes_item_text h2').html(parametro)
  // return $('.participantes_item_text h2').append(paramet$('.participantes_item_text h4').html()

}

function regresa() {

  var x = $('.participantes_item_text h4').html()

  return alert(x)

}

function fondo(color) {

  $('body').css('background-color', color)
  // $('body').css({'':''})

}

function ancho() {
  // eventos
  $(window).on('resize', ()=>{

    var x = $(document).width()
    // console.log("RESIZE")
    console.log(x)

  })

}

function colores_fondo(time=1000,colorArray=['purple','red']) {

  var i = 0;
  var size = colorArray.length;

  setInterval(()=> {
    if(i == size-1) {
      i=0
    } else {
      i++
    }
    $('body').css('background-color',colorArray[i])
  },time)

}

// scripts tema
// control de imagenes


function imgLiquid() {
  $(".imgLiquid.imgLiquidFill").imgLiquid()
  
  $(".imgLiquid.imgLiquidNoFill").imgLiquid({
  fill:false
})
  $(".imgLiquid.imgLiquidNoFillLeft").imgLiquid({
    fill:false,
    horizontalAlign:"left"
})
  $(".imgLiquid.imgLiquidNoFillRight").imgLiquid({
  fill:false,
  horizontalAlign:"right"
})
}

function slider_inicio() {
$('#heroscreen').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: false,
  cssEase: 'linear',
  draggable: true
});
}