function MenuPrinter({name, price, image}) {
    return (  
        <div className="menuItem">
            <div className="image" style={{backgroundImage : `url(${image})`}}></div>
            <h1>{name}</h1>
            <p>${price}</p>
        </div>
    );
}

export default MenuPrinter;