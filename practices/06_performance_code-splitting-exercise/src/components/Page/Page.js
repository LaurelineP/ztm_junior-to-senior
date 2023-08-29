import './Page.css'

export function Page({ id, children }){
	return (
		<div className = "Page">
			{children}
		</div>
	)
}