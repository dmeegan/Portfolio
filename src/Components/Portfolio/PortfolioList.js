import React from 'react';
import PortfolioItem from './PortfolioItem';

function PortfolioList(props) {
    return (
        <div className="portfolioList-container">
            {
                props.portfolio.map( item => (
                    <PortfolioItem 
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        imgSrc={item.imgSrc}
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