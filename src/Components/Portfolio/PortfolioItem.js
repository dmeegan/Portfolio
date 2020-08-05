import React from 'react';

function PortfolioItem(props) {
    return (
        <article className="portfolioItem">
            <div className="portfolioItem-header">
                <img className="portfolioItem-image" src={props.imgSrc}></img>
                <h3 className="portfolioItem-title">{props.title}</h3>
            </div>
            <div className="portfolioItem-info">
                <ul className="portfolioItem-toolsList">
                    {
                        props.toolsList.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
                <p className="portfolioItem-description">{props.description}</p>
            </div>
        </article>
    )
}

export default PortfolioItem;