createContext() delivers provided context to whatever is wrapped inside; there is theoretically no limit<hr>
import { createContext } from 'react'
const SomeContext = createContext(hereValue) (hereValue can be changed via setState with useState(), has to be called before component-func)<hr>
useContext() retrieves the created context information; used in combination with useState()<hr>
const iWantToUseTheContext = useContext(SomeContext)
useState() can change the values/parameters of the context; used in combination with useContext()


cool facts and hints:
1. react will re-render when useState is changing and so will read the context!
2. export const ThemeContext = createContext(valueHere) is accessible from other files because ==>> EXPORT :-)
3. import { ThemeContext } from './wherever'
4. const ContextName = createContext(valueName) ==>> const newNameForValue = useContext(ContextName)
5. <ContextName.Provider value={newNameForValue}> < ComponentInNeedForContext/> </ContextName.Provider>