import PropTypes from 'prop-types'
import Button from './Button'


const Header = () => {
    const onClick = () => {
        console.log('Click!');
    }
    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button color='#0275d8' text='Add' onClick = {onClick} />
        </header>
    )
}

Header.defaultProps = {

}

Header.propTypes = {

}

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'blue'
// }

export default Header
