import React from 'react';
import Dropdown from './components/Dropdown/Dropdown';
import styles from './App.module.css';
import mockData from './assets/mockData';
import {IData, IAppState} from './types/types'


class App extends React.Component<{}, IAppState>{
    constructor(props: {}) {
        super(props);
        this.state = {
            isDropdownVisible: true,
            searchString: '',
            items: mockData
        }
    }

    setSelected = (id: number) => {
        this.setState({
            ...this.state,
            items: this.state.items.map( (item: IData) => {
                if (item.id === id) {
                    return {...item, isSelected: !item.isSelected}
                }
                return item
            })
        });
    }

    setVisibility = () => {
        this.setState({...this.state, isDropdownVisible: !this.state.isDropdownVisible});
    }


    changeSearchString = (newString: string) => {
        this.setState({...this.state, searchString: newString});
    }

    render() {
        return(
            <div className={styles.wrapper}>
                <Dropdown 
                    {...this.state} 
                    setSelected = {this.setSelected} 
                    setVisibility = {this.setVisibility}
                    changeSearchString = {this.changeSearchString}
                />
            </div>
        )
    }
}

export default App;