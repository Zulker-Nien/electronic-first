import "./styles.scss";
import { navigationBar } from "./navigation/navigationBar.js";

document.querySelector("#app").innerHTML = `
  <div>
    <div class="headerSection">
      <div class="navigationContainer">
        <div class="logo">
        <img src="./public/ef_logo.webp"/></div>
        <div class="navigation">
          <nav class="topNavigation">
          <ul>
          <li>Trending</li>
          <li>Pre-orders</li>
          <li>Upcoming</li>
          <li>Support 24/7</li>
          </ul></nav>
          <nav class="bottomNavigation" id="navigationBar">Bottom Nav</nav>
        </div>
        <div class="topButton">
          <img src="./public/cart.webp"/>
          <img src="./public/user.webp"/>
        </div>
      </div>
      <div class="heroTextContainer">
          <p class="countdown">In 15 Days</p>
          <h2>Nintendo- Before it was cool</h2>
          <div class="priceRow">
            <div class="discountTag">
              <p>-26%</p>
            </div>
            <h1 class="heroPrice">
              744.4€
            </h1>
          </div>
      </div>
    </div>
    <div class="trendingSection">
      <div class="trendingInformation">
        <h2>Trending</h2>
        <button>View All</button>
      </div>
      <div class="cardContainer">
        <div class="cardWrapper">
          <div class="card card-0">
            <div class="discountTag">
              <p>-26%</p>
            </div>
          </div>
          <div class="cardInfo">
            <p>Sengoku Dynasty</p>
            <h3>19.99€</h3>
          </div>
        </div>
        <div class="cardWrapper">
          <div class="card card-1">
            <div class="discountTag">
              <p>-23%</p>
            </div>
          </div>
          <div class="cardInfo">
            <p>The Sims 4: Horse Ranch</p>
            <h3>30.99€</h3>
          </div>
        </div>
        <div class="cardWrapper">
          <div class="card card-2">
            <div class="discountTag">
              <p>-30%</p>    
            </div>
          </div>
          <div class="cardInfo">
            <p>Remnant 2</p>
            <h3>34.89€</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

navigationBar();
