import React from 'react'
import Item from './item'
import style from './Lista.module.scss'

function Lista() {
    const tarefas = [
        {
            tarefa: 'React',
            tempo: '02:00:00'
        }, {
            tarefa: 'Java',
            tempo: '03:00:00'
        },
        {
            tarefa: 'Sigle-SPA',
            tempo: '06:00:00'
        }
    ]
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul >
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista