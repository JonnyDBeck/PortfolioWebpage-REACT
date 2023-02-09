import React from 'react';
import ProjCard from '../Project';

import PetSearchImg from '../../images/PetSearch.jpg'
import QuizImg from '../../images/Quiz.jpg'
import TrackMeetImg from '../../images/TrackMeet.jpg'
import ReactImg from '../../images/React.png'

export default function Portfolio() {
  return (
    <div className='theSection'>
        <ProjCard
        img={PetSearchImg}
        projName='Pet Search Page'
        link='https://github.com/ramonjpadin/Pet-search-page' />
        <ProjCard
        img={QuizImg}
        projName='Code Quiz'
        link='https://github.com/JonnyDBeck/CodeQuiz' />
        <ProjCard
        img={TrackMeetImg}
        projName='TrackMeet'
        link='https://github.com/JonnyDBeck/TrackMeet' />
        <ProjCard
        img={ReactImg}
        projName='REACT Portfolio Page'
        link='/' />
    </div>
  );
}