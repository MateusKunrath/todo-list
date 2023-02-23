import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#262626',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333333',
    marginBottom: 8,
  },
  description: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Inter400Regular',
    marginHorizontal: 8,
  },
  descriptionPendingTask: {
    color: '#F2F2F2',
  },
  descriptionCompletedTask: {
    color: '#808080',
    textDecorationLine: 'line-through',
  },
  buttonCompleted: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDelete: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
