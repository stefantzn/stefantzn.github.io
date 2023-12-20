import React, { Component }  from 'react';

function App() {

  const openPDFViewer = () => {
    const newWindow = window.open('/pdf', '_blank');
    if (newWindow) {
      newWindow.document.write('<iframe src="/resume.pdf" width="100%" height="100%"></iframe>');
    } else {
      console.error('Unable to open a new window or tab.');
    }
  };

  return (
      <div>
        <link rel="icon" type="image/x-icon" href="favicon.ico?" />
        <h1 className="a">Hey there! 👋</h1>
        <div className="a">
          <p className="a">My name is Stefan</p>
          <p>I'm currently a 1st year Computer Engineering student at the University of Waterloo with a passion for technology.</p>
          <p>Right now I'm probably studying, working on something, or just simply brushing up on my Japanese. </p>
          <p>I have experience working with Java, C++, and Python for backend applications, HTML, CSS, and Javascript for front end applications.</p>
          <p>Sometimes I play around with microcontroller systems too.</p>
          <p />
        </div>
        <br /><br />
        <div className="container">
          <button className="btn" id="downloadbutton" onClick={openPDFViewer}>Download CV</button>
        </div>
        <div className="b">
          <a href="https://www.linkedin.com/in/stefan-tuczynski/" className="hyperlink">LinkedIn</a>
          <a> </a>
          <a href="https://github.com/stefantzn" className="hyperlink">GitHub</a>
          <a> </a>
          <a href="mailto:tuczynskis@gmail.com" className="hyperlink">Email</a>
        </div>
      </div>
  );
}

export default App;
