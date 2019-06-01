import React, {Component} from 'react';

import './item-status-filter.css';

class ItemStatusFilter extends Component{

    buttons=[
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ];

    render(){

        const {filter, onFilterChange} = this.props;

        const buttons = this.buttons.map(({name,label}) => {
            const isActive = filter === name;
            const classBtn = isActive ? 'btn-info' : 'btn-outline-secondary';
            return(
                <button
                    key={name}
                    type="button"
                    className={`btn ${classBtn}`}
                    onClick={()=> onFilterChange(name)}
                >
                    {label}
                </button>
            )
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}

export default ItemStatusFilter;