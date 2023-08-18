import "./nav.scss";
import { updateDropdownContent as updateDropdownContentPC } from "./nav_pc.js";

const dropdownContents = {
  pc: updateDropdownContentPC,
  playstation: "",
  xbox: "",
  nintendo: "",
};

export const navigationBar = () => {
  const navbarContainer = document.querySelector("#navigationBar");

  navbarContainer.innerHTML = `
    <div class="navbarWrapper">
      <ul class="navbarContainer" id="navbarContainer">
        <li class="dropdown" data-dropdown="pc">
          <div class="dropdown-trigger">
            <img src="./public/pc.webp"/>
            <p>PC</p>
            <i class="arrow down"></i>
          </div>
        </li>
        <li class="dropdown" data-dropdown="playstation">
          <div class="dropdown-trigger">
            <img src="./public/ps.webp"/>
            <p>Playstation</p>
            <i class="arrow down"></i>
          </div>
        </li>
        <li class="dropdown" data-dropdown="xbox">
          <div class="dropdown-trigger">
            <img src="./public/xbox.webp"/>
            <p>Xbox</p>
            <i class="arrow down"></i>
          </div>
        </li>
        <li class="dropdown" data-dropdown="nintendo">
          <div class="dropdown-trigger">
            <img src="./public/nintendo.webp"/>
            <p>Nintendo</p>
            <i class="arrow down"></i>
          </div>
        </li>
        <div class="searchBar">
          <img src="./public/search.webp"/>
        </div>
      </ul>
      <div id="dropdownMenu"/>
    </div>
  `;

  const dropdownMenu = document.getElementById("dropdownMenu");
  const navItems = navbarContainer.querySelectorAll(
    ".navbarContainer li.dropdown"
  );

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const dropdownKey = item.getAttribute("data-dropdown");

      item.classList.toggle("active");

      // Update the content of the dropdown
      dropdownMenu.innerHTML = dropdownContents[dropdownKey];

      if (item.classList.contains("active")) {
        dropdownMenu.style.visibility = "visible";
        dropdownMenu.style.transform = "translateY(2vh)";
        dropdownMenu.style.transition = "0.3s transform";
      } else {
        dropdownMenu.style.visibility = "hidden";
        dropdownMenu.style.transform = "translateY(0vh)";
        dropdownMenu.style.transition = "0.3s transform";
      }

      navItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
    });
  });

  const searchBar = document.querySelector(".searchBar");

  searchBar.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the click from bubbling to the dropdown item
    navbarContainer.innerHTML = ""; // Clear existing content

    const searchForm = document.createElement("form");
    searchForm.id = "searchForm"; // Assign an ID to the form for easy targeting
    searchForm.innerHTML = `
      <div class="searchContainer">
        <div class="searchWrapper">
          <input type="text" id="searchInput" placeholder="Minecraft, RPG, multiplayer..."/>
          <button type="submit" class="btn btn-primary">Search</button>
         
        </div>
      </div>
    `;
    navbarContainer.appendChild(searchForm);

    const searchInput = searchForm.querySelector("#searchInput");
    searchInput.focus();
  });
};
