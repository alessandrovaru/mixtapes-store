
const Alert = (props) => {
  return (
    <div className='alert-container'>
      <h2>Atención</h2>
      <p>Al aceptar, serás redirigido a un link aleatorio relacionado al trabajo de Carl Gustav Jung o una canción aleatoria. - By accepting, you will be redirected to a random link related to the work of Carl Gustav Jung or a random song.</p>
      <p className='small'>Puedes volver luego y hacer click otra vez para obtener otra experiencia. - You can come back later and click again to get another experience.</p>
      <button className='mandala-poem-button' onClick={()=> props.setAcceptedLink(true)}>Aceptar</button>
      <button className='mandala-poem-button' onClick={()=> props.setMandalaClicked(false)}>Cancelar</button>
    </div>
  ) 
}

export { Alert }