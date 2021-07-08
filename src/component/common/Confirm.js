import React from 'react';
import {Text,View,Modal } from 'react-native';
import {CardSection } from './CardSection';
import {Button} from './Button';

const Confirm = ({children, visible, onAccept, onDecline}) => {

    const {containerStyle,textStyle,cardSelectionStyle} = styles;

    return (
        <Modal animationType="slide" 
            onRequestClose={() => {}}
            transparent
            visible={visible}
        >
            <View style= {containerStyle}>
                <CardSection style={cardSelectionStyle} >
                    <Text style={textStyle} >{children}</Text>
                </CardSection>

                <CardSection>
                    <Button onPress={onAccept}>
                        Yes
                    </Button>
                    <Button onPress={onDecline}>
                        No
                    </Button>
                </CardSection>
            </View>
        </Modal>
    );

};

const styles = {
    cardSelectionStyle: {
        justifyConent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40,
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        flex:1,
        justifyContent: 'center'
    },
};

export  {Confirm};