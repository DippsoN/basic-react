import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import './App.css'
import { List } from './List'


export const App: React.FC = () => {
    const [ text, setText ] = useState<string>('')
    const [ todo, setTodo ] = useState<string[]>([])

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => setText(event.target.value)

    const handleAdd = () => {
        setTodo((prevState) => [...prevState, text])
        setText('')
    }


    return (
        <Container>
                <Wrapper>
                    <Input type="text" value={text} onChange={handleInput} />
                    <Btn onClick={handleAdd}>Add</Btn>
                </Wrapper>
                <List setNewList={(newState) => setTodo([...newState])} todo={todo} />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const Wrapper = styled.div`
    margin-bottom: 10px;
`

const Input = styled.input`
    padding: 10px 20px;
`

const Btn = styled.button`
    padding: 10px 20px; 
    margin-left: 10px;
`