import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h3>About Us</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Quo aut magni perferendis repellat rerum assumenda facere
                            voluptatibus.
                        </p>
                    </div>
                    <div className='col-md-4'>

                        <h3>
                            <a href='https://github.com/sajjadmrx/todo-reactjs'>
                                <span className='fa fa-github'></span> GitHub Repository
                            </a>
                        </h3>

                    </div>
                    <div className='col-md-4'>
                        <h3>Follow Us</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Quo aut magni perferendis repellat rerum assumenda facere
                            voluptatibus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;