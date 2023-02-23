import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 20,
  },
  counterGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterDescription: {
    fontSize: 14,
    fontFamily: 'Inter700Bold',
    marginEnd: 8,
  },
  completedTasks: {
    color: '#8284FA',
  },
  createdTasks: {
    color: '#4EA8DE',
  },
  amountContainer: {
    paddingHorizontal: 8,
    borderRadius: 999,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 25,
  },
  amount: {
    fontSize: 12,
    fontFamily: 'Inter700Bold',
    color: '#D9D9D9',
  },
})
