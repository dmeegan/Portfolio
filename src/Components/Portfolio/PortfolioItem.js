import React from 'react';
import './Portfolio.css';

function PortfolioItem(props) {
    return (
        <article className={props.role === 'Author' ? "portfolioItem" : "portfolioItem portfolioItem-contributor"}>
            <div className="portfolioItem-header">
                <div className="portfolioItem-image-container">
                    <h2 className="portfolioItem-role">{props.role}</h2>
                    <img className="portfolioItem-image" alt={props.imgAlt} src={props.imgSrc}></img>
                </div>
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
                    <a className="portfolioItem-link-secondary" href={props.repoLink}> Repo </a>
                    <a className="portfolioItem-link-primary" href={props.liveSiteLink}> Live Site </a>
                </div>
            </div>
        </article>
    )
}

export default PortfolioItem;