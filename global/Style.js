import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get('window');
const vw = width / 100;
const vh = height / 100;
const globalstyles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
    },
    opacity_5: {
        opacity: 0.4
    },


    roundedFull: {
        borderRadius: 2000,
    },
    glow: {
        backgroundColor: '#FFFFFF', // Circle color
        shadowColor: '#FFFFFF', // Shadow color same as circle color for glow effect
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 2,
        shadowRadius: 120, // Adjust this to increase/decrease the glow
        elevation: 10, // For Android shadow
    },


    h1: {
        fontSize: 15 * vw, fontFamily:'BalooBhai2_700Bold'
    },
    h2: {
        fontSize: 12 * vw, fontFamily: 'BalooBhai2_700Bold'
    },h3: {
        fontSize: 10 * vw, fontFamily: 'BalooBhai2_700Bold'
    }, h4: {
        fontSize: 8 * vw,
    }, h5: {
        fontSize: 6 * vw,
    },
    baseFont: {
        fontSize: 4 * vw,
    },
    smallFont: {
        fontSize: 3 * vw,
    },


    marginTop20: {
        marginTop: -2 * vh
    },
    marginTop15: {
        marginTop: -1.5 * vh
    }, marginTop20: {
        marginTop: -2 * vh
    }, marginTop10: {
        marginTop: -1 * vh
    },
    marginTopZero: {
        marginTop: 0.5 * vh 
    },


    textDefault: {
        width: '100%', height: 'auto', padding: 10, borderBottomColor: 'white', borderWidth: 2,
        borderColor: 'transparent'
    },

    btnPrimary: {
        width: '100%', height: 'auto', 
    }

});

// src/constants/colors.js
export const Colors = {
    darkGreen: '#365E32',
    green: '#81A263',
    yellow: '#E7D37F',
    orange: '#FD9B63',
    liteWhite: '#FCFCFD',
    dark: '#2C2B2B',
    yellowWhite: '#FFFAE6',
    white: '#FFFFFF',
};

export default globalstyles