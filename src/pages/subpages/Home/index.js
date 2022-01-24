import '../../../styles/main.scss';

function Home() {
  return (
    <>     
      <div className="container transition margin-bottom-m">
        <div className="row">
          <div className="col-sm text-center ">
            <h4>Hello there!</h4>
            <h2>I'm <span className="txt-cl-orange">Bruno Patrício</span>,</h2>
            <h5>A Front-End developer.</h5>  
          </div>
        </div>

        <div className="row">
          <div className="col-sm  text-center ">
            <span className="isPressable margin-x-sm" onClick={() => alert("Download CV")}>
              <span className="text-sz-lg txt-cl-prog-grey">&#60;</span>
              <span className="text-sz-lg txt-cl-prog-green">Resume</span>
              <span className="text-sz-lg txt-cl-prog-grey">/&#62;</span> 
            </span>
            <span className="isPressable" onClick={() => alert("About me")}>
              <span className="text-sz-lg txt-cl-prog-grey">&#60;</span>
              <span className="text-sz-lg txt-cl-prog-green isPressable">Aboutme</span>
              <span className="text-sz-lg txt-cl-prog-blue"> who</span>
              <span className="text-sz-lg txt-cl-prog-white">=</span>
              <span className="text-sz-lg txt-cl-prog-brown">"Bruno"</span>
              <span className="text-sz-lg txt-cl-prog-grey">/&#62;</span> 
            </span>
          </div>
        </div>
      </div>    
    </>
  );
}

export default Home;
