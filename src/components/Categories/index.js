import data from '../../data/categories.json';

const Categories = () => {
    return (
        <section className="categories">
            <div className="categories__list">
                {data.length > 0 &&
                    data.map((item, index) => (
                        <div key={index} className="categories__item">
                            <a
                             href="/#"
                             className="categories__item-wrapper"
                             style={{
                                backgroundImage: `url('${item.src}')`
                             }}
                             >
                                <span className="categories__item-label">
                                    {item.title}
                                </span>
                            </a>
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default Categories;
