export default ({store, redirect})=>{
	if (!store.state.auth.is_logged){
		redirect('/login');
	} else {
		redirect('/');
	}
}
