/* eslint-disable jsx-a11y/alt-text */
import { Image, View } from 'react-native'

import { styles } from './styles'

export function Logo() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Logo.png')} />
    </View>
  )
}
