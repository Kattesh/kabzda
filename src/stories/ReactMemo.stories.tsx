import React, {useState} from "react";
//HOC-high order component, контейнерная компонента которая вышла из мемо не будет перезапускать  users если пропсы не поменялись
export default {
    title: 'React.memo demo'
}
const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
const Users = React.memo(UsersSecret)
export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima', 'Marina', 'Inna'])
    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+++</button>
        <button onClick={addUser}>addUser</button>
        <NewMessageCounter count={counter}/>
        <Users users={users}/>
    </>
}