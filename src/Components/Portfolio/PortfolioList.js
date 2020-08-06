import React from 'react';
import PortfolioItem from './PortfolioItem';

function PortfolioList(props) {
    return (
        <div id="portfolio-section" className="portfolioList-container">
            {
                props.portfolio.map( item => (
                    <PortfolioItem 
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        imgSrc={item.imgSrc}
                        imgAlt={item.imgAlt}
                        toolsList={item.toolsList}
                        repoLink={item.repoLink}
                        liveSiteLink={item.liveSiteLink}
                    />
                )
                )
            }
        </div>
    )
}

export default PortfolioList;