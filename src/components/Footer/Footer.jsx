import localFont from 'next/font/local'

const microgramma = localFont({
  src: [
    {
      path: '../../../public/fonts/microgramma-bold.otf'
    },
  ],
})

const Footer = () => {
  return (
    <section className='footer-section'>
      <p className='footer-p'>Made by 
        <span className={`${microgramma.className} footer-span`} >
          <a className='footer-a' href='https://github.com/alessandrovaru'>
            Alessandrovaru
            </a>
          </span>
        </p>
    </section>
  )
}

export default Footer