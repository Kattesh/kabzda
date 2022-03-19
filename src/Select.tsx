import React from "react";




type ItemType={
    title:string
    value: any
}
type SelectPropsType={
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    const selectedItem = props.items.find(i => i.value === props.value)
    return (
        <>
            <select>
                <option value="">Minsk</option>
                <option value="">Moscow</option>
                <option value="">Kiev</option>
            </select>
            <div >
                <h3>{selectedItem && selectedItem.title}</h3>
                <div >
                    {props.items.map(i => <div key={i.value}>{i.title}</div>)}
                </div>

            </div>
        </>

    )
}



