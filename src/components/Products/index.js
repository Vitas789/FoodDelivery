import data from '../../data/popular.json';

const Popular = () => {
    return (
        <section className="products">
            <h2 className="products__title">Популярное</h2>
            <div className="product">
                {data.length > 0 &&
                    data.map((item, index) => (
                        <a href="/#" key={index} className="product__item">
                            <img src={item.src} alt={item.title} />
                            <div className="product__body">
                                <div className="product__content">
                                    <p className="product__title">
                                        <b>{item.title}</b>
                                    </p>
                                    <p className="product__weight">
                                        {item.weight}
                                    </p>
                                    <p className="product__description">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="product__footer">
                                    <p className="product__price">
                                        {item.price}
                                    </p>
                                    <div className="product__button">
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
            </div>
        </section>
    );
};

export default Popular;
