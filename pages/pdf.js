import React, { useEffect } from 'react';

const PDFViewer = () => {
  useEffect(() => {
    // Set the margin and padding of the body to zero
    document.body.style.margin = '0';
    document.body.style.padding = '0';

    return () => {
      // Clean up: Reset the styles when the component is unmounted
      document.body.style.margin = '';
      document.body.style.padding = '';
    };
  }, []);

  return (
    <div>
      <h1 style={{ margin: '0', padding: '0' }}>PDF Viewer</h1>
      <iframe
        src="/resume.pdf"
        width="100%"
        height="100%"
        style={{ border: 'none', margin: '0', padding: '0' }}
      ></iframe>
    </div>
  );
};

export default PDFViewer;