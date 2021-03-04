import React, { Component } from 'react'
import Button from './button'
import "./Child.css"

export default class Child extends Component {
    state = {
        toggleInput:""
    }

    handleToggleOnChange = (event) => {
        this.setState({
            toggleInput: event.target.value,
        })
    };

    handleToggleButton = (id, itemTodo) => {
        this.setState({
            toggleInput: itemTodo,
        })
        this.props.handleEditToggle(id)
        this.props.handleEditUpdateTodo(id, this.state.toggleInput)
    }

    handleCheckbox = (item) => {
        console.log(item)    
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleOnSubmit}>
                    <div className="mb-3">
                        <label className="form-label">
                            Enter Your Wish List
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your item"
                            name="inputWishList"
                            value={this.props.inputWishList}
                            onChange={this.props.handleOnChange}
                        />
                        <button className="btn btn-primary mb-3" type="submit">Add</button>
                    </div>
                </form>
                <ul>
                    {this.props.wishList.map((item) => {
                        return (
                            <div className="container">
                            <React.Fragment key = {item.id}>
                                {item.isEditToggle ? 
                                    <input
                                        value={this.state.toggleInput}
                                        style={{ marginRight: 10 }}
                                        onChange={this.handleToggleOnChange}
                                        name="toggleInput"
                                /> :
                                <li style={{ textDecoration: item.isDone ? "line-through" : "" }}>
                                    {item.item}
                                </li>
                                }
                                <input 
                                    style={{marginRight: "10px"}} 
                                    type="checkbox"
                                    onClick={() => {this.handleCheckbox(item)}}
                                    />
                                <Button
                                propsClassName={"btn btn-success button-style"}
                                propsName={item.isEditToggle ? "Submit" : "Edit"}
                                propsOnClick={() => this.handleToggleButton(item.id, item.todo)}
                                propsButtonToggle={item.isButtonToggle}
                                />
                                <Button
                                propsClassName={"btn btn-warning button-style"}
                                propsOnClick={() => this.props.handlePurchased(item.id)}
                                propsName={"Done"}
                                />
                                <Button
                                propsClassName={"btn btn-danger button-style"}
                                propsOnClick={() => this.props.handleOnClick(item.id)}
                                propsName={"Delete"}
                                />
                            </React.Fragment>
                            </div>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
