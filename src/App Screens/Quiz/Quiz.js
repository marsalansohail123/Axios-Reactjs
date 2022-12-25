import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'

const Quiz = () => {

    const [quizData, setQuizData] = useState([
        {
            question: "Html Stands For _______________________",
            options: [
                "Hyper Text Makeup Language",
                "html",
                "Case Cading Style Sheet",
                "Hypertext markup language",
            ],
            correctAns: "Hypertext markup language",
        },
        {
            question: "Css Stands For _______________________",
            options: [
                "Casecading Style Sheet",
                "Java",
                "Ram",
                "Hypertext markup language",
            ],
            correctAns: "Casecading Style Sheet",
        },
        {
            question: "Js Stands For _______________________",
            options: ["Java Style", "Java Script", "Script", "Script Src"],
            correctAns: "Java Script",
        },
        {
            question: "Dom Stands For _______________________",
            options: ["Document Object Model", "html", "Css", "Java"],
            correctAns: "Document Object Model",
        },
        {
            question: "Ram Stands For _______________________",
            options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
            correctAns: "Random Acccess Memory",
        },
        {
            question: "Rom Stands For _______________________",
            options: [
                "Hyper Text Markup Language",
                "html",
                "HTml",
                "Read Only Memory",
            ],
            correctAns: "Read Only Memory",
        },
    ]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isShowResult, setIsShowResult] = useState(false);

    const checkQuestion = (a, b) => {
        if (a == b) {
            setScore(score + 1);
        }
        if (questionIndex + 1 == quizData.length) {
            setIsShowResult(true)
        } else {
            setQuestionIndex(questionIndex + 1)
        }
    }

    return (
        <div>
            <Box sx={{ textAlign: 'center' }}>
                <h1>Quiz App</h1>
            </Box>
            {isShowResult
                ?
                <Box sx={{ textAlign: 'center', fontFamily: 'serif' }}>
                    <h1>Your Percentage Is {(score / quizData.length) * 100} %</h1>
                </Box>
                :
                <Box sx={{ margin: 7 }}>
                    <p>Question No {questionIndex + 1}:</p>
                    <h1>{quizData[questionIndex].question}</h1>
                    <Box sx={{ padding: 4 }}>
                        {quizData[questionIndex].options.map((e, i) => (
                            <Button sx={{ backgroundColor: 'grey', color: 'white', margin: 4 }} onClick={() => checkQuestion(e, quizData[questionIndex].correctAns)} key={i} variant='contained'>{e}</Button>
                        ))}
                    </Box>
                </Box>
            }
        </div >
    )
}

export default Quiz;