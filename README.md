# `<Onboarding />` [![npm](https://img.shields.io/npm/v/react-native-onboarding-swiper.svg)](https://www.npmjs.com/package/react-native-onboarding-swiper) [![npm](https://img.shields.io/npm/dm/react-native-onboarding-swiper.svg)](https://www.npmjs.com/package/react-native-onboarding-swiper)

| ![](demo/simple1.png) | ![](demo/simple2.png) | ![](demo/simple3.png) |
| --------------------- | --------------------- | --------------------- |


There are many ways to onboard people to your mobile app. But for React-Native, there is solely _one_ component that is a) **easy to setup** and b) **highly customizable**: `react-native-onboarding-swiper`.

Your new users shouldn't jump in at the deep end. First give them a pleasurable, delightful introduction and only then let them explore your awesome app.

Getting everything running merely takes a minute. Don't believe me? Try it out!

## Install

```
npm i react-native-onboarding-safeview-swiper
```

```js
import Onboarding from 'react-native-onboarding-safeview-swiper';
```

## Usage

```js
<Onboarding
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('./images/circle.png')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    }
  ]}
/>
```

## Acknowledgements

Built upon the work by [Gosha Arinich](https://github.com/goshakkk/react-native-simple-onboarding) which was originally inspired by [AndroidOnboarder](https://github.com/chyrta/AndroidOnboarder).

## License

MIT.
