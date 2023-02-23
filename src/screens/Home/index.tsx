import { useEffect, useState } from 'react'
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import Feather from '@expo/vector-icons/Feather'

import { Logo } from '../../components/Logo'
import { TaskCounter } from '../../components/TaskCounter'
import { EmptyList } from '../../components/EmptyList'
import { TaskItem } from '../../components/TaskItem'

import { Task } from '../../types/Task'

import { styles } from './styles'

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [task, setTask] = useState('')
  const [amountCreatedTasks, setAmountCreatedTasks] = useState(0)
  const [amountCompletedTasks, setAmountCompletedTasks] = useState(0)

  useEffect(() => {
    setAmountCreatedTasks(tasks.length)
    setAmountCompletedTasks(tasks.filter((task) => task.completed).length)
  }, [tasks])

  function createTask() {
    if (!task.trim()) {
      return Alert.alert(
        'Descrição obrigatória',
        'Não é possível adicionar uma tarefa com a descrição em branco',
      )
    }

    const newTask = {
      id: tasks.length + 1,
      description: task.trim(),
      completed: false,
    }
    setTasks((prevTasks) => [...prevTasks, newTask])
    setTask('')
  }

  function handleDeleteTask(idTask: number) {
    Alert.alert('Remover', 'Deseja remover a tarefa?', [
      {
        text: 'Sim',
        onPress: () => deleteTask(idTask),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  function deleteTask(idTask: number) {
    const updatedTasks = tasks.filter((task) => task.id !== idTask)
    setTasks(updatedTasks)
  }

  function handleToggleCompletedTask(idTask: number) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === idTask) {
        task.completed = !task.completed
      }
      return task
    })
    setTasks(updatedTasks)
  }

  return (
    <>
      <Logo />
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            value={task}
            onChangeText={setTask}
          />

          <TouchableOpacity style={styles.button} onPress={createTask}>
            <Feather name="plus-circle" size={16} color="#fff" />
          </TouchableOpacity>
        </View>

        <TaskCounter
          amountCreatedTasks={amountCreatedTasks}
          amountCompletedTasks={amountCompletedTasks}
        />

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              toggleCompletedTask={handleToggleCompletedTask}
              deleteTask={handleDeleteTask}
            />
          )}
          ListEmptyComponent={() => <EmptyList />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  )
}
