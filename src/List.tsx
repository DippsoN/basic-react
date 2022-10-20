import React from "react";
import styled from "styled-components";


type ListProps = {
    todo: string[],
    setNewList: (todo: string[]) => void
}

export const List: React.FC<ListProps> = ({
    todo,
    setNewList
}) => {

    const remove = (value: string) => {
        const newTodo = todo.filter(item => item !== value)
        setNewList(newTodo)
    }

    return (
        <ListItem>
            {todo.map((value, index) => {
                if (value.length > 6) {
                    return (
                        <li key={`${value}-${index}`} onClick={() => remove(value)} >{value}</li>
                    )
                }
                    
            })}
        </ListItem>
    )
    
}

const ListItem = styled.ul`
    list-style: none;
`