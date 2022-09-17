import React from 'react';
import Intro from '../Intro';
import CardsReason from '../CardsReason';
import * as S from './styles';
import Requirements from '../Requirements';
import CourseContent from '../CourseContent';

function Main() {
    return (
        <S.MainContainer>
            <Intro/>
            <CardsReason/>
            <Requirements/>
            <CourseContent/>
        </S.MainContainer>
    );
}

export default Main;