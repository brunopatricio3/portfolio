import '../../../styles/main.scss';

function Home() {
  return (
    <>
      <div className="container margin-bottom-m">
        <div className="row nav">
          <div className="col-sm">
            <a className='nav-item'>
              Website
            </a> 
          </div>
        </div>
      </div>
       <div class="container">
        <div class="row ">
          <div class="col-sm text-center">
            One of two columns
          </div>
          <div class="col-sm text-center">
            One of two columns
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
