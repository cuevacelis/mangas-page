import Footer from './Footer'
import Header from './Header'

function Layout(props) {
  return (
    <>
      <Header title={props.title} />
      <main className={props.className}>{props.children}</main>
      <Footer />
    </>
  )
}
export default Layout
