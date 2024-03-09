import React from 'react';
import './Breadcrumb.css'; 

const Breadcrumb = ({ path }) => {
  return (
    <div className="breadcrumb">
      {path.map((crumb, index) => (
        <React.Fragment key={index}>
          <span className="breadcrumb-item" style={index==path.length-1? {fontWeight : "600"}: undefined}>{crumb}</span>
          {index < path.length - 1 && <span className="breadcrumb-separator">{'>'}</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
