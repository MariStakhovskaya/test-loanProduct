import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type PropsType = {
    title: string
    callBack: (title: string) => void
}

export const EditableInput = ({title, ...props}: PropsType) => {

    const [edit, setEdit] = useState(false)
    let [newTitle, setNewTitle] = useState(title)



    const editTrue = () => {
        setEdit(true)
    }
    const editFalse = () => {
        setEdit(false)
        props.callBack(newTitle);
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            setEdit(false)
            props.callBack(newTitle);
        }
    }

    return (
        edit ?
            <input value={newTitle} onBlur={editFalse} autoFocus={true} onChange={onChangeHandler} onKeyPress={onKeyPressHandler} />
            : <input value={title} onDoubleClick={editTrue}/>
    )
}