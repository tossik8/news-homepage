import "./css/ArticleNews.css";

const ArticleNews = () => {
    return (
        <section className="news-section">
            <h2 className="new-heading">New</h2>
            <article className="news-article">
                <h3 className="news-header">Hydrogen VS Electric Cars</h3>
                <p className="news-paragraph">Will hydrogen-fueled cars ever catch up to EVs?</p>
            </article>
            <div className="separator"></div>
            <article className="news-article">
                <h3 className="news-header">The Downsides of AI Artistry</h3>
                <p className="news-paragraph">What are the possible adverse effects of on-demand AI image generation?</p>
            </article>
            <div className="separator"></div>
            <article className="news-article">
                <h3 className="news-header">Is VC Funding Drying Up?</h3>
                <p className="news-paragraph">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </article>
        </section>
     );
}

export default ArticleNews;
