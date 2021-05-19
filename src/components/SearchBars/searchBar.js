import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'


const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="search on isani categories"
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                //onChangeText={onTermChange}  shorten
                //onEndEditing={() => onTermSubmit()}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 15,
        // backgroundColor:'00868B'
    },
    background: {
        // backgroundColor: '#F0EEEE',
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 30,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
        //github.com/expo/vector-icons

    },
    inputStyle: {
        // borderColor: 'black',
        // borderWidth: 1,
        flex: 1,
        fontSize: 20
    }

})

export default SearchBar