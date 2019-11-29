import React from 'react';


export default class Cars extends React.Component {
    state = {
        planeList: ["test"],
        planeItem: ""
    }

    handleValueEntered(event) {
        const newPlaneItem = event.target.value;
        console.log(">>>>>>>>>>" + newPlaneItem);
        this.setState(state => ({ ...state, planeItem: newPlaneItem }));
    }

    handlePlaneAdded() {
        this.setState(state => {
            const newPlaneList = [...state.planeList, state.planeItem];
            return { ...state, planeList: newPlaneList };
        });
    }

    render() {

        const planeElements = this.state.planeList.map((planeItem, index) => {
            return <li key={index} >{planeItem}</li>
        });

        return (
            <div>
                <h2>Add Planes</h2>
                <input type="text" onChange={event => this.handleValueEntered(event)} />
                <button onClick={() => this.handlePlaneAdded()}>Create Plane</button>
                <ul>{planeElements}</ul>
            </div>
        );

    }
}
