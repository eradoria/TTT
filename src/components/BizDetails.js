import React from 'react'
import { useParams } from 'react-router'
import Map from './Map';

const BizDetails = (props) => {
    console.log('props being called',props.listings);
	let id = useParams();
	console.log(id);
    const biz = props.listings.find(b => b.id == id.id)

    return (
        <div className='biz-container'>
            <div className="biz">
				<h1>{biz.Player}</h1>
				<h3>{biz.Rank}</h3>
			</div>

            <Map />
        </div>
    )
}

export default BizDetails