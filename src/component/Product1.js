import React from "react";

class Product1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: "",
      product: [
        // Your product data
      ],
    };
  }

  handleUserInput = (filterText) => {
    this.setState({ filterText: filterText });
  };

  handleRowDel = (product) => {
    const updatedProduct = this.state.product.filter((p) => p.id !== product.id);
    this.setState({ product: updatedProduct });
  };

  handleAddEvent = () => {
    const id = new Date().getTime() + Math.floor(Math.random() * 999999);
    const newProduct = {
      id: id.toString(36),
      category: "",
      price: "",
      qty: "",
      name: "",
    };

    this.setState((prevState) => ({
      product: [...prevState.product, newProduct],
    }));
  };

  handleProductTableUpdate = (evt) => {
    const { id, name, value } = evt.target;
    const updatedProduct = this.state.product.map((p) =>
      p.id === id ? { ...p, [name]: value } : p
    );
    this.setState({ product: updatedProduct });
  };

  render() {
    return (
      <div>
        {/* SearchBar component (assuming it's defined) */}
        <ProductTable
          OnProductTableUpdate={this.handleProductTableUpdate}
          onRowAdd={this.handleAddEvent}
          onRowDel={this.handleRowDel}
          product={this.state.product}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const { OnProductTableUpdate, onRowDel, filterText, product } = this.props;

    const filteredProduct = product.filter((p) =>
      p.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
      <div>
        <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">
          Add
        </button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredProduct.map((p) => (
              <ProductRow
                OnProductTableUpdate={OnProductTableUpdate}
                product={p}
                onDelEvent={onRowDel}
                key={p.id}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

class ProductRow extends React.Component {
  onDelEvent = () => {
    this.props.onDelEvent(this.props.product);
  };

  render() {
    return (
      <tr className="eachRow">
        {/* EditableCell components (assuming it's defined) */}
        <td className="del-cell">
          <input type="button" onClick={this.onDelEvent} value="X" className="del-btn" />
        </td>
      </tr>
    );
  }
}

export default Product1;
