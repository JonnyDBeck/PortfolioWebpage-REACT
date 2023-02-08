import React from 'react';

export const Resume = () => {

    const onButtonClick = () => {
        fetch('JDB_Resume.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'JDB_Resume.pdf';
                alink.click();
            })
        })
    }

  return (
    <div className='theSection ResumeSection'>
        <div className='ButtonContainer'>
            <button className='ResumeButton'
            onClick={onButtonClick}
            >Download Resume PDF</button>            
        </div>

        <div>
            <h1 className='Pros'>Proficiencies:</h1>
                <ul>
                    <li>JS / NodeJS</li>
                    <li>SQL/ MySQL</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>MongoDB</li>
                    <li>MERN STack</li>
                    <li>Python</li>
                    <li>C#, C++, C</li>
                    <li>React</li>
                    <li>+ Many More Skills</li>
                </ul>
        </div>
    </div>
  );
}