
const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('nav');
if(menuBtn) menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));

document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));

const detectorQuestion=document.getElementById('detector-question');
if(detectorQuestion){
  const questions=[
    {q:'Una publicación asegura que una noticia es verdadera porque tiene miles de likes. ¿Qué haces?',a:['La comparto porque mucha gente reaccionó.','Confío en el título sin revisar.','Verifico la fuente, la fecha y otras fuentes confiables.'],c:2},
    {q:'Un desconocido te pide tu contraseña para ayudarte con tu cuenta. ¿Qué haces?',a:['Se la envío por mensaje.','No la comparto y aviso a alguien de confianza.','Le envío también el código que llegó a mi teléfono.'],c:1},
    {q:'Recibes un enlace inesperado que promete un premio y pide tus datos. ¿Qué haces?',a:['Lo abro rápido para reclamarlo.','Lo reenvío a mis amistades.','No ingreso mis datos y compruebo si la promoción es oficial.'],c:2},
    {q:'Alguien publica una foto tuya sin permiso. ¿Qué haces?',a:['Pido que la retire y uso las opciones para reportarla.','Publico sus datos para que aprenda.','No hago nada aunque me incomode.'],c:0},
    {q:'Usarás una imagen de internet en un proyecto. ¿Qué conviene hacer?',a:['Usarla sin revisar porque está en internet.','Revisar su licencia y dar crédito cuando corresponda.','Quitar la marca de agua.'],c:1},
    {q:'Una persona desconocida te pide tu ubicación y el nombre de tu escuela. ¿Qué haces?',a:['Se los comparto para conversar.','Le mando una foto de mi identificación.','No comparto esos datos y se lo cuento a alguien de confianza.'],c:2},
    {q:'Ves un comentario humillante contra alguien. ¿Cómo ayudas?',a:['Lo comparto para que más gente lo vea.','Apoyo a la persona, reporto el contenido y no me sumo al acoso.','Respondo con otro insulto.'],c:1},
    {q:'Una aplicación de linterna pide acceso a tus contactos y ubicación. ¿Qué haces?',a:['Reviso los permisos y rechazo los que no necesita.','Acepto todo sin leer.','Comparto también mis contraseñas.'],c:0},
    {q:'Un mensaje dice ser de tu banco y te urge a confirmar tu cuenta desde un enlace. ¿Qué haces?',a:['Abro el enlace y escribo mis claves.','Respondo con el código de seguridad.','No uso el enlace y contacto al banco por sus canales oficiales.'],c:2},
    {q:'Usas una computadora compartida para entrar a tu correo. ¿Qué haces al terminar?',a:['Cierro sesión y no guardo la contraseña.','Dejo la cuenta abierta para volver después.','Le digo mi contraseña a quien use el equipo.'],c:0}
  ];
  const progress=document.getElementById('detector-progress'), options=document.getElementById('detector-options'), result=document.getElementById('detector-result'), next=document.getElementById('detector-next');
  let index=0, score=0, answered=false;
  function render(){
    const item=questions[index]; answered=false; result.className='result'; result.textContent=''; next.hidden=true;
    progress.textContent=`Pregunta ${index+1} de ${questions.length}`; detectorQuestion.textContent=item.q; options.replaceChildren();
    item.a.forEach((answer,i)=>{const button=document.createElement('button');button.className='option';button.textContent=`${String.fromCharCode(65+i)}. ${answer}`;button.addEventListener('click',()=>{
      if(answered)return; answered=true; const correct=i===item.c; if(correct)score++;
      result.className='result show '+(correct?'ok':'bad'); result.textContent=correct?'¡Correcto! Buena decisión para cuidar tu seguridad digital.':`La opción más segura era: ${item.a[item.c]}`; next.textContent=index===questions.length-1?'Ver resultado':'Siguiente pregunta'; next.hidden=false;
    });options.append(button);});
  }
  next.addEventListener('click',()=>{if(index<questions.length-1){index++;render();}else if(next.textContent==='Jugar de nuevo'){index=0;score=0;render();}else{progress.textContent='Juego completado';detectorQuestion.textContent=`Obtuviste ${score} de ${questions.length} respuestas correctas.`;options.replaceChildren();result.className='result show '+(score>=7?'ok':'bad');result.textContent=score>=7?'¡Excelente! Tienes buenos hábitos digitales.':'¡Buen intento! Repasa los consejos y vuelve a probar.';next.textContent='Jugar de nuevo';next.hidden=false;}});
  render();
}
const quiz=document.getElementById('quiz');
if(quiz){
  const buttons=quiz.querySelectorAll('[data-profile]');
  buttons.forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('.profile').forEach(p=>p.classList.remove('show'));
    const p=document.getElementById(btn.dataset.profile);
    if(p)p.classList.add('show');
  }));
}


