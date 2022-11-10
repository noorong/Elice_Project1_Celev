const body = document.querySelector(".body");

window.addEventListener("load", () =>{
  console.log(123);
  body.insertAdjacentHTML(
    "afterBegin",
    `
    <header class="header">
      <div class="header_logo">
        <a href="/">
          Ce1ev.
        </a>
      </div>
      <ul class="search">
        <li>
          <input type="text" placeholder="검색어를 입력하세요." class="header_search" id="text" />
          <button type="button">
            <i class="fa fa-magnifying-glass fa-2x"></i>
          </button>
        </li>
      </ul>
      <ul class="header_right" id="guest">
        <li id="header_login">
            <a href="/login">
                LOGIN
            </a>
        </li>
        <li id="header_wish">
            <a href="/register">
              REGISTER
            </a>
        </li>
        <li id="header_cart">            
            <a href="/guest">
                GUEST
            </a>
        </li>
      </ul>
      <ul class="header_right hidden" id="user">
      <li id="header_cart">
            <a href="/mypage/myPageCart">
                CART
            </a>
        </li>
        <li id="header_myPage">
            <a href="/mypage">
                MY PAGE
            </a>
        </li>
        <li id="header_logout">
            <a href="/logout">
              LOG OUT
            </a>
        </li>
      </ul>
      <ul class="header_right hidden" id="admin">
        <li id="header_addProduct">
        <a href="/products">
          ADD-PRODUCT
        </a>  
      </li>
    <li id="header_mypage">
      <a href="/mypage">
        ADMIN PAGE
      </a>  
    </li>
    <li id="header_logout">
      <a href="/logout">
        LOG OUT
      </a>
    </li>
      </ul>
    </header>
    `
  );

  
}) 
  

