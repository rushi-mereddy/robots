import react, { Component } from 'react';
import '../containers/Card.css'

class Card extends Component {
    render(){
        return(
            <div className='text-center mt-5'>
                <div className='card bg-dark w-25 m-auto text-light p-3 rounded shadow-lg'>
                    <img src={`https://robohash.org/${this.props.id}?200x200`} alt='profile' width="100px" className='img-fluid rounded' />
                    <div>
                        <h6 className='mt-3 fs-6'>{this.props.name}</h6>
                        <h6 className='fs-6'>{this.props.email}</h6>
                    </div>
                 </div>
            </div>
        );
    }
}


export default Card;