import React from 'react';

function ProjCard({img, projName, link}) {
  return (
    <div className="ProjCard"
    onClick={() => window.location.href = link}
    style={{backgroundImage: img}}>
        <h1 className='ProjText' >{projName}</h1>
    </div>
  );
};

export default ProjCard;