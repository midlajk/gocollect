import React from 'react';

import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
const REPLACE_SCREEN_NAME = props => {
  const { theme } = props;
  return (
    <View
      style={styles.screenContainerJb}
      scrollable={true}
      hasSafeArea={false}
    >
      <View
        style={styles.imageBackgroundNb}
      />
      <Container
        style={styles.containerEA}
        elevation={0}
        useThemeGutterPadding={true}
      >
        <Image
          style={StyleSheet.flatten([
            styles.imageA3,
            { borderRadius: theme.borderRadius.global },
          ])}
          resizeMode="cover"
          source={require('../assets/ownerslogo.jpeg')}
        />
        <Text
          style={StyleSheet.flatten([
            styles.textPr,
            theme.typography.headline3,
          ])}
        >
          Jessica Green
        </Text>
        <Button style={styles.buttonP2} type="outline">
          Edit Profile
        </Button>
      </Container>
      <Container useThemeGutterPadding={true} elevation={0}>
        <Touchable
          style={StyleSheet.flatten([
            styles.touchableOk,
            { borderColor: theme.colors.divider },
          ])}
        >
          <View style={styles.viewKs}>
            <Text style={theme.typography.body1}>Privacy Settings</Text>
            <Icon
              style={styles.iconFE}
              size={24}
              color={theme.colors.strong}
              name="MaterialIcons/account-circle"
            />
          </View>
        </Touchable>
        <Touchable
          style={StyleSheet.flatten([
            styles.touchableOm,
            { borderColor: theme.colors.divider },
          ])}
        >
          <View style={styles.viewYR}>
            <Text style={theme.typography.body1}>Notifications</Text>
            <Icon
              style={styles.iconCl}
              color={theme.colors.strong}
              name="MaterialIcons/notifications"
              size={24}
            />
          </View>
        </Touchable>
        <Touchable
          style={StyleSheet.flatten([
            styles.touchableBp,
            { borderColor: theme.colors.divider },
          ])}
        >
          <View style={styles.viewS1}>
            <Text style={theme.typography.body1}>Order History</Text>
            <Icon
              style={styles.iconZz}
              color={theme.colors.strong}
              size={24}
              name="MaterialIcons/history"
            />
          </View>
        </Touchable>
        <Touchable
          style={StyleSheet.flatten([
            styles.touchableJg,
            { borderColor: theme.colors.divider },
          ])}
        >
          <View style={styles.viewAl}>
            <Text style={theme.typography.body1}>Payment Details</Text>
            <Icon
              style={styles.iconZb}
              size={24}
              name="MaterialIcons/payment"
              color={theme.colors.strong}
            />
          </View>
        </Touchable>
      </Container>
    </View>
  );
};
const styles = StyleSheet.create({
  screenContainerJb: {
    justifyContent: 'space-evenly',
  },
  viewKs: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  viewYR: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  viewS1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewAl: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  imageBackgroundNb: {
    width: '100%',
    height: 250,
  },
  imageA3: {
    height: 120,
    width: 120,
  },
  containerEA: {
    alignItems: 'center',
    marginTop: -65,
  },
  textPr: {
    width: '100%',
    textAlign: 'center',
    marginTop: 16,
  },
  touchableOk: {
    borderTopWidth: 1,
    paddingTop: 12,
    paddingBottom: 12,
    marginTop: 32,
  },
  iconFE: {
    height: 24,
    width: 24,
  },
  iconCl: {
    width: 24,
    height: 24,
  },
  iconZz: {
    width: 24,
    height: 24,
  },
  iconZb: {
    height: 24,
    width: 24,
  },
  buttonP2: {
    marginTop: 16,
    alignSelf: 'center',
    width: '50%',
  },
  touchableOm: {
    paddingBottom: 12,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  touchableBp: {
    paddingBottom: 12,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  touchableJg: {
    paddingBottom: 12,
    paddingTop: 12,
    borderTopWidth: 1,
  },
});
export default withTheme(REPLACE_SCREEN_NAME);