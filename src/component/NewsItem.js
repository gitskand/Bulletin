import React, { Component } from 'react'

export default class NewsItem extends Component {


    render() {

        let { title, description, imageUrl, newsUrl, author, date, source } = this.props
        return (
            <>
                <div className='my-4 mx-3'>
                    <div className="card" >

                        <div style={{display:'flex',justifyContent:'flex-end',position:'absolute', right:'0'}}>
                        <span class=" badge rounded-pill bg-danger" style={{left: '90%', zIndex:'1'}}> {source}


                        </span>
                        </div>
                        <img src={!imageUrl ? `https://www.hindustantimes.com/ht-img/img/2023/04/11/1600x900/Viral_Twitter_Noida_High_Rise_Man_1681223539836_1681223540345_1681223540345.jpg` : imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" >{title}... </h5>
                            <p className="card-text "style={{color:'Blue'}}    >{description}...</p>
                            <p className='card-text'><small className='text-muted'>By {!author ? 'UFO' : author} on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm rounded-pill bg-dark"style={{ color:'silver'}}>Read More...</a>
                        </div>
                    </div>
                </div>
            </> 
        )
    }
}
