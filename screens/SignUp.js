import constants from "jest-haste-map/build/constants";
import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    TextInput,
    Modal,
    FlatList,
    KeyboardAvoidingView,
    ScrollView


} from "react-native"
import LinearGradient from "react-native-linear-gradient";

import { COLORS, SIZES, icons, images, FONTS} from '../constants'
const SignUp = ({ navigation }) => {

    function renderHeader() {
        return (
            <TouchableOpacity
                style={{ 
                    flexDirection: 'row',
                    alignItems: "center",
                    marginTop: SIZES.padding * 6,
                    paddingHorizontal: SIZES.padding * 2
                }}
                onPress={() => console.log("signUp")}
            >
                <Image 
                    source={icons.back}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.white
                    }}
                />
                <Text 
                style={{
                    marginLeft: SIZES.padding * 1.5,
                    color: COLORS.white,
                    ...FONTS.h4
                }}
                >Sign Up</Text>
            </TouchableOpacity>
        )
    }

    function renderLogo(){
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 5,
                    height: 100,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={images.wallieLogo}
                    resizeMode="contain"
                    style={{
                        width: "60%"
                    }}
                />
            </View>
        )
    }

    function renderForm() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 3,
                    marginHorizontal: SIZES.padding * 3,
                }}
            >
                {/* Full Name */}
                <View style={{ marginTop: SIZES.padding * 3 }}>
                    <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>Full Name</Text>
                    <TextInput
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.white,
                            borderBottomWidth: 1,
                            height: 40,
                            color: COLORS.white,
                            ...FONTS.body3
                        }}
                        placeholder="Enter Full Name"
                        placeholderTextColor={COLORS.white}
                        selectionColor={COLORS.white}
                    />
                </View>

                {/* Phone Number */}
                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>Phone Number</Text>

                    <View style={{ flexDirection: 'row' }}>
                        {/* Country Code */}
                        <TouchableOpacity
                            style={{
                                width: 100,
                                height: 50,
                                marginHorizontal: 5,
                                borderBottomColor: COLORS.white,
                                borderBottomWidth: 1,
                                flexDirection: 'row',
                                ...FONTS.body2
                            }}
                            onPress={() => setModalVisible(true)}
                        >
                            <View style={{ justifyContent: 'center' }}>
                                <Image
                                    source={icons.down}
                                    style={{
                                        width: 10,
                                        height: 10,
                                        tintColor: COLORS.white
                                    }}
                                />
                            </View>
                            <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                                <Image
                                    source={{ uri: selectedArea?.flag }}
                                    resizeMode="contain"
                                    style={{
                                        width: 30,
                                        height: 30
                                    }}
                                />
                            </View>

                            <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                                <Text style={{ color: COLORS.white, ...FONTS.body3 }}>{selectedArea?.callingCode}</Text>
                            </View>
                        </TouchableOpacity>

                        {/* Phone Number */}
                        <TextInput
                            style={{
                                flex: 1,
                                marginVertical: SIZES.padding,
                                borderBottomColor: COLORS.white,
                                borderBottomWidth: 1,
                                height: 40,
                                color: COLORS.white,
                                ...FONTS.body3
                            }}
                            placeholder="Enter Phone Number"
                            placeholderTextColor={COLORS.white}
                            selectionColor={COLORS.white}
                        />
                    </View>
                </View>

                {/* Password */}
                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>Password</Text>
                    <TextInput
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.white,
                            borderBottomWidth: 1,
                            height: 40,
                            color: COLORS.white,
                            ...FONTS.body3
                        }}
                        placeholder="Enter Password"
                        placeholderTextColor={COLORS.white}
                        selectionColor={COLORS.white}
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 0,
                            bottom: 10,
                            height: 30,
                            width: 30
                        }}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Image
                            source={showPassword ? icons.disable_eye : icons.eye}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: COLORS.white
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    return (
        <KeyboardAvoidingView
            behaviour={Platform.OS === "ios"? "padding": null}
            style={{ flex:1 }}
        >
           <LinearGradient
                colors={[COLORS.lime, COLORS.emerald]}
                style={{ flex: 1}}
           >
                <ScrollView>
                    {renderHeader()}
                    {renderLogo()}
                    {renderForm()}
                </ScrollView>
           </LinearGradient>
        </KeyboardAvoidingView>
    )

    
}

export default SignUp;