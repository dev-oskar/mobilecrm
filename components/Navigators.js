// Navigators
import { DrawerNavigator, StackNavigator } from 'react-navigation'

// StackNavigator screens
import MainActivity from '../screens/MainActivity' // W tym miejscu nalezy zaimportowac wszystkie ekrany do ktorych mamy miec dostęp.
import LogInScreen from '../screens/LogInScreen'
import APIAddress from '../screens/APIAddress'
import ActiveTasks from '../screens/ActiveTasks'
import FutureTasks from '../screens/FutureTasks'
import TasksPerformed from '../screens/TasksPerformed'
import LongTermTasks from '../screens/LongTermTasks'
import SpecificTask from '../screens/SpecificTask'
import CalendarScreen from '../screens/CalendarScreen'
import AddTaskForm from '../screens/AddTaskForm'

export const Stack = StackNavigator({           // Potrzebujemy zaimplementowac
  'MainActivity': { screen: MainActivity },     //
  'SpecificTask': { screen: SpecificTask },
  'AddTaskForm': { screen: AddTaskForm },
  'ActiveTasks': { screen: ActiveTasks },
  'TasksPerformed': { screen: TasksPerformed },
  'FutureTasks': { screen: FutureTasks },
  'LongTermTasks': { screen: LongTermTasks },
  'CalendarScreen': { screen: CalendarScreen },
}, {
  initialRouteName: 'MainActivity'
})

export const ActiveTasksStack = StackNavigator({
  'ActiveTasks': { screen: ActiveTasks },
  'SpecificTask': { screen: SpecificTask },
}, {
  initialRouteName: 'ActiveTasks'
})

export const Drawer = DrawerNavigator({
  'Główna': { screen: Stack },
  'Adres API': { screen: APIAddress },
  'Logowanie': { screen: LogInScreen },
  'Aktywne zadania': { screen: ActiveTasksStack },
  'Wykonane zadania': { screen: TasksPerformed },
  'Przyszłe zadania': { screen: FutureTasks },
  'Długoterminowe': { screen: LongTermTasks },
  'Kalendarz': { screen: CalendarScreen },
}, {
  drawerPosition: 'right'
})
