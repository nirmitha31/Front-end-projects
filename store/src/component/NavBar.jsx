import { Link } from "react-router-dom";
import logo from "../assets/apple.svg";
import logoSearch from "../assets/search.svg";

function NavBar() {
  return (
    <div className="navbar">
      <div className="subnav">
        <Link to="/home">
          <img src={logo} className="apple-logo" />
        </Link>
      </div>

      <div className="subnav">
        <button className="subnavbtn">
          <Link to="/store">
            {" "}
            Store <i className="fa fa-caret-down"></i>
          </Link>
        </button>
        <div className="subnav-content">
          <div className="sub-navigation">
            <div className="sub-navigation-link">
              <p>Shop</p>
              <a className="navigation-section-one" href="#company">
                Shop Gifts
              </a>
              <a className="navigation-section-one" href="#team">
                Mac
              </a>
              <a className="navigation-section-one" href="#careers">
                iPad
              </a>
              <a className="navigation-section-one" href="#careers">
                iPhone
              </a>
              <a className="navigation-section-one" href="#careers">
                Apple Watch
              </a>
              <a className="navigation-section-one" href="#careers">
                AirPods
              </a>
              <a className="navigation-section-one" href="#careers">
                Accessories
              </a>
            </div>

            <div className="sub-navigation-link">
              <p>Quick Links</p>
              <a className="navigation-section-two" href="#company">
                Find a Store
              </a>
              <a className="navigation-section-two" href="#team">
                Order Status
              </a>
              <a className="navigation-section-two" href="#careers">
                Apple Trade in
              </a>
              <a className="navigation-section-two" href="#careers">
                Ways to Buy
              </a>
              <a className="navigation-section-two" href="#careers">
                Personal Setup
              </a>
            </div>

            <div className="sub-navigation-link">
              <p>Shop Special Stores</p>
              <a className="navigation-section-two" href="#company">
                Education
              </a>
              <a className="navigation-section-two" href="#team">
                Business
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="subnav">
        <button className="subnavbtn">
          <Link to="/iphone">
            iPhone <i className="fa fa-caret-down"></i>
          </Link>
        </button>
        <div className="subnav-content">
          <div className="sub-navigation">
            <div className="sub-navigation-link">
              <p>Shop</p>
              <a className="navigation-section-one" href="#company">
                Shop Gifts
              </a>
              <a className="navigation-section-one" href="#team">
                Mac
              </a>
              <a className="navigation-section-one" href="#careers">
                iPad
              </a>
              <a className="navigation-section-one" href="#careers">
                iPhone
              </a>
              <a className="navigation-section-one" href="#careers">
                Apple Watch
              </a>
              <a className="navigation-section-one" href="#careers">
                AirPods
              </a>
              <a className="navigation-section-one" href="#careers">
                Accessories
              </a>
            </div>

            <div className="sub-navigation-link">
              <p>Quick Links</p>
              <a className="navigation-section-two" href="#company">
                Find a Store
              </a>
              <a className="navigation-section-two" href="#team">
                Order Status
              </a>
              <a className="navigation-section-two" href="#careers">
                Apple Trade in
              </a>
              <a className="navigation-section-two" href="#careers">
                Ways to Buy
              </a>
              <a className="navigation-section-two" href="#careers">
                Personal Setup
              </a>
            </div>

            <div className="sub-navigation-link">
              <p>Shop Special Stores</p>
              <a className="navigation-section-two" href="#company">
                Education
              </a>
              <a className="navigation-section-two" href="#team">
                Business
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="subnav">
        <button className="subnavbtn">
          <Link to="/mac">
            Mac <i className="fa fa-caret-down"></i>
          </Link>
        </button>
        <div className="subnav-content">
          <div className="sub-navigation">
            <div className="sub-navigation-link">
              <p>Shop</p>
              <a className="navigation-section-one" href="#company">
                Shop Gifts
              </a>
              <a className="navigation-section-one" href="#team">
                Mac
              </a>
              <a className="navigation-section-one" href="#careers">
                iPad
              </a>
              <a className="navigation-section-one" href="#careers">
                iPhone
              </a>
              <a className="navigation-section-one" href="#careers">
                Apple Watch
              </a>
              <a className="navigation-section-one" href="#careers">
                AirPods
              </a>
              <a className="navigation-section-one" href="#careers">
                Accessories
              </a>
            </div>

            <div className="sub-navigation-link">
              <p>Quick Links</p>
              <a className="navigation-section-two" href="#company">
                Find a Store
              </a>
              <a className="navigation-section-two" href="#team">
                Order Status
              </a>
              <a className="navigation-section-two" href="#careers">
                Apple Trade in
              </a>
              <a className="navigation-section-two" href="#careers">
                Ways to Buy
              </a>
              <a className="navigation-section-two" href="#careers">
                Personal Setup
              </a>
            </div>

            <div className="sub-navigation-link">
              <p>Shop Special Stores</p>
              <a className="navigation-section-two" href="#company">
                Education
              </a>
              <a className="navigation-section-two" href="#team">
                Business
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="subnav">
        <button className="subnavbtn">
          Partners <i className="fa fa-caret-down"></i>
        </button>
        <div className="subnav-content">
          <div className="sub-navigation">
            <div className="sub-navigation-link">
              <p>Shop</p>
              <a className="navigation-section-one" href="#company">
                Shop Gifts
              </a>
              <a className="navigation-section-one" href="#team">
                Mac
              </a>
              <a className="navigation-section-one" href="#careers">
                iPad
              </a>
              <a className="navigation-section-one" href="#careers">
                iPhone
              </a>
              <a className="navigation-section-one" href="#careers">
                Apple Watch
              </a>
              <a className="navigation-section-one" href="#careers">
                AirPods
              </a>
              <a className="navigation-section-one" href="#careers">
                Accessories
              </a>
            </div>

            <div className="sub-navigation-link">
              <p>Quick Links</p>
              <a className="navigation-section-two" href="#company">
                Find a Store
              </a>
              <a className="navigation-section-two" href="#team">
                Order Status
              </a>
              <a className="navigation-section-two" href="#careers">
                Apple Trade in
              </a>
              <a className="navigation-section-two" href="#careers">
                Ways to Buy
              </a>
              <a className="navigation-section-two" href="#careers">
                Personal Setup
              </a>
            </div>

            <div className="sub-navigation-link">
              <p>Shop Special Stores</p>
              <a className="navigation-section-two" href="#company">
                Education
              </a>
              <a className="navigation-section-two" href="#team">
                Business
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="subnav">
        <button className="subnavbtn">
          iPad <i className="fa fa-caret-down"></i>
        </button>
        <div className="subnav-content">
          <div className="sub-navigation">
            <div className="sub-navigation-link">
              <p>Shop</p>
              <a className="navigation-section-one" href="#company">
                Shop Gifts
              </a>
              <a className="navigation-section-one" href="#team">
                Mac
              </a>
              <a className="navigation-section-one" href="#careers">
                iPad
              </a>
              <a className="navigation-section-one" href="#careers">
                iPhone
              </a>
              <a className="navigation-section-one" href="#careers">
                Apple Watch
              </a>
              <a className="navigation-section-one" href="#careers">
                AirPods
              </a>
              <a className="navigation-section-one" href="#careers">
                Accessories
              </a>
            </div>

            <div className="sub-navigation-link">
              <p>Quick Links</p>
              <a className="navigation-section-two" href="#company">
                Find a Store
              </a>
              <a className="navigation-section-two" href="#team">
                Order Status
              </a>
              <a className="navigation-section-two" href="#careers">
                Apple Trade in
              </a>
              <a className="navigation-section-two" href="#careers">
                Ways to Buy
              </a>
              <a className="navigation-section-two" href="#careers">
                Personal Setup
              </a>
            </div>

            <div className="sub-navigation-link">
              <p>Shop Special Stores</p>
              <a className="navigation-section-two" href="#company">
                Education
              </a>
              <a className="navigation-section-two" href="#team">
                Business
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="subnav">
        <button className="subnavbtn">
          Watch <i className="fa fa-caret-down"></i>
        </button>
        <div className="subnav-content">
          <div className="sub-navigation">
            <div className="sub-navigation-link">
              <p>Shop</p>
              <a className="navigation-section-one" href="#company">
                Shop Gifts
              </a>
              <a className="navigation-section-one" href="#team">
                Mac
              </a>
              <a className="navigation-section-one" href="#careers">
                iPad
              </a>
              <a className="navigation-section-one" href="#careers">
                iPhone
              </a>
              <a className="navigation-section-one" href="#careers">
                Apple Watch
              </a>
              <a className="navigation-section-one" href="#careers">
                AirPods
              </a>
              <a className="navigation-section-one" href="#careers">
                Accessories
              </a>
            </div>

            <div className="sub-navigation-link">
              <p>Quick Links</p>
              <a className="navigation-section-two" href="#company">
                Find a Store
              </a>
              <a className="navigation-section-two" href="#team">
                Order Status
              </a>
              <a className="navigation-section-two" href="#careers">
                Apple Trade in
              </a>
              <a className="navigation-section-two" href="#careers">
                Ways to Buy
              </a>
              <a className="navigation-section-two" href="#careers">
                Personal Setup
              </a>
            </div>

            <div className="sub-navigation-link">
              <p>Shop Special Stores</p>
              <a className="navigation-section-two" href="#company">
                Education
              </a>
              <a className="navigation-section-two" href="#team">
                Business
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="subnav">
        <button className="subnavbtn">
          iPad <i className="fa fa-caret-down"></i>
        </button>
        <div className="subnav-content">
          <div className="sub-navigation">
            <div className="sub-navigation-link">
              <p>Shop</p>
              <a className="navigation-section-one" href="#company">
                Shop Gifts
              </a>
              <a className="navigation-section-one" href="#team">
                Mac
              </a>
              <a className="navigation-section-one" href="#careers">
                iPad
              </a>
              <a className="navigation-section-one" href="#careers">
                iPhone
              </a>
              <a className="navigation-section-one" href="#careers">
                Apple Watch
              </a>
              <a className="navigation-section-one" href="#careers">
                AirPods
              </a>
              <a className="navigation-section-one" href="#careers">
                Accessories
              </a>
            </div>

            <div className="sub-navigation-link">
              <p>Quick Links</p>
              <a className="navigation-section-two" href="#company">
                Find a Store
              </a>
              <a className="navigation-section-two" href="#team">
                Order Status
              </a>
              <a className="navigation-section-two" href="#careers">
                Apple Trade in
              </a>
              <a className="navigation-section-two" href="#careers">
                Ways to Buy
              </a>
              <a className="navigation-section-two" href="#careers">
                Personal Setup
              </a>
            </div>

            <div className="sub-navigation-link">
              <p>Shop Special Stores</p>
              <a className="navigation-section-two" href="#company">
                Education
              </a>
              <a className="navigation-section-two" href="#team">
                Business
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="subnav">
        <button className="subnavbtn">
          iPhone <i className="fa fa-caret-down"></i>
        </button>
        <div className="subnav-content">
          <div className="sub-navigation">
            <div className="sub-navigation-link">
              <p>Shop</p>
              <a className="navigation-section-one" href="#company">
                Shop Gifts
              </a>
              <a className="navigation-section-one" href="#team">
                Mac
              </a>
              <a className="navigation-section-one" href="#careers">
                iPad
              </a>
              <a className="navigation-section-one" href="#careers">
                iPhone
              </a>
              <a className="navigation-section-one" href="#careers">
                Apple Watch
              </a>
              <a className="navigation-section-one" href="#careers">
                AirPods
              </a>
              <a className="navigation-section-one" href="#careers">
                Accessories
              </a>
            </div>

            <div className="sub-navigation-link">
              <p>Quick Links</p>
              <a className="navigation-section-two" href="#company">
                Find a Store
              </a>
              <a className="navigation-section-two" href="#team">
                Order Status
              </a>
              <a className="navigation-section-two" href="#careers">
                Apple Trade in
              </a>
              <a className="navigation-section-two" href="#careers">
                Ways to Buy
              </a>
              <a className="navigation-section-two" href="#careers">
                Personal Setup
              </a>
            </div>

            <div className="sub-navigation-link">
              <p>Shop Special Stores</p>
              <a className="navigation-section-two" href="#company">
                Education
              </a>
              <a className="navigation-section-two" href="#team">
                Business
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="subnav">
        <button className="subnavbtn">
          Watch <i className="fa fa-caret-down"></i>
        </button>

        <div className="subnav-content">
          <div className="sub-navigation">
            <div className="sub-navigation-link">
              <p>Shop</p>
              <a className="navigation-section-one" href="#company">
                Shop Gifts
              </a>
              <a className="navigation-section-one" href="#team">
                Mac
              </a>
              <a className="navigation-section-one" href="#careers">
                iPad
              </a>
              <a className="navigation-section-one" href="#careers">
                iPhone
              </a>
              <a className="navigation-section-one" href="#careers">
                Apple Watch
              </a>
              <a className="navigation-section-one" href="#careers">
                AirPods
              </a>
              <a className="navigation-section-one" href="#careers">
                Accessories
              </a>
            </div>

            <div className="sub-navigation-link">
              <p>Quick Links</p>
              <a className="navigation-section-two" href="#company">
                Find a Store
              </a>
              <a className="navigation-section-two" href="#team">
                Order Status
              </a>
              <a className="navigation-section-two" href="#careers">
                Apple Trade in
              </a>
              <a className="navigation-section-two" href="#careers">
                Ways to Buy
              </a>
              <a className="navigation-section-two" href="#careers">
                Personal Setup
              </a>
            </div>

            <div className="sub-navigation-link">
              <p>Shop Special Stores</p>
              <a className="navigation-section-two" href="#company">
                Education
              </a>
              <a className="navigation-section-two" href="#team">
                Business
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="subnav">
        <img src={logoSearch} className="apple-logo" />
      </div>
    </div>
  );
}

export default NavBar;
