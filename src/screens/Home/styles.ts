import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 24,
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -31,
  },
  input: {
    flex: 1,
    height: 54,
    padding: 16,
    marginEnd: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#0D0D0D',
    backgroundColor: '#262626',
    color: '#F2F2F2',
    fontSize: 16,
    fontFamily: 'Inter400Regular',
  },
  button: {
    height: 52,
    width: 52,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
