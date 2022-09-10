import React from "react";

export default function Navbar() {
  return (
    <div className="Navbar">
      <svg
        className="logo"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="44"
        viewBox="0 0 24 24"
      >
        <path d="M13.112 6l2.888-3.375-.781-.625-3.219 3.75-3.219-3.75-.781.625 2.888 3.375h-10.888v16h24v-16h-10.888zm7.888 14h-18v-12h18v12zm-4.594-5.247c-1.209.956-2.539 1.545-4.405 1.545-1.868 0-3.197-.589-4.407-1.545l-.394.394c.902 1.376 2.56 2.853 4.801 2.853 2.24 0 3.897-1.477 4.799-2.853l-.394-.394zm-7.206-4.753c-.663 0-1.2.537-1.2 1.2 0 .663.537 1.2 1.2 1.2.662 0 1.2-.537 1.2-1.2 0-.663-.538-1.2-1.2-1.2zm5.6 0c-.662 0-1.2.537-1.2 1.2 0 .663.538 1.2 1.2 1.2.663 0 1.2-.537 1.2-1.2 0-.663-.537-1.2-1.2-1.2z" />
      </svg>
      <p>Dflix movies</p>
      <div className="Nav">
        <span>HOME</span>
        <span>GENRE</span>
        <span>COUNTRY</span>
        <span>MOVIES</span>
        <span>TV SHOWS</span>
        <span>TOP IMDB</span>
        <span>ANDROID APP</span>
      </div>
      <div className="button">
        <button className="login">
          <svg
            className="human--logo"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
          </svg>
          Login
        </button>
      </div>
      <div className="sentence">Find Movies, TV shows and more</div>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
        </svg>
      </span>
      <div>
        <input className="searchbox" placeholder="Enter Keywords.."></input>
      </div>
      <button className="roundBtn">
        <svg
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12.068.016l-3.717 3.698 5.263 5.286h-13.614v6h13.614l-5.295 5.317 3.718 3.699 11.963-12.016z" />
        </svg>
      </button>
    </div>
  );
}
