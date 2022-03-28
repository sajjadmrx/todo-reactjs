
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import ThemeQuerys from '../common/themeQuerys';

const themeStorage = new ThemeQuerys('theme')


function ToggleTheme() {
    // top-left
    const style = {
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '9999',
        background: '#fff',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 0 5px #ccc',
        fontSize: '14px',
    }
    // handleToggle(false)
    return (
        <div style={style}  >
            <button className="btn btn-primary" onClick={handleToggle}>
                <i className="fa fa-adjust"></i>
            </button>
        </div>
    )
}
function handleToggle(toggle = true) {
    const currentTheme = themeStorage.get()

    let nextTheme = ''
    if (toggle) {
        nextTheme = currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme'
        themeStorage.set(nextTheme)
    } else {
        nextTheme = currentTheme
    }
    if (document.body) {
        document.body.classList?.remove(currentTheme)
        document.body.classList?.toggle(nextTheme)
    }
}
export default ToggleTheme;