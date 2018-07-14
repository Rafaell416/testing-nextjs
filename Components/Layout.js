import Header from './Header'

const Layout = (props) => (
  <div style={styles.layoutStyle}>
    <Header />
    {props.children}
  </div>
)

const styles = {
  layoutStyle: {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
  }
}

export default Layout
