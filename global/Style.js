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
        opacity: 0.5
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
        fontSize: 20 * vw, 
    },
    h2: {
        fontSize: 16 * vw,
    },h3: {
        fontSize: 12 * vw,
    }, h4: {
        fontSize: 8 * vw,
    }, h5: {
        fontSize: 4 * vw,
    }

});

export default globalstyles