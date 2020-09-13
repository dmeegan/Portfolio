import React from 'react';
import PortfolioItem from './PortfolioItem';

function PortfolioList(props) {
    return (
        <section id='portfolio-section' className="portfolio-section">
            <h2>Portfolio of Work</h2>
            <div className="portfolioList-container-col">
                <div className="portfolioList-container-row">
                    {
                        props.portfolio.map(item => (
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
            </div>
        </section>
    )
}

export default PortfolioList;