import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Child from './Child'
import "./Parent.css"

export default class Parent extends Component {
    state = {
        wishList: [
            {
                id: uuidv4(),
                item: "Test1",    
                isDone: false,
                isEditToggle: false,
                isButtonToggle: false,
            },
            {
                id: uuidv4(),
                item: "Test2",    
                isDone: false,
                isEditToggle: false,
                isButtonToggle: false,
            }
        ],
        inputWishList: "",
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        let newWishList = [
            ...this.state.wishList,
            {   id: uuidv4(), 
                item:this.state.inputWishList, 
                isDone: false,
                isEditToggle: false,
                isButtonToggle: false,
            }
        ]
        this.setState({
            wishList: newWishList,
            inputWishList: "",
        })
    }
    
    handleOnChange = (event) => {
        this.setState({
            inputWishList: event.target.value
        })
    }

    // Delete item
    handleOnClick = (id) => {
        let filteredWishList = this.state.wishList.filter((item) => {
            if(item.id !== id) {
                return item
            }
        })
        this.setState({
            wishList: filteredWishList
        })
    }

    handlePurchased = (id) => {
        let mappedArr = this.state.wishList.map((item) => {
            if (item.id === id) {
                item.isDone = !item.isDone
            }
            return item
        })

        this.setState({
            todoList: mappedArr
        })
    }

    handleEditToggle = (id) => {
        let mappedArr = this.state.wishList.map((item) => {
            if(item.id === id) {
                item.isEditToggle = !item.isEditToggle
            }
            if(item.id !== id) {
                item.isButtonToggle = !item.isButtonToggle
            }
            return item;
        })
        this.setState({
            wishList: mappedArr
        })
    }

    handleEditUpdateTodo = (id, newItem) => {
        let updatedItem = this.state.wishList.map((item) => {
            if(item.id === id) {
                item.item = newItem
            }
            return item
        })
        this.setState({
            wishList: updatedItem
        })
    }

    handlePriority = (id) => {}

    render() {
        return (
            <div className="parent-container">
                <Child 
                    handleOnSubmit={this.handleOnSubmit}
                    handleOnChange={this.handleOnChange}
                    handleOnClick={this.handleOnClick}
                    handlePurchased={this.handlePurchased}
                    handleEditToggle={this.handleEditToggle}
                    handleEditUpdateTodo={this.handleEditUpdateTodo}
                    handlePriority={this.handlePriority}
                    inputWishList={this.inputWishList}
                    wishList={this.state.wishList}
                    />
            </div>
        )
    }
}
