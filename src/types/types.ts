export interface IData {
    id: number
    img: string
    language: string
    isSelected: boolean
}

export interface IAppState  {
    isDropdownVisible: boolean
    searchString?: string
    items: Array<IData>
}


export type SetSelectedType = {
    setSelected: (id: number)=>void
}

export type SetVisibilityType = {
    setVisibility: ()=>void
}

export type СhangeSearchStringType = {
    changeSearchString?: (newString: string)=>void
}