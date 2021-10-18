import React from 'react';
import Dropdown from './components/Dropdown/Dropdown.js';
import styles from './App.module.css';
import mockData from './assets/mockData.js';


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isDropdownVisible: true,
            searchString: '',
            items: mockData
        }

        this.setSelected = this.setSelected.bind(this)
        this.setVisibility = this.setVisibility.bind(this)
        this.changeSearchString = this.changeSearchString.bind(this)
    }

    setSelected(id) {
        this.setState({
            ...this.state,
            items: this.state.items.map( (item) => {
                if (item.id === id) {
                    return {...item, isSelected: !item.isSelected}
                }
                return item
            })
        });
    }

    setVisibility() {
        this.setState({...this.state, isDropdownVisible: !this.state.isDropdownVisible});
    }


    changeSearchString(newString) {
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