import html from "html-literal";

// export default () => html`
//   <nav>
//     <i class="fas fa-bars"></i>
//     <ul class="hidden--mobile nav-links">
//       <li><a href="#index">Home</a></li>
//       <li><a href="#bio">Bio</a></li>
//       <li><a href="#pizza">Pizza</a></li>
//       <li><a href="#order">Order</a></li>
//     </ul>
//   </nav>
// `;

// export default [
//   { title: "Home", text: "Home" },
//   { title: "Bio", text: "Bio" },
//   { title: "Order", text: "Submit a Pizza Order" },
//   { title: "Pizza", text: "See all the Pizzas" },
// ];

// eslint-disable-next-line prettier/prettier
export default (links) => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${links.map(
        // eslint-disable-next-line prettier/prettier
        (el) =>
          `<li><a href="/${el.title}" title="${el.title}" data-navigo>${el.text}</a></li>`
      )}
    </ul>
  </nav>
`;
