import React from 'react';
import './Portfolio.css';

function PortfolioItem(props) {
    return (
        <article className="portfolioItem">
            <div className="portfolioItem-header">
                <img className="portfolioItem-image" alt={props.imgAlt} src={props.imgSrc}></img>
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
                <div className="portfolioItem-description">{props.description}</div>
                <div className="portfolioItem-links-container">
                    <a className="portfolioItem-links" href={props.liveSiteLink}> Live Site </a>
                    <a className="portfolioItem-links" href={props.repoLink}> Repo </a>
                </div>
            </div>
        </article>
    )
}

export default PortfolioItem;