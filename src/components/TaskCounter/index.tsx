import { Text, View } from 'react-native'
import { styles } from './styles'

type TaskCounterProps = {
  amountCreatedTasks: number
  amountCompletedTasks: number
}

export function TaskCounter({
  amountCreatedTasks = 0,
  amountCompletedTasks = 0,
}: TaskCounterProps) {
  return (
    <View style={styles.container}>
      <View style={styles.counterGroup}>
        <Text style={[styles.counterDescription, styles.createdTasks]}>
          Criadas
        </Text>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amountCreatedTasks}</Text>
        </View>
      </View>
      <View style={styles.counterGroup}>
        <Text style={[styles.counterDescription, styles.completedTasks]}>
          Concluídas
        </Text>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amountCompletedTasks}</Text>
        </View>
      </View>
    </View>
  )
}
