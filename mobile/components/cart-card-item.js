import React from 'react';
import { Image, StyleSheet, View, } from 'react-native';
import { IconButton, Paragraph, Text } from 'react-native-paper';
import CartBtn from './cartBtnRow';
const CartItem = () => {

    return (
        <View style={styles.container}>
            <View style={styles.cartContainer}>
                <View style={styles.cartLogo}>
                    <Image source={require("../assets/cart1.avif")} style={styles.cartImg} resizeMode="contain" />
                </View>
                <View style={styles.cartBody}>
                    <View style={styles.detailBodyCart}>
                        <View style={styles.mainTitle}>
                            <Text style={{ color: '#878a93', fontSize: '14' }}>Samsung</Text>
                        </View>
                        <View style={styles.cartDescription}>
                            <Text>Galaxy A13 Dual SIM Black 4GB RAM 64GB 4G - Middle East </Text>
                        </View>
                        <View style={styles.price}>
                            <Paragraph style={{ fontWeight: '600' }}>
                                EGP <Text style={{ fontWeight: "bold", marginRight: 10 }}>38,700</Text>

                                <Text style={{ textDecorationLine: "line-through", flex: "1", marginRight: 10, }}>
                                    40,999
                                </Text>
                                <Text style={{ color: "green", fontWeight: "bold", marginLeft: 2 }}>5% </Text>
                            </Paragraph>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-between' }}>
                            <View>
                            <Text style={{ fontSize: 11 }}>Get It By</Text>
                            <Text style={{ marginLeft: 5, fontSize: 10, color: '#3866df', fontWeight: '900' }}>Mar  26 </Text>
                            </View>
                            <View>
                            <svg width="53" height="17" viewBox="0 0 53 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M53 0C52.7685 0.886768 50.2429 10.2952 49.4853 12.5878C48.8539 14.556 46.8334 16.5891 43.2134 17C42.8978 16.9784 9.17622 17 8.54482 17H8.27122C8.14494 17 8.01866 17 7.89239 17C3.4937 16.8053 0 13.0852 0 8.52163C0 6.16412 0.92604 4.04453 2.42033 2.50891C3.91462 0.951654 5.99821 0 8.27122 0H53Z" fill="#FEEE00"/>
                                <path d="M7.9657 11.3186C8.68684 11.3186 9.45606 11.0976 10.021 10.7047L9.55221 9.61197C9.19164 9.89436 8.60271 10.0417 8.08589 10.0417C7.00417 10.0417 6.48736 9.36642 6.48736 8.86303C6.48736 8.82619 6.48736 8.75253 6.48736 8.71569H10.8022C10.8503 8.53153 10.9224 8.08953 10.9224 7.73347C10.9224 6.07597 9.80461 5.09375 8.31425 5.09375C6.37918 5.09375 4.96094 6.72669 4.96094 8.65431C4.96094 10.3118 6.1388 11.3186 7.9657 11.3186ZM9.54019 7.63525H6.65562C6.77581 6.98453 7.38878 6.37064 8.2181 6.37064C9.13154 6.37064 9.56423 6.91086 9.56423 7.51247C9.56423 7.53703 9.56423 7.61069 9.55221 7.63525H9.54019Z" fill="#404553"/>
                                <path d="M16.6763 11.1712L15.2581 8.12636L17.8301 5.24108H16.0754L14.4768 7.05819L13.6836 5.24108H12.0249L13.335 8.12636L10.6187 11.1712H12.3615L14.1283 9.16997L15.0297 11.1712H16.6763Z" fill="#404553"/>
                                <path d="M20.978 11.3186C22.9491 11.3186 24.0308 9.32958 24.0308 7.54931C24.0308 5.97775 23.1414 5.09375 21.8313 5.09375C21.1342 5.09375 20.5693 5.38842 20.0766 5.97775L20.2448 5.24108H18.7184L16.9396 13.4304H18.466L19.1271 10.3855C19.5117 10.9748 20.1968 11.3186 20.978 11.3186ZM20.7256 9.93119C20.1126 9.93119 19.6198 9.64881 19.3674 9.24364L19.8242 7.19325C20.1367 6.78808 20.6174 6.48114 21.1463 6.48114C21.8914 6.48114 22.4323 7.02136 22.4323 7.86853C22.4323 8.96125 21.7352 9.93119 20.7256 9.93119Z" fill="#404553"/>
                                <path d="M25.966 11.1712L26.8073 7.27919C27.1439 6.88631 27.6847 6.56708 28.2496 6.56708C28.49 6.56708 28.7063 6.61619 28.8025 6.64075L29.139 5.09375C28.2136 5.09375 27.5886 5.44981 27.0838 6.01458L27.252 5.24108H25.7256L24.4396 11.1712H25.966Z" fill="#404553"/>
                                <path d="M32.0038 11.3186C32.7249 11.3186 33.4941 11.0976 34.059 10.7047L33.5903 9.61197C33.2297 9.89436 32.6408 10.0417 32.124 10.0417C31.0423 10.0417 30.5254 9.36642 30.5254 8.86303C30.5254 8.82619 30.5254 8.75253 30.5254 8.71569H34.8403C34.8883 8.53153 34.9605 8.08953 34.9605 7.73347C34.9605 6.07597 33.8427 5.09375 32.3523 5.09375C30.4173 5.09375 28.999 6.72669 28.999 8.65431C28.999 10.3118 30.1769 11.3186 32.0038 11.3186ZM33.5783 7.63525H30.6937C30.8139 6.98453 31.4269 6.37064 32.2562 6.37064C33.1696 6.37064 33.6023 6.91086 33.6023 7.51247C33.6023 7.53703 33.6023 7.61069 33.5903 7.63525H33.5783Z" fill="#404553"/>
                                <path d="M37.938 11.3186C39.5245 11.3186 40.45 10.3732 40.45 9.24364C40.45 7.43881 37.4933 7.59842 37.4933 6.87403C37.4933 6.56708 37.7938 6.32153 38.3346 6.32153C39.0437 6.32153 39.7649 6.72669 40.0413 7.09503L40.8346 6.05142C40.2817 5.47436 39.3562 5.09375 38.3707 5.09375C36.8202 5.09375 35.9789 6.06369 35.9789 7.09503C35.9789 8.87531 38.9356 8.67886 38.9356 9.47692C38.9356 9.80842 38.6111 10.0908 38.0942 10.0908C37.2529 10.0908 36.4116 9.57514 36.063 9.15769L35.2097 10.2504C35.8587 10.9503 36.8803 11.3186 37.938 11.3186Z" fill="#404553"/>
                                <path d="M43.6658 11.3186C45.2523 11.3186 46.1778 10.3732 46.1778 9.24364C46.1778 7.43881 43.2211 7.59842 43.2211 6.87403C43.2211 6.56708 43.5216 6.32153 44.0624 6.32153C44.7716 6.32153 45.4927 6.72669 45.7691 7.09503L46.5624 6.05142C46.0095 5.47436 45.0841 5.09375 44.0985 5.09375C42.548 5.09375 41.7067 6.06369 41.7067 7.09503C41.7067 8.87531 44.6634 8.67886 44.6634 9.47692C44.6634 9.80842 44.3389 10.0908 43.8221 10.0908C42.9807 10.0908 42.1394 9.57514 41.7908 9.15769L40.9375 10.2504C41.5865 10.9503 42.6081 11.3186 43.6658 11.3186Z" fill="#404553"/>
                            </svg>
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 8, marginBottom: 8 }}>
                            <Image source={require("../assets/van-en.png")} style={{ width: 25, height: 15 }} resizeMode="contain" />
                            <Text style={{ marginLeft: 5, fontSize: 11, color: '#000', fontWeight: '900' }}>Free Delivery </Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 8, marginBottom: 8 }}>
                            <Text>Sold By :</Text>
                            <Text style={{ fontWeight: '400' }}>  Dr:Mobile</Text>
                        </View>

                    </View>
                </View>

            </View>
            <CartBtn />
       </View>
    );
}
   
const styles = StyleSheet.create({
    container: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'flex-center', 
        alignItems: 'center',
        backgroundColor0:'#f7f9fe'

    },
    cartContainer: {
        flexDirection: 'row',
        width: '90%',
        padding: 10,
        borderRadius: 5,
        elevation: 3,
        backgroundColor: '#f7f9fe',

    },
    cartLogo: {
        width: '35%',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    cartImg: {
        width: 150,
        height: 200,
        padding: 10,
        margin: 10,

    },
    cartBody: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
    },
    detailBodyCart: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        margin: 10,
        padding: 10
    },
    mainTitle: {
        fontStyle: 'italic',
    },
    cartDescription: {
        margin: 5
    },
    price: {
        margin: 11,
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 0.5, // Optionally add border width
        borderColor: 'black', // Optionally add border color
        backgroundColor: '#ffffff',
        fontSize: 10,
        height: 30,
        paddingRight: 10,
        marginRight: 10
    }

});
export default CartItem;