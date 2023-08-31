import {Text, StyleSheet} from 'react-native';

import Colors from '../ui/Colors';

function Title({children}) {
    return(
        <Text style={styles.title}>{children}</Text>
    );
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontFamily: 'open-sans-bold',
        // fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        marginTop: 15,
        maxWidth: '80%',
        width: 300,
    },
});