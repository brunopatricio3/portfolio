import '../../../styles/main.scss';

function Home() {
  return (
    <>
      <div className="container margin-bottom-m">
        <div className="row nav">
          <div className="col-sm">
            <a className='nav-item'> Website Link </a> 
          </div>
        </div>
      </div>
      
      <div className="container profile margin-bottom-m">
        <div className="row">
          <div className="col-sm profile-picture text-center ">
            <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png' />
          </div>
          <div class="col-sm profile-description">
            <h2>Profile</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <ul>
              <li>
                <span> Lorem ipsum dolor sit amet </span>
              </li>
              <li>
                <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
              </li>
              <li>
                <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
              </li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
        </div>
      </div>

      <div className="container technologies margin-bottom-m">
        <div className="row technologies-list">
          <div className="col-sm">
            <h2>Technologies</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
          <div className="col-sm">
            <button>Technology 1</button>
            <button>Technology 2</button>
            <button>Technology 3</button>
            <button>Technology 4</button>
            <button>Technology 5</button>
            <button>Technology 6</button>
            <button>Technology 7</button>
            <button>Technology 8</button>
          </div>
        </div>
      </div>

      <div className="container projects margin-bottom-m">
        <div className="row">
          <div class="col-sm profile-description">
            <h2>Projects</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
