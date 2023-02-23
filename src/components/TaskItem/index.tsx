import { Text, TouchableOpacity, View } from 'react-native'
import MaterialIcon from '@expo/vector-icons/MaterialIcons'
import Feather from '@expo/vector-icons/Feather'

import { Task } from '../../types/Task'

import { styles } from './styles'

type TaskProps = {
  task: Task
  toggleCompletedTask: (idTask: number) => void
  deleteTask: (idTask: number) => void
}

export function TaskItem({ task, toggleCompletedTask, deleteTask }: TaskProps) {
  return (
    <View style={styles.container}>
      {task.completed ? (
        <TouchableOpacity
          style={styles.buttonCompleted}
          onPress={() => toggleCompletedTask(task.id)}
        >
          <MaterialIcon name="check-circle" size={20} color="#5E60CE" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.buttonCompleted}
          onPress={() => toggleCompletedTask(task.id)}
        >
          <Feather name="circle" size={20} color="#4EA8DE" />
        </TouchableOpacity>
      )}
      <Text
        style={[
          task.completed
            ? styles.descriptionCompletedTask
            : styles.descriptionPendingTask,
          styles.description,
        ]}
      >
        {task.description}
      </Text>

      <TouchableOpacity
        style={styles.buttonDelete}
        onPress={() => deleteTask(task.id)}
      >
        <Feather name="trash-2" size={16} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}
