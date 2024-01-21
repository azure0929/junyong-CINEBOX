import { Component } from "../core/core";

export default class Header extends Component {
  constructor() {
    // tagname을 header로 하여 a 태그를 활용한 Home, Search, Movie로 구성
    super({
      tagName: "header",
      state: {
        menus: [
          {
            name: "Home",
            href: "#/",
          },
          {
            name: "Search",
            href: "#/search",
          },
        ],
      },
    });
    window.addEventListener("popstate", () => {
      this.render();
    });
  }
  render() {
    // a 태그를 활용하여 #/으로 이동이 가능하도록 구성, nav 태그 안에 ul 태그를 활용
    this.el.innerHTML = /* html */ `
      <div class="inner">
        <div class="logo">
          <a 
            href="#/">
            <span>J'S CINE</span>BOX
          </a>
        </div>
        <div class="gnb">
          <ul>
            ${this.state.menus
              .map((menu) => {
                const href = menu.href.split("?")[0];
                const hash = location.hash.split("?")[0];
                const isActive = href === hash;
                return /* html */ `
                <!-- li에 active 시 after css 적용 -->
                <li class="${isActive ? "active" : ""}">
                  <!-- a 태그에 active 시 각각 페이지로 이동 -->
                  <a 
                    class="${isActive ? "active" : ""}" 
                    href="${menu.href}">
                    ${menu.name}
                  </a>
                </li>
              `;
              })
              // ul의 모든 요소를 연결해 하나의 문자열로 연결
              .join("")}
          </ul>
        </div>
      </div>
    `;
  }
}
