import React , {Component} from 'react';
import {Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {CardSection} from './common'


class ListItem extends Component {
    
    onRowPress() {
        console.log("Row Pressed",this.props.employee)
        Actions.employeeEdit({employee: this.props.employee});

    }

    render() {
        return (
            <TouchableHighlight onPress={this.onRowPress.bind(this)} >
                <CardSection>
                    <Text style={styles.titleStyle} > {this.props.employee.name}</Text>
                </CardSection>
            </TouchableHighlight>
        );

    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default ListItem;