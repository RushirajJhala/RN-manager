import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {employeesFetch} from '../actions'
import {FlatList} from 'react-native';
import ListItem from './ListItem';


class EmployeeList extends Component {
 
    componentDidMount() {
        this.props.employeesFetch();
    }

    renderItem(employee) {
        return (
            <ListItem employee= {employee.item}></ListItem>
        );
    }

    render() {
        return(
            <FlatList
                data = {this.props.employees}
                renderItem = {this.renderItem}
                keyExtractor = {employee => employee.uid}
            />
        );
    };
}

const mapStateToProps = (state) => {
    
    const employees = _.map(state.employees, (val, uid) => {
        return {...val,uid}
    })
    return {
        employees
    }
}

export default connect(mapStateToProps,{employeesFetch})(EmployeeList);