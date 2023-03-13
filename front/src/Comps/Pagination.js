import React, { Component } from "react";

export default class UpdateTrainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(this.props.liste.length / this.props.listePerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    let paginationNumbers = [];

    if (this.props.liste.length) {
      let showMax = this.props.showMax;
      let endPage;
      let startPage;

      if (pageNumbers <= showMax) {
        startPage = 1;
        endPage = pageNumbers.length;
      } else {
        startPage = this.props.currentPage;
        if (
          startPage != pageNumbers.length &&
          startPage + 1 != pageNumbers.length
        ) {
          endPage = this.props.currentPage + showMax - 1;
        } else {
          endPage = pageNumbers.length;
        }
      }
      for (let i = startPage; i <= endPage; i++) {
        paginationNumbers.push(i);
      }
    }
    return (
      <div className="col-md-6 col-md-offset-3">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a
                class="page-link"
                href="#"
                aria-label="Previous"
                onClick={this.props.handleClick.bind(
                  this,
                  this.props.currentPage,
                  "prev"
                )}
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {paginationNumbers.map((num) => (
              <li
                class="page-item"
                key={num}
                id={num}
                onClick={this.props.handleClick.bind(this, num, "normale")}
              >
                <a class="page-link" href="#">
                  {num}
                </a>
              </li>
            ))}

            <li class="page-item">
              <a
                class="page-link"
                onClick={this.props.handleClick.bind(
                  this,
                  this.props.currentPage,
                  "next"
                )}
                href="#"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>{" "}
      </div>
    );
  }
}