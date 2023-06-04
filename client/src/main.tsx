import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createContext } from 'react'
import { UserStore, DeviceStore, BrandStore, TypeStore } from './store/index'

interface UserStoreContext {
	user: UserStore,
	devices: DeviceStore,
	brands: BrandStore,
	types: TypeStore
}

export const Context = createContext<UserStoreContext>({} as UserStoreContext)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Context.Provider value={{
		user: new UserStore(),
		devices: new DeviceStore(),
		brands: new BrandStore(),
		types: new TypeStore()
	}}>
		<App />
	</Context.Provider>
)
