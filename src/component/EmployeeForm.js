import React ,{Component} from 'react';
import { View, Text } from 'react-native';
import {CardSection, Input} from './common'
import {Picker} from '@react-native-community/picker';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions'


class EmployeeForm extends Component {
    render(){
        return (
            <View>
                <CardSection>
                    <Input  label="Name"
                    placeholder="your name"
                    value = {this.props.name}
                    onChangeText = { text => this.props.employeeUpdate ({props: 'name', value: text})}
                    />
                </CardSection>
                    
                <CardSection>
                    <Input  label="Phone"
                    placeholder="1111111111"
                    value = {this.props.phone}
                    onChangeText = { text => this.props.employeeUpdate({props: 'phone', value: text})}
                    />
                </CardSection>

                <CardSection style={{ flexDirection: 'column'}} >
                    <Text style= {styles.pickerTextStyle} > Shift</Text>
                    <Picker style= {{flex: 1}}
                        selectedValue={this.props.shift}
                        onValueChange= {day => this.props.employeeUpdate({props: 'shift', value: day})}

                     >
                        <Picker.Item label="Monday" value='Monday'/>
                        <Picker.Item label="Tuesday" value='Tuesday'/>
                        <Picker.Item label="Wednesday" value="Wednesday"/>
                        <Picker.Item label="Thursday" value="Thursday"/>
                        <Picker.Item label="Friday" value="Friday"/>
                        <Picker.Item label="Saturday" value="Saturday"/>
                        <Picker.Item label="Sunday" value="Sunday"/>
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}


const mapStateToProps = (state) => {
    const {name,phone,shift} = state.employeeForm
    return {
        name, phone,shift
    }
}

export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);
