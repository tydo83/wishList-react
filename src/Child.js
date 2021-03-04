import React, { Component } from 'react'
import Button from './button'

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
                            placeholder="Enter wish list"
                            name="inputWishList"
                            value={this.props.inputWishList}
                            onChange={this.props.handleOnChange}
                        />
                        <button className="btn btn-primary" type="submit">Add</button>
                    </div>
                </form>
                <ul>
                    {this.props.wishList.map((item) => {
                        return (
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
                        )
                    })}
                </ul>
            </div>
        )
    }
}
