import Atropos from 'atropos/react';
import './AtroposComponent.scss'

import { images } from '../../constants'

const AtroposComponent = () => {
    return (
        <div>
            <Atropos className='my-atropos'
                activeOffset={40}
                shadow={false}
            >
                <img src={images.avengers} data-atropos-offset="-6" alt='cool-img' />
                <img src={images.tony} data-atropos-offset="-1" alt='cool-img' />
                <img src={images.cap} data-atropos-offset="0" alt='cool-img' />
                <img src={images.spidy} data-atropos-offset="3" alt='cool-img' />
                <img src={images.thor} data-atropos-offset="2" alt='cool-img' />
                <img src={images.panther} data-atropos-offset="3" alt='cool-img' />
                <img src={images.marvel} data-atropos-offset="5" alt='cool-img' />
            </Atropos>
        </div>
    )
};

export default AtroposComponent;