import { StyleSheet, Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window');

export default styles = StyleSheet.create({
    sectionStyles: {
        marginBottom: 20
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: 'rgba(255, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    text: {
        color: '#fff'
    },
    inputStyle: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.50)',
        color: 'rgba(255, 255, 255, 1)',
        marginHorizontal: 25,
        textAlign: 'center'
    },
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    screenContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorText: {
        color: 'red',
        fontSize: 16
    }
});