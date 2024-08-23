import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../../constants';
import SignIn from './sign-in';

const SignUp = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
          source={images.logo}
          resizeMode='contain' 
          className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Sign in to Aora</Text>
          <FormField
          title=""
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

export default SignUp;
