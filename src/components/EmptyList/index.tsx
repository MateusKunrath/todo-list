import { Text, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather'

import { styles } from './styles'

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Feather name="clipboard" size={56} color="#333" />
      <Text style={[styles.text, styles.principalText]}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={[styles.text]}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}
