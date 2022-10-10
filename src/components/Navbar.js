import "../App.css"
import { Link } from 'react-router-dom'


const Navbar = () => {

  return (
    <>
      <header className='header'>
        <section className="business-section">
          <p className="business-name"> My business <span className="new-business-logo"> <i class="fa fa-pencil" /></span> </p>

        </section>

        <section className='pre-nav'>
          <p className='business'>Add Business</p>

          <section className="boo">
            <span className="question-logo">
              <i class="fa fa-question-circle-o" />
            </span>

            <span className='user-logo'>
              <i class="fa fa-user-circle" />
            </span>
          </section>
        </section>

        <nav className='nav'>
          <ul className=' navbar'>
            <li className='nav-items'>
              <Link to='/' className='nav-links'>CASHBOOK</Link>
            </li>

            <li className='nav-items'>
              <Link to='/debts' className='nav-links'>DEBTS</Link>
            </li>

            <li className='nav-items'>
              <Link to='/invoice' className='nav-links'>INVOICE</Link>
            </li>
          </ul>
        </nav>
      </header>


    </>
  )
}

export default Navbar
