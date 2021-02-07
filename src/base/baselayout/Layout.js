import Nav from './Nav'
import Button from "../BaseButton"

function Layout({pageProps, children }) {
  return (
    <>
      <Nav />
      <div className="row justify-contnet-center align-items-center" stylr={{minHeight: "100vh"}}>
        <main>
          {children}
          <Button {...pageProps}>Meat</Button>
        </main>
      </div>  
    </>
  )
}

export default Layout