import React from 'react';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      category: "SALT",
      name: "Margherita Pizza",
      originalPrice: "$40.000",
      salePrice: "$2.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQog0YPFynxsZ3JQNeL_cTf3LjqNBaCSAIyfA&s",
      onSale: true
    },
    {
      id: 2,
      category: "NTA",
      name: "Mushroom Pizza",
      price: "$25.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHTsLrR6Dn-QFBtzkz8W7Lbp4vVdZjRWFEMw&s",
      onSale: false
    },
    {
      id: 3,
      category: "Coca-Cola",
      name: "Hawaiian Pizza",
      price: "$30.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn_RWBXp0J01qiNjHBmiszIavCowv48T-RjQ&s",
      onSale: false
    },
    {
      id: 4,
      category: "MALES",
      name: "Pesto Pizza",
      originalPrice: "$40.000",
      salePrice: "$0.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfbbql7Bcy9I0JThNXfFx_rBtrEWOu7fmDdA&s",
      onSale: true
    }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center mb-4">Our Menu</h3>
            
            <div className="row">
              {menuItems.map((item) => (
                <div key={item.id} className="col-md-3 mb-4">
                  <div className="card h-100">
                    <img 
                      src={item.image} 
                      className="card-img-top" 
                      alt={item.name}
                      style={{height: '200px', objectFit: 'cover'}}
                    />
                    <div className="card-body">
                      <h6 className="card-title text-muted">{item.category}</h6>
                      <h5 className="card-subtitle mb-2">{item.name}</h5>
                      <p className="card-text">
                        {item.onSale ? (
                          <>
                            <span className="text-muted text-decoration-line-through">{item.originalPrice}</span>
                            <span className="text-danger ms-2 fw-bold">{item.salePrice}</span>
                          </>
                        ) : (
                          <span className="fw-bold">{item.price}</span>
                        )}
                      </p>
                      <button className="btn btn-primary w-100">Buy</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;