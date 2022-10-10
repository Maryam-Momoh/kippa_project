import "../App.css"

const Cashbook = () => {
  return (
    <div>
      <section className="records-section">
        <div className="balance">
          <div className="total-balance">
            <p className="balance-figure">$ 0.00</p>
            <p className="tb">Total Balance</p>
          </div>

          <div className="todays-balance">
            <p className="todays-figure balance-figure">$ 0.00</p>
            <p className="tb">Today's balance</p>
          </div>
        </div>

        <div className="records">
          <p>See All Your Records</p>
        </div>
      </section>

      <section className="transactions">
        <div className="transaction-head">
          <p className="transaction">Transactions</p>
          <p className="filter"> <i class="fa fa-filter" />Filter</p>
        </div>

        <div className="transaction-body">
          <p className="transaction-record">Record A Transaction</p>
          <p>Your transactions will display here when you add them.</p>
        </div>
      </section>

      <div className="button">
        <button className="btn money-out"><i class="fa fa-minus-circle" />MONEY OUT</button>
        <button className="btn money-in"><i class="fa fa-plus-circle" />MONEY IN</button>
      </div>

      {/* FOOTER */}

      <section className="footer-container">

        <div className="bookkeeping-section">
          <i class="fa fa-sticky-note-o" />
          <p className="book">Bookkeeping</p>
        </div>

        <div className="inventory-section">
          <i class="fa fa-pencil-square-o" />
          <p className="inventory">Inventory</p>
        </div>

        <div className="money-section">
          <i class="fa fa-credit-card" />
          <p className="money">Money</p>
        </div>

        <div className="more-section">
          <i class="fa fa-ellipsis-h" />
          <p className="more">More</p>
        </div>

      </section>
    </div>
  )
}

export default Cashbook
